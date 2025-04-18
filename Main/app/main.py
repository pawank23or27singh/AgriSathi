from fastapi import FastAPI, HTTPException
from app import advisory, firebase_service, twilio_service, weather_service, scheduler, marketplace, crop_listing, finance, storage, user

app = FastAPI()

app.include_router(marketplace.router, prefix="/marketplace")
app.include_router(crop_listing.router, prefix="/crop")
app.include_router(finance.router, prefix="/finance")
app.include_router(storage.router, prefix="/storage")
app.include_router(user.router, prefix="/user")

@app.on_event("startup")
def startup_event():
    scheduler.start_scheduler()

@app.post("/register")
def register_farmer(farmer: firebase_service.Farmer):
    return firebase_service.register_farmer(farmer)

@app.post("/send_advisory")
def send_advisory():
    return advisory.send_weekly_advisory()

@app.get("/weather_alert")
def weather_alert():
    return weather_service.check_weather_and_alert()

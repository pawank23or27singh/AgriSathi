import os
from fastapi import FastAPI
from apscheduler.schedulers.background import BackgroundScheduler
from dotenv import load_dotenv
import requests
from weather_utils import fetch_weather
from firebase_utils import send_firebase_notification
from twilio_utils import send_sms, send_whatsapp
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse, JSONResponse, PlainTextResponse
from marketplace import Product, Order, list_verified_products, place_order
from payments import create_payment_order
from crop_market import create_crop_listing

# Load environment variables
load_dotenv()

app = FastAPI()
scheduler = BackgroundScheduler()

# Serve static files
app.mount("/", StaticFiles(directory="static", html=True), name="static")

# Placeholder for weather, firebase, twilio integrations

OPENWEATHERMAP_API_KEY = os.getenv("OPENWEATHERMAP_API_KEY")
OPENWEATHERMAP_URL = "https://api.openweathermap.org/data/2.5/weather"

def generate_advisory(weather_data):
    """
    Example advisory logic: You can replace this with crop/calendar-based logic.
    """
    if not weather_data:
        return "Weather data unavailable."
    temp = weather_data.get("main", {}).get("temp")
    desc = weather_data.get("weather", [{}])[0].get("description", "")
    return f"Current temp: {temp}°C. Weather: {desc}. Suggested: Irrigate if dry."

@app.post("/send_advisory")
def send_advisory(city: str, phone: str, whatsapp: str, fcm_token: str):
    """
    Fetch weather, generate advisory, and send via SMS, WhatsApp, and Firebase.
    Args:
        city: City name for weather
        phone: Recipient phone number (for SMS)
        whatsapp: Recipient WhatsApp number (e.g., 'whatsapp:+91xxxx')
        fcm_token: Firebase Cloud Messaging token
    """
    weather = fetch_weather(city=city)
    advisory = generate_advisory(weather)
    sms_sid = send_sms(phone, advisory)
    whatsapp_sid = send_whatsapp(whatsapp, advisory)
    firebase_resp = send_firebase_notification(fcm_token, "Agri Advisory", advisory)
    return {
        "advisory": advisory,
        "sms_sid": sms_sid,
        "whatsapp_sid": whatsapp_sid,
        "firebase_response": firebase_resp
    }

@app.get("/api/products")
def api_products():
    # Fetch verified products from Firestore (stubbed for now)
    # Replace this with actual Firestore query in production
    products = list_verified_products() or [
        {"id": "1", "name": "Wheat Seed A", "category": "seed", "supplier_name": "Bayer", "description": "High yield, certified", "verified": True},
        {"id": "2", "name": "NPK Fertilizer", "category": "fertilizer", "supplier_name": "UPL", "description": "Balanced nutrients", "verified": True}
    ]
    return JSONResponse(products)

@app.post("/api/order")
def api_order(order: dict):
    # Store order in Firestore (stubbed for now)
    # Replace this with actual Firestore logic
    place_order(order)
    return PlainTextResponse("Order placed successfully! Agent will contact you for delivery and verification.")

@app.post("/api/create_payment")
def api_create_payment(payment: dict):
    # payment should include: amount_inr, receipt_id, and optional notes
    amount_inr = payment.get("amount_inr")
    receipt_id = payment.get("receipt_id")
    notes = payment.get("notes", {})
    order = create_payment_order(amount_inr, receipt_id, notes)
    return order

@app.post("/api/crops")
def api_create_crop_listing(listing: dict):
    # Generate a unique id for the crop listing (in production, use Firestore auto-id)
    import uuid
    listing_data = {
        "id": str(uuid.uuid4()),
        "farmer_id": listing.get("phone"),
        "crop_name": listing.get("crop_name"),
        "quantity_kg": listing.get("quantity_kg"),
        "price_per_kg": listing.get("price_per_kg"),
        "location": listing.get("village"),
        "available": True,
        "description": listing.get("description"),
        # Optionally, store farmer name and phone for demo
        "farmer_name": listing.get("farmer_name"),
        "phone": listing.get("phone")
    }
    create_crop_listing(listing_data)
    return "Crop listed successfully! Buyers will contact you if interested."

@app.get("/")
def root():
    return {"message": "Agri Advisory Backend Running"}

# TODO: Schedule weekly advisories
# scheduler.add_job(...)
# scheduler.start()


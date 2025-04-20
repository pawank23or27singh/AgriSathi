from fastapi import FastAPI
from buyer_panel import router as buyer_router

app = FastAPI()

app.include_router(buyer_router)

# You can add more routers here in the future

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)

from fastapi import APIRouter
from crop_market import list_available_crops, place_crop_order
from pydantic import BaseModel
import uuid

router = APIRouter()

@router.get("/api/crops")
def get_available_crops():
    # Fetch available crops from Firestore (stubbed for now)
    crops = list_available_crops() or [
        {"id": "1", "crop_name": "Tomato", "quantity_kg": 100, "price_per_kg": 10, "location": "Village A", "farmer_name": "Ram"},
        {"id": "2", "crop_name": "Potato", "quantity_kg": 200, "price_per_kg": 15, "location": "Village B", "farmer_name": "Shyam"}
    ]
    return crops

class CropOrderForm(BaseModel):
    crop_listing_id: str
    buyer_id: str
    buyer_name: str
    quantity_kg: float

@router.post("/api/crop_order")
def create_crop_order(order: CropOrderForm):
    # In production, validate quantity and fetch crop details
    order_data = {
        "id": str(uuid.uuid4()),
        "crop_listing_id": order.crop_listing_id,
        "buyer_id": order.buyer_id,
        "buyer_name": order.buyer_name,
        "quantity_kg": order.quantity_kg,
        "status": "pending"
    }
    place_crop_order(order_data)
    return {"message": "Order placed! Farmer and logistics partner will be notified."}

from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import List, Optional
import uuid

router = APIRouter()

# In-memory data (replace with DB in production)
crops_for_sale = []
buyers = [
    {"id": "b1", "name": "Mandi A", "type": "mandi"},
    {"id": "b2", "name": "Kirana Store X", "type": "kirana"},
    {"id": "b3", "name": "Food Processor Z", "type": "processor"},
]
interests = []

class CropListing(BaseModel):
    farmer_name: str
    farmer_phone: str
    crop_name: str
    quantity_kg: float
    price_per_kg: float
    location: str

class BuyerInterest(BaseModel):
    crop_id: str
    buyer_id: str
    offer_price_per_kg: Optional[float] = None
    message: Optional[str] = None

class LogisticsRequest(BaseModel):
    crop_id: str
    pickup_location: str
    drop_location: str

@router.post("/list_crop")
def list_crop(crop: CropListing):
    crop_id = uuid.uuid4().hex
    crop_entry = crop.dict()
    crop_entry["crop_id"] = crop_id
    crops_for_sale.append(crop_entry)
    return {"status": "success", "crop_id": crop_id}

@router.get("/crops", response_model=List[dict])
def get_crops():
    return crops_for_sale

@router.get("/buyers", response_model=List[dict])
def get_buyers():
    return buyers

@router.post("/express_interest")
def express_interest(interest: BuyerInterest):
    # Store buyer's interest in a crop
    interests.append(interest.dict())
    return {"status": "success", "message": "Interest recorded"}

@router.post("/book_logistics")
def book_logistics(req: LogisticsRequest):
    # Stub for route planning/logistics booking
    return {
        "status": "success",
        "message": f"Logistics booked from {req.pickup_location} to {req.drop_location} for crop {req.crop_id}"
    }

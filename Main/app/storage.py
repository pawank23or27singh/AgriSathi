from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import List, Optional
import uuid
import random

router = APIRouter()

# Dummy data for storages
cold_storages = [
    {"id": "cs1", "name": "Rampur Cold Storage", "location": "Rampur", "capacity": 100, "available": 50, "rate_per_day": 10},
    {"id": "cs2", "name": "Lakhanpur Godown", "location": "Lakhanpur", "capacity": 200, "available": 120, "rate_per_day": 8},
]

bookings = []
advances = []

class StorageSearchRequest(BaseModel):
    location: str

class StorageBookingRequest(BaseModel):
    storage_id: str
    farmer_name: str
    crop: str
    quantity: int
    days: int

class AdvancePaymentRequest(BaseModel):
    farmer_name: str
    crop: str
    quantity: int
    estimated_value: float

@router.get("/nearby", response_model=List[dict])
def find_nearby_storage(location: str):
    # Return storages in the same location (dummy logic)
    return [s for s in cold_storages if s["location"].lower() == location.lower()]

@router.post("/book")
def book_storage(req: StorageBookingRequest):
    storage = next((s for s in cold_storages if s["id"] == req.storage_id), None)
    if not storage:
        raise HTTPException(status_code=404, detail="Storage not found")
    if req.quantity > storage["available"]:
        raise HTTPException(status_code=400, detail="Not enough space available")
    storage["available"] -= req.quantity
    booking_id = uuid.uuid4().hex
    bookings.append({
        "booking_id": booking_id,
        "storage_id": req.storage_id,
        "farmer_name": req.farmer_name,
        "crop": req.crop,
        "quantity": req.quantity,
        "days": req.days
    })
    return {"status": "success", "booking_id": booking_id, "message": f"Booked {req.quantity} units for {req.days} days."}

@router.post("/advance_payment")
def advance_payment(req: AdvancePaymentRequest):
    # Dummy logic: pay up to 70% of estimated value
    advance_amount = req.estimated_value * 0.7
    advance_id = uuid.uuid4().hex
    advances.append({
        "advance_id": advance_id,
        "farmer_name": req.farmer_name,
        "crop": req.crop,
        "quantity": req.quantity,
        "amount": advance_amount
    })
    return {
        "status": "success",
        "advance_id": advance_id,
        "amount": advance_amount,
        "message": f"Advance payment of Rs. {advance_amount:.2f} approved."
    }

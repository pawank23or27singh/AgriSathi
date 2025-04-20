from pydantic import BaseModel
from typing import Optional, List
from firebase_utils import store_advisory_to_firestore

class Farmer(BaseModel):
    id: str
    name: str
    phone: str
    village: str

class Buyer(BaseModel):
    id: str
    name: str
    type: str  # mandi, kirana, processor
    contact: str

class CropListing(BaseModel):
    id: str
    farmer_id: str
    crop_name: str
    quantity_kg: float
    price_per_kg: float
    location: str
    available: bool = True
    description: Optional[str] = None

class CropOrder(BaseModel):
    id: str
    crop_listing_id: str
    buyer_id: str
    quantity_kg: float
    total_price: float
    logistics_partner_id: Optional[str] = None
    status: str = "pending"  # pending, in_transit, delivered, cancelled

# Firestore stub functions
def create_crop_listing(listing_data):
    return store_advisory_to_firestore('crop_listings', listing_data)

def list_available_crops():
    # Fetch from Firestore where available=True (stub)
    pass

def place_crop_order(order_data):
    return store_advisory_to_firestore('crop_orders', order_data)

def assign_logistics_to_crop_order(order_id, partner_id):
    # Update crop order in Firestore to add logistics partner (stub)
    pass

def get_crop_order_status(order_id):
    # Fetch crop order and return status/logistics info (stub)
    pass

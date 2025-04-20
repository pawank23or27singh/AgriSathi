from fastapi import APIRouter
from pydantic import BaseModel
import uuid
from crop_market import create_crop_listing

router = APIRouter()

class CropListingForm(BaseModel):
    farmer_name: str
    phone: str
    village: str
    crop_name: str
    quantity_kg: float
    price_per_kg: float
    description: str = ""

@router.post("/api/crops")
def create_crop(form: CropListingForm):
    listing_data = {
        "id": str(uuid.uuid4()),
        "farmer_id": form.phone,
        "crop_name": form.crop_name,
        "quantity_kg": form.quantity_kg,
        "price_per_kg": form.price_per_kg,
        "location": form.village,
        "available": True,
        "description": form.description,
        "farmer_name": form.farmer_name,
        "phone": form.phone
    }
    create_crop_listing(listing_data)
    return {"message": "Crop listed successfully! Buyers will contact you if interested."}

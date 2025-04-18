from fastapi import APIRouter, HTTPException, UploadFile, File, Form
from pydantic import BaseModel
from typing import Optional
import random

router = APIRouter()

# In-memory dummy data for farmer activities
farmer_activities = {
    "9999999999": {"orders": 3, "crop_sales": 2, "timely_payments": 3},
    "8888888888": {"orders": 1, "crop_sales": 1, "timely_payments": 1},
}

class LoanApplication(BaseModel):
    farmer_phone: str
    amount: float
    purpose: Optional[str] = "agriculture"

class InsuranceClaimResponse(BaseModel):
    status: str
    claim_id: str
    message: str

@router.get("/credit_score")
def get_credit_score(farmer_phone: str):
    # Simple scoring logic based on activity
    activity = farmer_activities.get(farmer_phone)
    if not activity:
        score = 300  # Default low score
    else:
        score = 600 + activity["orders"]*30 + activity["crop_sales"]*40 + activity["timely_payments"]*50
        if score > 900:
            score = 900
    return {"farmer_phone": farmer_phone, "credit_score": score}

@router.post("/apply_loan")
def apply_loan(application: LoanApplication):
    # Simulate loan approval (stub for NBFC/bank API)
    # In production, call real API and handle response
    if application.amount > 100000:
        return {"status": "rejected", "reason": "Amount exceeds limit"}
    approval = random.choice(["approved", "rejected"])
    return {
        "status": approval,
        "farmer_phone": application.farmer_phone,
        "amount": application.amount,
        "message": "Loan processed via NBFC API (stub)"
    }

@router.post("/claim_insurance", response_model=InsuranceClaimResponse)
async def claim_insurance(
    farmer_phone: str = Form(...),
    crop: str = Form(...),
    description: str = Form(...),
    latitude: float = Form(...),
    longitude: float = Form(...),
    photo: UploadFile = File(...)
):
    # In production, save file, verify GPS, and submit to insurance API
    claim_id = f"CLAIM{random.randint(1000,9999)}"
    return InsuranceClaimResponse(
        status="submitted",
        claim_id=claim_id,
        message=f"Insurance claim for {crop} submitted. Claim ID: {claim_id}"
    )

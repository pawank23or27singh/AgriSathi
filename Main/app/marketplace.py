from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import List, Optional
import uuid

router = APIRouter()

# Sample in-memory data (replace with DB or Firebase in production)
verified_products = [
    {"id": "1", "name": "Bayer Hybrid Seeds", "company": "Bayer", "price": 500, "verified": True},
    {"id": "2", "name": "UPL Fertilizer", "company": "UPL", "price": 300, "verified": True},
]

agents = [
    {"id": "a1", "name": "Agent Ram", "village": "Rampur", "phone": "9999999999"},
    {"id": "a2", "name": "Agent Shyam", "village": "Lakhanpur", "phone": "8888888888"},
]

orders = []

class OrderRequest(BaseModel):
    product_id: str
    farmer_name: str
    farmer_phone: str
    address: str
    village: str
    payment_method: Optional[str] = "razorpay"  # stub

class OrderResponse(BaseModel):
    order_id: str
    assigned_agent: dict
    payment_link: str

@router.get("/products", response_model=List[dict])
def list_verified_products():
    return verified_products

@router.post("/order", response_model=OrderResponse)
def place_order(order: OrderRequest):
    # Find product
    product = next((p for p in verified_products if p["id"] == order.product_id), None)
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    # Assign agent (simple round-robin)
    agent = agents[len(orders) % len(agents)]
    # Payment link (stub)
    payment_link = f"https://razorpay.com/pay/order_{uuid.uuid4().hex[:8]}"
    order_id = uuid.uuid4().hex
    orders.append({
        "order_id": order_id,
        "product": product,
        "farmer": order.dict(),
        "agent": agent,
        "status": "pending",
    })
    return OrderResponse(order_id=order_id, assigned_agent=agent, payment_link=payment_link)

from pydantic import BaseModel
from typing import List, Optional
from firebase_utils import store_advisory_to_firestore

# Models
class Supplier(BaseModel):
    id: str
    name: str
    verified: bool
    company: Optional[str] = None

class Product(BaseModel):
    id: str
    name: str
    category: str  # e.g., seed, fertilizer
    supplier_id: str
    verified: bool
    description: Optional[str] = None

class Order(BaseModel):
    id: str
    product_id: str
    buyer_name: str
    village: str
    agent_id: Optional[str] = None
    delivered: bool = False
    verified_by_agent: bool = False

class LogisticsPartner(BaseModel):
    id: str
    name: str
    contact: str
    service_area: Optional[str] = None
    verified: bool = False

# Functions for Firestore integration (stubbed, you can connect to Firestore as needed)
def add_product(product_data):
    return store_advisory_to_firestore('products', product_data)

def list_verified_products():
    # You would fetch from Firestore where verified=True
    pass

def place_order(order_data):
    return store_advisory_to_firestore('orders', order_data)

# Assign logistics partner/agent to an order
def assign_logistics_partner(order_id, partner_id):
    # Update order in Firestore to add logistics partner info (stub)
    # In production, fetch order, update agent_id/partner_id
    pass

# Update delivery status (delivered, verified)
def update_delivery_status(order_id, delivered: bool, verified_by_agent: bool):
    # Update order in Firestore (stub)
    pass

# Fetch logistics status for an order
def get_order_logistics(order_id):
    # Fetch order from Firestore and return logistics info (stub)
    pass

# More functions can be added for agent verification, supplier management, etc.

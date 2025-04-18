import firebase_admin
from firebase_admin import credentials, firestore
from app.models import Farmer
cred = credentials.Certificate('firebase_credentials.json')  # Place your Firebase service account key here
firebase_admin.initialize_app(cred)
db = firestore.client()

def register_farmer(farmer: Farmer):
    doc_ref = db.collection('farmers').document(farmer.phone)
    doc_ref.set(farmer.dict())
    return {"status": "registered"}

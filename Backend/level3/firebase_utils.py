import os
import firebase_admin
from firebase_admin import credentials, messaging, firestore

# Initialize Firebase app only once
firebase_app = None
if not firebase_admin._apps:
    cred_path = os.getenv("FIREBASE_CREDENTIALS")  # Path to service account key JSON
    if cred_path:
        cred = credentials.Certificate(cred_path)
        firebase_app = firebase_admin.initialize_app(cred)
    else:
        raise EnvironmentError("FIREBASE_CREDENTIALS env variable not set.")

def send_firebase_notification(token, title, body):
    """
    Send push notification to a device using Firebase Cloud Messaging.
    Args:
        token (str): Device FCM token
        title (str): Notification title
        body (str): Notification body
    Returns:
        Response from Firebase messaging API
    """
    message = messaging.Message(
        notification=messaging.Notification(title=title, body=body),
        token=token
    )
    response = messaging.send(message)
    return response

# Example Firestore usage
def store_advisory_to_firestore(collection, data):
    db = firestore.client()
    doc_ref = db.collection(collection).add(data)
    return doc_ref

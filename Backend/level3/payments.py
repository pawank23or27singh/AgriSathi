import os
import razorpay

RAZORPAY_KEY_ID = os.getenv("RAZORPAY_KEY_ID")
RAZORPAY_KEY_SECRET = os.getenv("RAZORPAY_KEY_SECRET")

client = razorpay.Client(auth=(RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET))

def create_payment_order(amount_inr, receipt_id, notes=None):
    """
    Create a Razorpay order for UPI/PhonePe/Paytm payments.
    Args:
        amount_inr: Amount in INR (float or int)
        receipt_id: Unique receipt/order id (str)
        notes: Optional dict for extra info
    Returns:
        Razorpay order dict
    """
    order_data = {
        "amount": int(amount_inr * 100),  # Razorpay expects paise
        "currency": "INR",
        "payment_capture": 1,
        "receipt": receipt_id,
        "notes": notes or {},
        "method": "upi"
    }
    return client.order.create(order_data)

# You can add verify_payment and webhook handler as needed

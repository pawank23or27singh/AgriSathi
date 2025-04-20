import os
from twilio.rest import Client

TWILIO_ACCOUNT_SID = os.getenv("TWILIO_ACCOUNT_SID")
TWILIO_AUTH_TOKEN = os.getenv("TWILIO_AUTH_TOKEN")
TWILIO_PHONE_NUMBER = os.getenv("TWILIO_PHONE_NUMBER")  # For SMS
TWILIO_WHATSAPP_NUMBER = os.getenv("TWILIO_WHATSAPP_NUMBER")  # For WhatsApp (e.g., 'whatsapp:+14155238886')

client = Client(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)

def send_sms(to, body):
    """
    Send SMS using Twilio.
    Args:
        to (str): Recipient phone number (e.g., '+91xxxxxxxxxx')
        body (str): Message content
    Returns:
        Message SID
    """
    message = client.messages.create(
        body=body,
        from_=TWILIO_PHONE_NUMBER,
        to=to
    )
    return message.sid

def send_whatsapp(to, body):
    """
    Send WhatsApp message using Twilio.
    Args:
        to (str): Recipient WhatsApp number (e.g., 'whatsapp:+91xxxxxxxxxx')
        body (str): Message content
    Returns:
        Message SID
    """
    message = client.messages.create(
        body=body,
        from_=TWILIO_WHATSAPP_NUMBER,
        to=to
    )
    return message.sid

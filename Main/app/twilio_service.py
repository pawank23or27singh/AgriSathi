# Placeholder for Twilio integration
from twilio.rest import Client
import os
from dotenv import load_dotenv
load_dotenv()

TWILIO_SID = os.getenv('TWILIO_SID')
TWILIO_AUTH_TOKEN = os.getenv('TWILIO_AUTH_TOKEN')
TWILIO_PHONE = os.getenv('TWILIO_PHONE')

client = Client(TWILIO_SID, TWILIO_AUTH_TOKEN)

def send_sms(phone, message):
    try:
        message_obj = client.messages.create(
            body=message,
            from_=TWILIO_PHONE,
            to=phone
        )
        return {"status": "sent", "sid": message_obj.sid}
    except Exception as e:
        return {"status": "error", "error": str(e)}

def send_whatsapp(phone, message):
    try:
        message_obj = client.messages.create(
            body=message,
            from_='whatsapp:' + TWILIO_PHONE,
            to='whatsapp:' + phone
        )
        return {"status": "sent", "sid": message_obj.sid}
    except Exception as e:
        return {"status": "error", "error": str(e)}

def send_voice(phone, message):
    try:
        call = client.calls.create(
            twiml=f'<Response><Say>{message}</Say></Response>',
            to=phone,
            from_=TWILIO_PHONE
        )
        return {"status": "call placed", "sid": call.sid}
    except Exception as e:
        return {"status": "error", "error": str(e)}

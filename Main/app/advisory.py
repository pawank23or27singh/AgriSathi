from .firebase_service import db
from .twilio_service import send_sms, send_whatsapp, send_voice

def send_weekly_advisory():
    farmers = db.collection('farmers').stream()
    results = []
    for farmer in farmers:
        data = farmer.to_dict()
        # Custom logic for advisory message
        message = f"Namaste {data['name']}, yeh hafte ka salah: Beej lagane ka sahi samay hai. Mausam ki jaankari ke liye alert dekhein."
        # SMS advisory
        sms_result = send_sms(data['phone'], message)
        # WhatsApp advisory
        wa_result = send_whatsapp(data['phone'], message)
        # Voice advisory for illiterate farmers
        voice_result = None
        if data.get('illiterate', False):
            voice_result = send_voice(data['phone'], message)
        results.append({
            "phone": data['phone'],
            "sms": sms_result,
            "whatsapp": wa_result,
            "voice": voice_result
        })
    return {"status": "advisory sent", "results": results}

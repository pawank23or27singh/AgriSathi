import requests
import os
from dotenv import load_dotenv
from app.firebase_service import db
from app.twilio_service import send_sms
load_dotenv()

OWM_API_KEY = os.getenv("0ea3253d234761e0599f815b55dc329b")

# Example: fetch weather for all farmers and alert if rain is predicted
def check_weather_and_alert():
    farmers = db.collection('farmers').stream()
    results = []
    for farmer in farmers:
        data = farmer.to_dict()
        # Assume location is city name
        url = f"https://api.openweathermap.org/data/2.5/weather?q={data['location']}&appid={OWM_API_KEY}&lang={data['language']}&units=metric"
        resp = requests.get(url)
        if resp.status_code == 200:
            weather = resp.json()
            desc = weather['weather'][0]['description']
            if 'rain' in desc.lower():
                msg = f"Alert: Barish ki sambhavana hai {data['location']} mein. Kripya apne fasal ki suraksha karein. ({desc})"
                send_sms(data['phone'], msg)
                results.append({"phone": data['phone'], "alert": msg})
        else:
            results.append({"phone": data['phone'], "error": resp.text})
    return {"status": "weather checked", "results": results}

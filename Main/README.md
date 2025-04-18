# Farmer Advisory Backend (Python)

## Features
- Register farmers with location, language, crop, literacy
- Send weekly advisories via SMS/WhatsApp/voice
- Weather alert integration (OpenWeatherMap)
- Uses Firebase for data storage

## Setup
1. `pip install -r requirements.txt`
2. Add your Firebase service account JSON as `firebase_credentials.json`
3. Fill `.env` with Twilio and OpenWeatherMap API keys
4. Run with: `uvicorn app.main:app --reload`

## Endpoints
- `/register` (POST): Register a farmer
- `/send_advisory` (POST): Send weekly advisory
- `/weather_alert` (GET): Trigger weather alert

---
This is a starting skeleton. Add real advisory, WhatsApp, and voice logic as needed.

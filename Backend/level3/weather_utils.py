import os
import requests
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

OPENWEATHERMAP_API_KEY = os.getenv("OPENWEATHERMAP_API_KEY")
OPENWEATHERMAP_URL = "https://api.openweathermap.org/data/2.5/weather"

def fetch_weather(city=None, lat=None, lon=None):
    """
    Fetch current weather data for a given city or lat/lon using OpenWeatherMap API.
    Returns weather data as dict, or None on failure.
    """
    params = {"appid": OPENWEATHERMAP_API_KEY, "units": "metric"}
    if city:
        params["q"] = city
    elif lat and lon:
        params["lat"] = lat
        params["lon"] = lon
    else:
        raise ValueError("Provide either city name or latitude and longitude.")
    try:
        response = requests.get(OPENWEATHERMAP_URL, params=params, timeout=10)
        response.raise_for_status()
        return response.json()
    except Exception as e:
        print(f"Weather API error: {e}")
        return None

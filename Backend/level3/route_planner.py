import os
import requests

ORS_API_KEY = os.getenv("ORS_API_KEY")  # Set this in your .env file
ORS_DIRECTIONS_URL = "https://api.openrouteservice.org/v2/directions/driving-car"

def plan_route(locations):
    """
    locations: list of [lon, lat] pairs, e.g., [[77.1, 28.6], [77.2, 28.7]]
    Returns route info from OpenRouteService (distance, duration, geometry, etc.)
    """
    headers = {"Authorization": ORS_API_KEY, "Content-Type": "application/json"}
    body = {"coordinates": locations}
    resp = requests.post(ORS_DIRECTIONS_URL, json=body, headers=headers, timeout=10)
    resp.raise_for_status()
    return resp.json()

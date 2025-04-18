from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import Optional
import uuid

router = APIRouter()

# In-memory users
users = []

class UserRegistration(BaseModel):
    mobile: str
    name: Optional[str] = None
    preferred_language: Optional[str] = "hi"  # default Hindi
    wants_voice_support: Optional[bool] = False

@router.post("/register")
def register_user(user: UserRegistration):
    # Check if already registered
    if any(u["mobile"] == user.mobile for u in users):
        return {"status": "already_registered"}
    user_id = uuid.uuid4().hex
    users.append({
        "user_id": user_id,
        "mobile": user.mobile,
        "name": user.name,
        "preferred_language": user.preferred_language,
        "wants_voice_support": user.wants_voice_support
    })
    return {"status": "success", "user_id": user_id}

@router.get("/profile")
def get_profile(mobile: str):
    user = next((u for u in users if u["mobile"] == mobile), None)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user

@router.get("/languages")
def get_languages():
    # Supported languages
    return [
        {"code": "hi", "name": "Hindi"},
        {"code": "mr", "name": "Marathi"},
        {"code": "pa", "name": "Punjabi"},
        {"code": "gu", "name": "Gujarati"},
        {"code": "en", "name": "English"}
    ]

@router.get("/voice_support")
def voice_support(mobile: str):
    user = next((u for u in users if u["mobile"] == mobile), None)
    if not user or not user.get("wants_voice_support"):
        return {"status": "not_enabled"}
    # Stub: In production, trigger voice call or provide TTS
    return {"status": "enabled", "message": f"Voice support active for {user['mobile']}"}

@router.get("/local_agent_help")
def local_agent_help(village: str):
    # Dummy stub for agent lookup
    agents = [
        {"name": "Agent Ram", "village": "Rampur", "phone": "9999999999"},
        {"name": "Agent Shyam", "village": "Lakhanpur", "phone": "8888888888"},
    ]
    return [a for a in agents if a["village"].lower() == village.lower()]

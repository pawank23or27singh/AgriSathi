from pydantic import BaseModel
from typing import Optional

class Farmer(BaseModel):
    name: str
    phone: str
    location: str
    language: str
    crop: str
    illiterate: Optional[bool] = False

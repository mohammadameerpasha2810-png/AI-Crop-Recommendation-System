from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import joblib
import os

app = FastAPI()

# CORS Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "http://localhost:5174",
        "http://127.0.0.1:5174",
        "https://ai-crop-recommendation-system-pink.vercel.app"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load trained model
BASE_DIR = os.path.dirname(__file__)
model = joblib.load(os.path.join(BASE_DIR, "crop_model.pkl"))


@app.get("/")
def home():
    return {
        "message": "AI Crop Recommendation API Running"
    }


@app.post("/predict")
def predict(
    N: float,
    P: float,
    K: float,
    temperature: float,
    humidity: float,
    ph: float,
    rainfall: float
):
    prediction = model.predict([
        [N, P, K, temperature, humidity, ph, rainfall]
    ])

    return {
        "recommended_crop": prediction[0]
    }
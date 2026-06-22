
import { useState } from "react";
import axios from "axios";

export default function Prediction() {
  const [N, setN] = useState("");
  const [P, setP] = useState("");
  const [K, setK] = useState("");
  const [temperature, setTemperature] = useState("");
  const [humidity, setHumidity] = useState("");
  const [ph, setPh] = useState("");
  const [rainfall, setRainfall] = useState("");
  const [result, setResult] = useState("");

  const predictCrop = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/predict",
        null,
        {
          params: {
            N,
            P,
            K,
            temperature,
            humidity,
            ph,
            rainfall,
          },
        }
      );

      setResult(response.data.recommended_crop);
    } catch (error) {
      console.error(error);
      alert("Prediction failed.");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: "url('/images/background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "40px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          background: "rgba(255,255,255,0.92)",
          backdropFilter: "blur(8px)",
          borderRadius: "25px",
          padding: "40px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#1b5e20",
            fontSize: "3rem",
            marginBottom: "10px",
          }}
        >
          🌾 AI Crop Recommendation
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#555",
            marginBottom: "40px",
          }}
        >
          Enter soil and weather conditions to receive an
          AI-powered crop recommendation.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "30px",
          }}
        >
          {/* Input Section */}
          <div
            style={{
              background: "#ffffff",
              padding: "30px",
              borderRadius: "20px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
            }}
          >
            <h2 style={{ color: "#2e7d32" }}>
              🌱 Soil & Weather Inputs
            </h2>

            <input placeholder="Nitrogen (N)" value={N} onChange={(e) => setN(e.target.value)} style={inputStyle} />
            <input placeholder="Phosphorus (P)" value={P} onChange={(e) => setP(e.target.value)} style={inputStyle} />
            <input placeholder="Potassium (K)" value={K} onChange={(e) => setK(e.target.value)} style={inputStyle} />
            <input placeholder="Temperature (°C)" value={temperature} onChange={(e) => setTemperature(e.target.value)} style={inputStyle} />
            <input placeholder="Humidity (%)" value={humidity} onChange={(e) => setHumidity(e.target.value)} style={inputStyle} />
            <input placeholder="pH Value" value={ph} onChange={(e) => setPh(e.target.value)} style={inputStyle} />
            <input placeholder="Rainfall (mm)" value={rainfall} onChange={(e) => setRainfall(e.target.value)} style={inputStyle} />

            <button
              onClick={predictCrop}
              style={{
                width: "100%",
                padding: "15px",
                marginTop: "15px",
                border: "none",
                borderRadius: "10px",
                background: "#2e7d32",
                color: "white",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              🚀 Predict Crop
            </button>
          </div>

          {/* Result Section */}
          <div
            style={{
              background: "#ffffff",
              padding: "30px",
              borderRadius: "20px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
              textAlign: "center",
            }}
          >
            <h2 style={{ color: "#2e7d32" }}>
              📊 Recommendation Result
            </h2>

            {result ? (
              <>
                <img
                  src="/images/logo.png"
                  alt="Crop"
                  style={{
                    width: "120px",
                    marginTop: "20px",
                  }}
                />

                <h1
                  style={{
                    color: "#1b5e20",
                    fontSize: "3rem",
                  }}
                >
                  {result}
                </h1>

                <div
                  style={{
                    background: "#e8f5e9",
                    padding: "20px",
                    borderRadius: "15px",
                    marginTop: "20px",
                    textAlign: "left",
                  }}
                >
                  <p>✅ AI Recommendation Generated</p>
                  <p>✅ Soil Parameters Analyzed</p>
                  <p>✅ Weather Conditions Evaluated</p>
                  <p>✅ Best Crop Identified</p>
                </div>
              </>
            ) : (
              <div style={{ marginTop: "80px" }}>
                <h3>🌱 Awaiting Input</h3>
                <p>
                  Enter your agricultural parameters and
                  click Predict Crop.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginTop: "12px",
  borderRadius: "10px",
  border: "1px solid #ddd",
  fontSize: "15px",
};



import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        background: "#f5fff5",
        minHeight: "100vh",
      }}
    >
      {/* Hero Banner */}
      <div
        style={{
          textAlign: "center",
          padding: "40px",
        }}
      >
        <img
          src="/images/farm-banner.png"
          alt="Farm Banner"
          style={{
            width: "100%",
            maxHeight: "450px",
            objectFit: "cover",
            borderRadius: "20px",
            boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
          }}
        />

        <h1
          style={{
            color: "#1b5e20",
            marginTop: "30px",
            fontSize: "2.5rem",
          }}
        >
          🌾 AI-Powered Crop Recommendation System
        </h1>

        <h2
          style={{
            color: "#555",
          }}
        >
          Smart Farming Starts with Smart Decisions
        </h2>

        <p
          style={{
            maxWidth: "850px",
            margin: "20px auto",
            fontSize: "18px",
            lineHeight: "1.6",
          }}
        >
          This system helps farmers identify suitable crops
          using soil nutrients, weather conditions, rainfall,
          machine learning, Microsoft Fabric and Power BI.
        </p>

        <div
          style={{
            marginTop: "30px",
          }}
        >
          <button
            onClick={() => navigate("/prediction")}
            style={buttonStyle}
          >
            🌱 Predict Crop
          </button>

          <button
            onClick={() => navigate("/dashboard")}
            style={{
              ...buttonStyle,
              marginLeft: "15px",
              background: "#1565c0",
            }}
          >
            📊 View Dashboard
          </button>
        </div>
      </div>

      {/* Feature Cards */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          flexWrap: "wrap",
          padding: "30px",
        }}
      >
        <FeatureCard
          title="🤖 AI Prediction"
          text="Recommend crops using soil and weather data."
          color="#e8f5e9"
        />

        <FeatureCard
          title="📊 Analytics"
          text="Visualize rainfall, temperature and crop trends."
          color="#e3f2fd"
        />

        <FeatureCard
          title="☁️ Microsoft Fabric"
          text="Integrated with Fabric and Power BI dashboards."
          color="#fff8e1"
        />
      </div>

      {/* Dashboard Preview */}
      <div
        style={{
          textAlign: "center",
          padding: "30px",
        }}
      >
        <h2
          style={{
            color: "#1b5e20",
          }}
        >
          📊 Dashboard Preview
        </h2>

        <img
          src="/images/sample.png"
          alt="Dashboard Preview"
          style={{
            width: "100%",
            maxWidth: "1000px",
            borderRadius: "20px",
            boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
          }}
        />
      </div>

      {/* CTA Section */}
      <div
        style={{
          textAlign: "center",
          padding: "50px",
          background: "#e8f5e9",
          marginTop: "40px",
        }}
      >
        <h2>
          Ready to Explore Smart Farming?
        </h2>

        <p>
          Get crop recommendations and analyze agricultural data instantly.
        </p>

        <button
          onClick={() => navigate("/prediction")}
          style={buttonStyle}
        >
          🚀 Start Prediction
        </button>
      </div>
    </div>
  );
}

function FeatureCard({ title, text, color }) {
  return (
    <div
      style={{
        background: color,
        width: "260px",
        padding: "25px",
        borderRadius: "15px",
        boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
      }}
    >
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

const buttonStyle = {
  background: "#2e7d32",
  color: "white",
  border: "none",
  padding: "15px 25px",
  borderRadius: "10px",
  cursor: "pointer",
  fontSize: "16px",
};


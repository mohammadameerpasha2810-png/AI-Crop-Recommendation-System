
export default function Dashboard() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)",
        padding: "30px",
      }}
    >
      {/* Header */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        <h1
          style={{
            color: "#1b5e20",
            fontSize: "2.5rem",
            marginBottom: "10px",
          }}
        >
          📊 Analytics Dashboard
        </h1>

        <p
          style={{
            fontSize: "18px",
            color: "#444",
          }}
        >
          Crop insights and analytics powered by
          Microsoft Fabric and Power BI
        </p>
      </div>

      {/* KPI Cards */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
          marginBottom: "30px",
        }}
      >
        <Card title="🌧 Rainfall Analysis" color="#e3f2fd" />
        <Card title="🌡 Temperature Trends" color="#fff3e0" />
        <Card title="🌾 Crop Insights" color="#e8f5e9" />
        <Card title="📈 Data Analytics" color="#f3e5f5" />
      </div>

      {/* Dashboard Container */}
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "20px",
          boxShadow: "0 5px 20px rgba(0,0,0,0.15)",
        }}
      >
        <iframe
          title="Fabric Dashboard"
          src="https://app.fabric.microsoft.com/reportEmbed?reportId=df5205f9-ece1-4f3a-a274-7b4a32e4cc3d&autoAuth=true&ctid=8d7dd5c1-a94d-4ae3-abe0-b5f24a39b62c"
          width="100%"
          height="750"
          style={{
            border: "none",
            borderRadius: "15px",
          }}
          allowFullScreen
        />
      </div>

      {/* Bottom Information */}
      <div
        style={{
          marginTop: "30px",
          textAlign: "center",
          background: "rgba(255,255,255,0.8)",
          padding: "20px",
          borderRadius: "15px",
        }}
      >
        <h3>📌 Dashboard Highlights</h3>

        <p>
          Monitor rainfall trends, temperature patterns,
          crop performance, and agricultural insights
          through an interactive Power BI dashboard.
        </p>
      </div>
    </div>
  );
}

function Card({ title, color }) {
  return (
    <div
      style={{
        background: color,
        padding: "20px",
        width: "220px",
        borderRadius: "15px",
        textAlign: "center",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        fontWeight: "bold",
      }}
    >
      {title}
    </div>
  );
}


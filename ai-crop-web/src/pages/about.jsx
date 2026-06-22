import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@2.47.0/tabler-icons.min.css";
    document.head.appendChild(link);
  }, []);

  return (
    <div style={{ minHeight: "100vh", background: "#f5f7f2", padding: "48px 20px" }}>
      <div
        style={{
          maxWidth: "860px",
          margin: "0 auto",
          background: "#ffffff",
          borderRadius: "20px",
          padding: "48px",
          border: "1px solid #e4e9df",
        }}
      >
        {/* Hero */}
        <div
          style={{
            marginBottom: "40px",
            paddingBottom: "32px",
            borderBottom: "1px solid #e4e9df",
          }}
        >
          <p
            style={{
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#888",
              margin: "0 0 10px",
            }}
          >
            Agricultural AI
          </p>
          <h1
            style={{
              fontSize: "32px",
              fontWeight: 600,
              color: "#1a1a1a",
              lineHeight: 1.2,
              margin: "0 0 14px",
            }}
          >
            AI Crop{" "}
            <span style={{ color: "#3B6D11" }}>Recommendation</span> System
          </h1>
          <p
            style={{
              fontSize: "16px",
              color: "#555",
              lineHeight: 1.75,
              margin: 0,
              maxWidth: "580px",
            }}
          >
            Helps farmers identify suitable crops using soil nutrients, weather
            conditions, and rainfall data — powered by machine learning,
            Microsoft Fabric, and Power BI.
          </p>
        </div>

        {/* Objective */}
        <Section label="Objective">
          <div
            style={{
              background: "#f7f9f5",
              borderRadius: "12px",
              padding: "20px 24px",
              border: "1px solid #e4e9df",
            }}
          >
            <p style={{ margin: 0, fontSize: "15px", color: "#444", lineHeight: 1.75 }}>
              To provide intelligent crop recommendations and agricultural
              analytics that help farmers make data-driven decisions and improve
              crop productivity across diverse soil and climate conditions.
            </p>
          </div>
        </Section>

        {/* Technologies */}
        <Section label="Technologies Used">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
              gap: "12px",
            }}
          >
            <TechCard icon="ti-atom" color="#185FA5" bg="#E6F1FB" name="React" />
            <TechCard icon="ti-cloud" color="#3B6D11" bg="#EAF3DE" name="Microsoft Fabric" />
            <TechCard icon="ti-chart-bar" color="#854F0B" bg="#FAEEDA" name="Power BI" />
            <TechCard icon="ti-brand-python" color="#993556" bg="#FBEAF0" name="Python" />
            <TechCard icon="ti-brain" color="#534AB7" bg="#EEEDFE" name="Machine Learning" />
            <TechCard icon="ti-api" color="#993C1D" bg="#FAECE7" name="FastAPI" />
          </div>
        </Section>

        {/* Architecture */}
        <Section label="System Architecture">
          <div style={{ borderRadius: "12px", overflow: "hidden", border: "1px solid #e4e9df" }}>
            {[
              { num: 1, label: "Dataset", sub: "Soil & climate inputs" },
              { num: 2, label: "Microsoft Fabric", sub: "Data pipeline" },
              { num: 3, label: "Power BI Dashboard", sub: "Analytics layer" },
              { num: 4, label: "FastAPI Backend", sub: "ML inference" },
              { num: 5, label: "React Web App", sub: "User interface" },
              { num: 6, label: "AI Crop Recommendation", sub: "Output" },
            ].map((step, i, arr) => (
              <div
                key={step.num}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  padding: "14px 18px",
                  background: "#ffffff",
                  borderBottom: i < arr.length - 1 ? "1px solid #e4e9df" : "none",
                }}
              >
                <div
                  style={{
                    width: "24px",
                    height: "24px",
                    borderRadius: "50%",
                    background: "#EAF3DE",
                    color: "#3B6D11",
                    fontSize: "11px",
                    fontWeight: 600,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {step.num}
                </div>
                <span style={{ fontSize: "14px", fontWeight: 500, color: "#1a1a1a" }}>
                  {step.label}
                </span>
                <span style={{ fontSize: "12px", color: "#888", marginLeft: "auto" }}>
                  {step.sub}
                </span>
              </div>
            ))}
          </div>
        </Section>

        {/* Benefits */}
        <Section label="Key Benefits">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
              gap: "12px",
            }}
          >
            <BenefitCard icon="ti-seeding" title="Improve Crop Selection" />
            <BenefitCard icon="ti-shield-check" title="Reduce Farming Risk" />
            <BenefitCard icon="ti-chart-line" title="Data-Driven Decisions" />
            <BenefitCard icon="ti-layout-dashboard" title="Interactive Analytics" />
          </div>
        </Section>
      </div>
    </div>
  );
}

function Section({ label, children }) {
  return (
    <div style={{ marginBottom: "36px" }}>
      <p
        style={{
          fontSize: "11px",
          fontWeight: 600,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "#888",
          margin: "0 0 14px",
        }}
      >
        {label}
      </p>
      {children}
    </div>
  );
}

function TechCard({ icon, color, bg, name }) {
  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #e4e9df",
        borderRadius: "10px",
        padding: "14px 16px",
        display: "flex",
        alignItems: "center",
        gap: "12px",
      }}
    >
      <div
        style={{
          width: "34px",
          height: "34px",
          borderRadius: "8px",
          background: bg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <i className={`ti ${icon}`} style={{ color, fontSize: "18px" }} />
      </div>
      <span style={{ fontSize: "13px", fontWeight: 500, color: "#1a1a1a" }}>{name}</span>
    </div>
  );
}

function BenefitCard({ icon, title }) {
  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #e4e9df",
        borderRadius: "12px",
        padding: "20px 16px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <div
        style={{
          width: "36px",
          height: "36px",
          borderRadius: "8px",
          background: "#EAF3DE",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <i className={`ti ${icon}`} style={{ color: "#3B6D11", fontSize: "20px" }} />
      </div>
      <span style={{ fontSize: "13px", fontWeight: 500, color: "#1a1a1a", lineHeight: 1.4 }}>
        {title}
      </span>
    </div>
  );
}

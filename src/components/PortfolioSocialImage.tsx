export default function PortfolioSocialImage() {
  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        width: "100%",
        position: "relative",
        background: "#0B0D12",
        padding: "65px",
        color: "#FFFFFF",
        fontFamily: "Arial, sans-serif",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -140,
          right: -60,
          width: 620,
          height: 620,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(37,99,235,0.30) 0%, rgba(11,13,18,0) 70%)",
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
          width: "100%",
          position: "relative",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              border: "1px solid #35527D",
              background: "#111827",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 36,
              fontWeight: 800,
              color: "#60A5FA",
            }}
          >
            M
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontSize: 18,
                color: "#60A5FA",
                letterSpacing: 5,
                fontWeight: 700,
              }}
            >
              PORTFOLIO
            </div>

            <div
              style={{
                fontSize: 16,
                color: "#9CA3AF",
                marginTop: 4,
              }}
            >
              SOFTWARE ENGINEERING · AI
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div
            style={{
              fontSize: 58,
              fontWeight: 800,
              letterSpacing: -2,
            }}
          >
            Mohit Kumar Singh
          </div>

          <div
            style={{
              fontSize: 27,
              color: "#60A5FA",
              fontWeight: 600,
            }}
          >
            Software Engineering · Backend · AI
          </div>

          <div
            style={{
              fontSize: 20,
              color: "#9CA3AF",
              marginTop: 10,
            }}
          >
            M.Sc. Computer Science · Karlsruhe Institute of Technology
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #263449",
            paddingTop: 24,
            color: "#A1A1AA",
            fontSize: 17,
          }}
        >
          <span>PROJECTS / SYSTEMS / INTELLIGENT APPLICATIONS</span>
          <span>mohit-portfolio-pi.vercel.app</span>
        </div>
      </div>
    </div>
  );
}
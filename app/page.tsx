export default function Page() {
  const charcoal = "#2b292a";
  const warmBeige = "#a89b8c";
  const coolGrey = "#f4f5f7";

  return (
    <main style={{ fontFamily: "Helvetica, Arial, sans-serif", color: charcoal, backgroundColor: "#ffffff", minHeight: "100vh" }}>
      {/* Hero Section */}
      <section style={{ 
        height: "70vh", backgroundColor: charcoal, color: "#ffffff",
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", 
        textAlign: "center", padding: "0 20px" 
      }}>
        <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: "800", margin: "0 0 10px 0", letterSpacing: "-1px" }}>
          A Rare Second Chance
        </h1>
        <p style={{ fontSize: "1.2rem", maxWidth: "700px", marginBottom: "40px", color: "#cfd2d7" }}>
          5 Premium Homes Return to Market at Cornerstone on Arum. Engineered for investment integrity and urban sophistication.
        </p>
        <div style={{ display: "flex", gap: "15px", flexWrap: "wrap", justifyContent: "center" }}>
          <a href="#" style={{ padding: "18px 36px", background: "#ffffff", color: charcoal, textDecoration: "none", fontWeight: "700", borderRadius: "4px", fontSize: "14px", textTransform: "uppercase" }}>
            Claim a Final Five Unit
          </a>
          <a href="#" style={{ padding: "18px 36px", border: "2px solid #ffffff", color: "#ffffff", textDecoration: "none", fontWeight: "700", borderRadius: "4px", fontSize: "14px", textTransform: "uppercase" }}>
            100% Financing Available
          </a>
        </div>
      </section>

      {/* Pillars Section */}
      <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px", padding: "80px 10%" }}>
        <div style={{ padding: "40px", borderLeft: `5px solid ${warmBeige}`, background: coolGrey }}>
          <h3 style={{ margin: "0 0 15px 0", fontSize: "1.5rem" }}>Strict No-Airbnb Policy</h3>
          <p style={{ color: "#555", lineHeight: "1.7" }}>
            Prioritising community stability. We protect your investment from the wear and tear of transient rentals and impending municipal rate hikes.
          </p>
        </div>
        <div style={{ padding: "40px", borderLeft: `5px solid ${warmBeige}`, background: coolGrey }}>
          <h3 style={{ margin: "0 0 15px 0", fontSize: "1.5rem" }}>AI-Integrated Security</h3>
          <p style={{ color: "#555", lineHeight: "1.7" }}>
            Absolute peace of mind via 24/7 off-site monitoring directly linked to armed response. Safety engineered into the infrastructure.
          </p>
        </div>
        <div style={{ padding: "40px", borderLeft: `5px solid ${warmBeige}`, background: coolGrey }}>
          <h3 style={{ margin: "0 0 15px 0", fontSize: "1.5rem" }}>Industrial Chic</h3>
          <p style={{ color: "#555", lineHeight: "1.7" }}>
            Architectural excellence featuring exposed concrete ceilings, feature brick accent walls, and contemporary black track lighting.
          </p>
        </div>
      </section>
    </main>
  );
}

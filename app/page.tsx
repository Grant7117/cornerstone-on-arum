export default function Page() {
  const charcoal = "#2b292a";
  const warmBeige = "#a89b8c";
  const coolGrey = "#f4f5f7";

  return (
    <main style={{ fontFamily: "Helvetica, Arial, sans-serif", color: charcoal, backgroundColor: "#ffffff", minHeight: "100vh" }}>
      {/* Hero Section */}
      <section style={{ 
        height: "75vh", backgroundColor: charcoal, color: "#ffffff",
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", 
        textAlign: "center", padding: "0 20px" 
      }}>
        <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: "800", margin: "0 0 15px 0", letterSpacing: "-1px" }}>
          A Rare Second Chance
        </h1>
        <p style={{ fontSize: "1.25rem", maxWidth: "750px", marginBottom: "40px", color: "#cfd2d7", lineHeight: "1.6" }}>
          5 Premium Homes Return to Market at Cornerstone on Arum. <br />
          Where enduring engineering meets urban sophistication.
        </p>
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
          <a href="#" style={{ padding: "20px 40px", background: "#ffffff", color: charcoal, textDecoration: "none", fontWeight: "700", borderRadius: "4px", fontSize: "14px", textTransform: "uppercase", letterSpacing: "1px" }}>
            Claim a Final Five Unit
          </a>
          <a href="#" style={{ padding: "20px 40px", border: "2px solid #ffffff", color: "#ffffff", textDecoration: "none", fontWeight: "700", borderRadius: "4px", fontSize: "14px", textTransform: "uppercase", letterSpacing: "1px" }}>
            100% Financing Available
          </a>
        </div>
      </section>

      {/* Pillars Section */}
      <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "40px", padding: "100px 10%" }}>
        <div style={{ padding: "50px", borderLeft: `6px solid ${warmBeige}`, background: coolGrey }}>
          <h3 style={{ margin: "0 0 20px 0", fontSize: "1.6rem", fontWeight: "700" }}>Strict No-Airbnb Policy</h3>
          <p style={{ color: "#555", lineHeight: "1.8", fontSize: "1.1rem" }}>
            Prioritising community stability. We protect your investment from the wear and tear of transient rentals and impending municipal rate hikes.
          </p>
        </div>
        <div style={{ padding: "50px", borderLeft: `6px solid ${warmBeige}`, background: coolGrey }}>
          <h3 style={{ margin: "0 0 20px 0", fontSize: "1.6rem", fontWeight: "700" }}>AI-Integrated Security</h3>
          <p style={{ color: "#555", lineHeight: "1.8", fontSize: "1.1rem" }}>
            Absolute peace of mind via 24/7 off-site monitoring directly linked to armed response. Safety is engineered into our infrastructure.
          </p>
        </div>
        <div style={{ padding: "50px", borderLeft: `6px solid ${warmBeige}`, background: coolGrey }}>
          <h3 style={{ margin: "0 0 20px 0", fontSize: "1.6rem", fontWeight: "700" }}>Raw Sophistication</h3>
          <p style={{ color: "#555", lineHeight: "1.8", fontSize: "1.1rem" }}>
            Architectural excellence featuring exposed concrete ceilings, feature brick accent walls, and contemporary black track lighting.
          </p>
        </div>
      </section>

      {/* Footer-style reinforcement */}
      <footer style={{ textAlign: "center", padding: "60px 20px", background: "#ffffff", borderTop: `1px solid ${coolGrey}` }}>
        <p style={{ fontSize: "0.9rem", color: warmBeige, textTransform: "uppercase", letterSpacing: "2px" }}>
          Cornerstone on Arum • Table View • 2026
        </p>
      </footer>
    </main>
  );
}

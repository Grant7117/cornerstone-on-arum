export default function Page() {
  const charcoal = "#2b292a";
  const warmBeige = "#a89b8c";
  const coolGrey = "#f4f5f7";

  return (
    <main style={{ fontFamily: "Arial, sans-serif", color: charcoal, backgroundColor: "#ffffff", minHeight: "100vh" }}>
      <section style={{ 
        height: "65vh", backgroundColor: charcoal, color: "#ffffff",
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", 
        textAlign: "center", padding: "0 20px" 
      }}>
        <h1 style={{ fontSize: "3.5rem", fontWeight: "800", margin: "0 0 10px 0" }}>A Rare Second Chance</h1>
        <p style={{ fontSize: "1.2rem", maxWidth: "650px", marginBottom: "30px", color: "#cfd2d7" }}>
          5 Premium Homes Return to Market at Cornerstone on Arum.
        </p>
        <div style={{ display: "flex", gap: "15px", justifyContent: "center" }}>
          <a href="#" style={{ padding: "16px 32px", background: "#ffffff", color: charcoal, textDecoration: "none", fontWeight: "700", borderRadius: "4px" }}>Claim a Final Five Unit</a>
          <a href="#" style={{ padding: "16px 32px", border: "2px solid #ffffff", color: "#ffffff", textDecoration: "none", fontWeight: "700", borderRadius: "4px" }}>100% Financing Available</a>
        </div>
      </section>

      <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px", padding: "80px 10%" }}>
        <div style={{ padding: "40px", borderLeft: `5px solid ${warmBeige}`, background: coolGrey }}>
          <h3 style={{ margin: "0 0 15px 0" }}>Strict No-Airbnb Policy</h3>
          <p style={{ color: "#555", lineHeight: "1.6" }}>Prioritising community stability and shielding investment integrity.</p>
        </div>
        <div style={{ padding: "40px", borderLeft: `5px solid ${warmBeige}`, background: coolGrey }}>
          <h3 style={{ margin: "0 0 15px 0" }}>AI-Integrated Security</h3>
          <p style={{ color: "#555", lineHeight: "1.6" }}>24/7 off-site monitoring directly linked to armed response.</p>
        </div>
        <div style={{ padding: "40px", borderLeft: `5px solid ${warmBeige}`, background: coolGrey }}>
          <h3 style={{ margin: "0 0 15px 0" }}>Raw Sophistication</h3>
          <p style={{ color: "#555", lineHeight: "1.6" }}>Exposed concrete ceilings and contemporary black track lighting.</p>
        </div>
      </section>
      
      <footer style={{ textAlign: "center", padding: "40px", color: warmBeige }}>
        CORNERSTONE ON ARUM • TABLE VIEW • 2026
      </footer>
    </main>
  );
}

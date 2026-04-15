export default function Page() {
  return (
    <main style={{ fontFamily: "sans-serif", color: "#2b292a", backgroundColor: "#ffffff", minHeight: "100vh" }}>
      <section style={{ 
        height: "60vh", backgroundColor: "#2b292a", color: "#ffffff",
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", 
        textAlign: "center", padding: "40px" 
      }}>
        <h1 style={{ fontSize: "3.5rem", fontWeight: "800", margin: "0 0 10px 0" }}>A Rare Second Chance</h1>
        <p style={{ fontSize: "1.2rem", maxWidth: "800px", marginBottom: "30px" }}>5 Premium Homes Return to Market. Engineered for investment integrity and crafted for life.</p>
        <div style={{ display: "flex", gap: "20px" }}>
          <a href="#" style={{ padding: "16px 32px", background: "#ffffff", color: "#2b292a", textDecoration: "none", fontWeight: "bold", borderRadius: "4px" }}>Claim a Final Five Unit</a>
          <a href="#" style={{ padding: "16px 32px", border: "2px solid #ffffff", color: "#ffffff", textDecoration: "none", fontWeight: "bold", borderRadius: "4px" }}>100% Financing Available</a>
        </div>
      </section>
      <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "40px", padding: "80px 10%" }}>
        <div style={{ padding: "40px", borderLeft: "4px solid #a89b8c", background: "#f4f5f7" }}>
          <h3 style={{ margin: "0 0 15px 0", color: "#2b292a" }}>Strict No-Airbnb Policy</h3>
          <p style={{ color: "#6d645b" }}>Community stability guaranteed. Protecting your investment from transient wear and commercial rate hikes.</p>
        </div>
        <div style={{ padding: "40px", borderLeft: "4px solid #a89b8c", background: "#f4f5f7" }}>
          <h3 style={{ margin: "0 0 15px 0", color: "#2b292a" }}>AI-Integrated Security</h3>
          <p style={{ color: "#6d645b" }}>Proactive, 24/7 monitoring linked directly to armed response for absolute peace of mind.</p>
        </div>
        <div style={{ padding: "40px", borderLeft: "4px solid #a89b8c", background: "#f4f5f7" }}>
          <h3 style={{ margin: "0 0 15px 0", color: "#2b292a" }}>Raw Sophistication</h3>
          <p style={{ color: "#6d645b" }}>Industrial chic aesthetic featuring exposed concrete ceilings and character brick accent walls.</p>
        </div>
      </section>
    </main>
  );
}

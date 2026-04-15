export default function Page() {
  return (
    <main style={{ fontFamily: "sans-serif", color: "#2b292a", backgroundColor: "#ffffff" }}>
      <section style={{ 
        position: "relative", height: "70vh", backgroundColor: "#2b292a", 
        display: "flex", alignItems: "center", justifyContent: "center", 
        textAlign: "center", color: "#ffffff", padding: "40px" 
      }}>
        <div>
          <h1 style={{ fontSize: "3rem", marginBottom: "10px" }}>A Rare Second Chance</h1>
          <p style={{ fontSize: "1.2rem", marginBottom: "30px" }}>5 Premium Homes Return to Market. Engineered for investment integrity.</p>
          <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
            <a href="#" style={{ padding: "15px 30px", background: "#ffffff", color: "#2b292a", textDecoration: "none", fontWeight: "bold", borderRadius: "4px" }}>Claim One of the Final Five</a>
            <a href="#" style={{ padding: "15px 30px", border: "2px solid #ffffff", color: "#ffffff", textDecoration: "none", fontWeight: "bold", borderRadius: "4px" }}>100% Financing Available</a>
          </div>
        </div>
      </section>
      <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px", padding: "60px 10%" }}>
        <div style={{ padding: "30px", borderLeft: "4px solid #a89b8c", background: "#f4f5f7" }}>
          <h3 style={{ marginTop: "0" }}>Strict No-Airbnb Policy</h3>
          <p>Community stability guaranteed. Shielding your investment from commercial rate hikes.</p>
        </div>
        <div style={{ padding: "30px", borderLeft: "4px solid #a89b8c", background: "#f4f5f7" }}>
          <h3 style={{ marginTop: "0" }}>AI-Integrated Security</h3>
          <p>24/7 proactive monitoring linked directly to armed response.</p>
        </div>
        <div style={{ padding: "30px", borderLeft: "4px solid #a89b8c", background: "#f4f5f7" }}>
          <h3 style={{ marginTop: "0" }}>Industrial Chic</h3>
          <p>Raw sophistication featuring exposed concrete and brick accent walls.</p>
        </div>
      </section>
    </main>
  );
}

"use client"
export function WhatsAppButton() {
  const formUrl = "https://www.privyr.com/form/zw8VR1xt#cornerstone-on-arum-contact-form"
  return (
    <button
      onClick={() => window.open(formUrl, "_blank")}
      style={{ 
        backgroundColor: "#0066FF", 
        color: "#ffffff", 
        fontWeight: "600", 
        fontSize: "14px", 
        border: "none", 
        width: "150px", 
        height: "44px", 
        borderRadius: "12px",
        cursor: "pointer",
        position: "fixed",
        bottom: "30px",
        right: "24px",
        zIndex: "9998",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
      className="shadow-lg hover:scale-105 transition-all active:scale-95"
    >
      Enquire Now
    </button>
  )
}
"use client"

export function WhatsAppButton() {
  // DIRECT WHATSAPP LINK - Bypasses Privyr entirely
  const whatsappUrl = "https://wa.me/27724503626?text=Hello,%20I'm%20enquiring%20about%20Cornerstone%20on%20Arum%20via%20the%20floating%20enquiry%20button."

  return (
    <button
      onClick={() => window.open(whatsappUrl, "_blank")}
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
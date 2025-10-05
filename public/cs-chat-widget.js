(() => {
  const Z = 2147483000;
  const SRC = "/chat";            // same-origin chat page
  const CARD_TOP = "2cm";         // lower the card

  function css(el, o){ Object.assign(el.style, o); }

  function build(){
    if (document.getElementById("cs-chat-root")) return;

    // Root
    const root = document.createElement("div");
    root.id = "cs-chat-root";
    css(root, { position:"fixed", right:"20px", bottom:"20px", zIndex:String(Z) });
    document.body.appendChild(root);

    // Pill bubble with text
    const bubble = document.createElement("button");
    bubble.id = "cs-chat-bubble";
    bubble.type = "button";
    bubble.setAttribute("aria-label","Open chat");
    bubble.innerHTML = '<span style="font-size:18px;line-height:1">💬</span><span style="font-weight:600">Any questions? Chat with me</span>';
    css(bubble, {
      display:"flex", alignItems:"center", gap:"10px",
      padding:"12px 16px", borderRadius:"9999px",
      background:"#2563eb", color:"#fff", border:"0",
      boxShadow:"0 12px 30px rgba(0,0,0,.25)", cursor:"pointer",
      fontFamily:"system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
      fontSize:"14px"
    });
    root.appendChild(bubble);

    // Modal
    const modal = document.createElement("div");
    modal.id = "cs-chat-modal";
    css(modal, {
      position:"fixed", right:"20px", top:CARD_TOP,
      width:"420px", maxWidth:"92vw", height:"72vh",
      background:"#fff", borderRadius:"20px",
      boxShadow:"0 20px 50px rgba(0,0,0,.25)",
      display:"none", overflow:"hidden", zIndex:String(Z)
    });
    root.appendChild(modal);

    // Header + close ×
    const header = document.createElement("div");
    css(header, { height:"44px", display:"flex", alignItems:"center", padding:"0 12px", background:"#0f172a", color:"#fff" });
    header.innerHTML = '<div style="font-weight:600">Cornerstone Assistant</div>';
    const close = document.createElement("button");
    close.type = "button";
    close.setAttribute("aria-label","Close chat");
    close.textContent = "×";
    css(close, { marginLeft:"auto", width:"36px", height:"36px", border:"0", background:"transparent", color:"#fff", fontSize:"22px", cursor:"pointer" });
    header.appendChild(close);
    modal.appendChild(header);

    // Iframe
    const frame = document.createElement("iframe");
    frame.src = SRC;
    frame.setAttribute("title","Cornerstone chat");
    frame.loading = "eager";
    css(frame, { width:"100%", height:"calc(100% - 44px)", border:"0" });
    modal.appendChild(frame);

    function toggle(open){ modal.style.display = open ? "block" : "none"; }
    bubble.addEventListener("click", e => { e.preventDefault(); toggle(true); });
    close.addEventListener("click", () => toggle(false));
    document.addEventListener("keydown", e => { if (e.key === "Escape") toggle(false); });

    // Guard against client navigations removing the node
    const obs = new MutationObserver(() => {
      if (!document.getElementById("cs-chat-root")) { obs.disconnect(); setTimeout(build, 0); }
    });
    obs.observe(document.body, { childList:true, subtree:false });
  }

  // Load after DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", build, { once:true });
  } else {
    build();
  }
})();

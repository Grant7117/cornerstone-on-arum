(() => {
  const SRC = "/chat";           // same-origin route
  const W = 420, H = 640, Z = 2147483000;

  if (window.__csChatWidgetInit) return;
  window.__csChatWidgetInit = true;

  const css = (el, s) => Object.assign(el.style, s);

  const root = document.createElement("div");
  root.id = "cs-chat-root";
  css(root, { position: "fixed", right: "20px", bottom: "20px", zIndex: Z });

  const bubble = document.createElement("button");
  bubble.id = "cs-chat-bubble";
  bubble.type = "button";
  bubble.setAttribute("aria-label", "Open chat");
  css(bubble, { width: "56px", height: "56px", borderRadius: "28px", border: "none",
    boxShadow: "0 6px 18px rgba(0,0,0,.18)", cursor: "pointer",
    background: "linear-gradient(180deg,#1976d2,#115293)", color: "#fff",
    fontSize: "26px", lineHeight: "56px" });
  bubble.textContent = "💬";

  const modal = document.createElement("div");
  modal.id = "cs-chat-modal";
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-modal", "true");
  css(modal, { position: "fixed", right: "20px", bottom: "86px", width: W+"px", height: H+"px",
    display: "none", zIndex: Z, borderRadius: "12px", overflow: "hidden",
    boxShadow: "0 16px 40px rgba(0,0,0,.25)", background: "#fff" });

  const header = document.createElement("div");
  css(header, { height: "44px", background: "#0b2241", color: "#fff",
    display: "flex", alignItems: "center", justifyContent: "space-between",
    padding: "0 12px", fontFamily: "system-ui, Arial, sans-serif", fontSize: "14px" });
  const title = document.createElement("div");
  title.textContent = "Cornerstone on Arum";
  const closeBtn = document.createElement("button");
  closeBtn.textContent = "×";
  closeBtn.type = "button";
  closeBtn.setAttribute("aria-label", "Close chat");
  css(closeBtn, { background: "transparent", border: "none", color: "#fff", fontSize: "24px", cursor: "pointer" });
  closeBtn.addEventListener("click", (e) => { e.preventDefault(); toggle(false); });

  const headerBar = document.createElement("div");
  css(headerBar, { display: "flex", width: "100%", alignItems: "center", justifyContent: "space-between" });
  headerBar.appendChild(title); headerBar.appendChild(closeBtn);

  const frame = document.createElement("iframe");
  frame.title = "Cornerstone Chat";
  frame.src = SRC;
  frame.allow = "clipboard-read; clipboard-write; microphone; geolocation; camera";
  frame.referrerPolicy = "strict-origin-when-cross-origin";
  css(frame, { width: "100%", height: "calc(100% - 44px)", border: "0", display: "block" });

  modal.appendChild(header); header.appendChild(headerBar);
  modal.appendChild(frame);
  root.appendChild(modal);
  root.appendChild(bubble);
  document.body.appendChild(root);

  // Neutralise any legacy anchors that used to navigate away
  const killers = document.querySelectorAll("#cornerstone-chat-link, a[data-cornerstone-chat]");
  killers.forEach(a => {
    a.removeAttribute("href");
    a.removeAttribute("target");
    a.style.cursor = "pointer";
    a.addEventListener("click", (e) => { e.preventDefault(); e.stopPropagation(); toggle(true); });
  });

  bubble.addEventListener("click", (e) => { e.preventDefault(); e.stopPropagation(); toggle(true); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") toggle(false); });

  function toggle(open) { modal.style.display = open ? "block" : "none"; }
})();


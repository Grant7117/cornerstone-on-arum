(() => {
  const ROOT_ID = "cs-chat-root";
  const CTA_ID = "cs-chat-cta";
  const IFRAME_SRC = "/chat"; // served by your site, avoids 404 and cross-origin issues

  const LINKS = {
    betterbond: "https://digiapp.betterbond.co.za/YolandaKensley/38613/129015",
    finishes: "/documents",
    units: "/apartments"
  };

  const kill = id => { const el = document.getElementById(id); if (el) el.remove(); };
  kill(ROOT_ID);
  kill(CTA_ID);

  const css = (el, styles) => Object.assign(el.style, styles);

  const cta = document.createElement("button");
  cta.id = CTA_ID;
  cta.type = "button";
  cta.setAttribute("aria-label","Open Cornerstone Assistant");
  cta.textContent = "Any questions? Chat with me";
  css(cta, {
    position: "fixed",
    right: "20px",
    bottom: "20px",
    zIndex: "2147483000",
    background: "#1e66f5",
    color: "#fff",
    border: "none",
    borderRadius: "999px",
    padding: "14px 18px",
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
    fontSize: "15px",
    fontWeight: "600",
    boxShadow: "0 8px 24px rgba(0,0,0,.18)",
    cursor: "pointer"
  });

  const root = document.createElement("div");
  root.id = ROOT_ID;
  css(root, {
    position: "fixed",
    inset: "0",
    zIndex: "2147483001",
    display: "none",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    background: "rgba(0,0,0,.18)"
  });

  const card = document.createElement("div");
  css(card, {
    width: "min(420px, 96vw)",
    height: "min(640px, 88vh)",
    margin: "0 20px 20px 0",
    background: "#0f172a",
    borderRadius: "16px",
    boxShadow: "0 12px 40px rgba(0,0,0,.28)",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column"
  });

  const header = document.createElement("div");
  header.innerHTML = `
    <div style="
      display:flex;align-items:center;justify-content:space-between;
      padding:16px 18px;color:#fff;background:#0f172a;font-weight:700;">
      <span>Cornerstone Assistant</span>
      <button type="button" aria-label="Close" id="cs-close" style="
        appearance:none;border:0;background:transparent;color:#9ca3af;
        font-size:22px;line-height:1;cursor:pointer;">×</button>
    </div>
    <div id="cs-chips" style="
      display:flex;gap:12px;overflow:auto hidden;scrollbar-width:none;
      -ms-overflow-style:none;padding:10px 12px;background:#0f172a;border-bottom:1px solid rgba(255,255,255,.08)">
      <a href="https://digiapp.betterbond.co.za/YolandaKensley/38613/129015" target="_blank" rel="noopener" style="
        white-space:nowrap;background:#1e66f5;color:#fff;border-radius:999px;
        padding:10px 14px;font-weight:700;text-decoration:none;">BetterBond 100% finance</a>
      <a href="/documents" style="
        white-space:nowrap;background:#111827;color:#e5e7eb;border-radius:999px;
        padding:10px 14px;font-weight:700;text-decoration:none;border:1px solid rgba(255,255,255,.08)">Schedule of Finishes</a>
      <a href="/apartments" style="
        white-space:nowrap;background:#111827;color:#e5e7eb;border-radius:999px;
        padding:10px 14px;font-weight:700;text-decoration:none;border:1px solid rgba(255,255,255,.08)">Units available</a>
    </div>
  `;

  const body = document.createElement("div");
  css(body, { background: "#ffffff", flex: "1 1 auto", display: "flex" });

  const frame = document.createElement("iframe");
  frame.src = IFRAME_SRC;
  frame.title = "Cornerstone Assistant";
  frame.setAttribute("allow","clipboard-write; clipboard-read");
  frame.setAttribute("referrerpolicy","no-referrer");
  css(frame, { border: "0", width: "100%", height: "100%" });

  body.appendChild(frame);
  card.appendChild(header);
  card.appendChild(body);
  root.appendChild(card);

  document.body.appendChild(cta);
  document.body.appendChild(root);

  const open = () => { root.style.display = "flex"; cta.style.display = "none"; };
  const close = () => { root.style.display = "none"; cta.style.display = "inline-flex"; };

  cta.addEventListener("click", open);
  header.querySelector("#cs-close").addEventListener("click", close);
  root.addEventListener("click", (e) => { if (e.target === root) close(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
})();
;try {
  if (new URLSearchParams(location.search).get('chat') === 'open') {
    setTimeout(() => document.querySelector('#cs-chat-bubble')?.click(), 250);
  }
} catch (e) {}
(() => {
  if (window.__CornerstoneChatLoaded) return;
  window.__CornerstoneChatLoaded = true;

  const SCRIPT = document.currentScript;
  const cfg = {
    project:  SCRIPT?.dataset.project || 'cornerstone',
    primary:  SCRIPT?.dataset.primary || '#1e40af',
    accent:   SCRIPT?.dataset.accent  || '#22c55e',
    whatsapp: SCRIPT?.dataset.whatsapp || '',
    origin:   new URL(SCRIPT.src).origin,
    zIndex:   SCRIPT?.dataset.z || '2147483000'
  };

  const host = document.createElement('div');
  host.style.position = 'fixed'; host.style.inset = 'auto 16px 16px auto'; host.style.zIndex = cfg.zIndex;
  document.documentElement.appendChild(host);
  const shadow = host.attachShadow({ mode: 'open' });

  const style = document.createElement('style');
  style.textContent = 
    .cs-stack{position:fixed;right:16px;bottom:16px;display:grid;gap:12px}
    .cs-fab{width:64px;height:64px;border-radius:50%;display:flex;align-items:center;justify-content:center;
      box-shadow:0 8px 24px rgba(0,0,0,.25);cursor:pointer;border:0;transition:transform .2s}
    .cs-fab:active{transform:scale(.96)}
    .cs-fab.chat{background:}
    .cs-fab.whats{background:}
    .cs-bubble{position:fixed;right:96px;bottom:32px;background:#0f172a;color:#fff;padding:12px 16px;border-radius:24px;
      font:500 14px/1.2 system-ui,-apple-system,Segoe UI,Roboto,sans-serif;box-shadow:0 8px 24px rgba(0,0,0,.25);opacity:.95}
    .cs-iframe{position:fixed;right:16px;bottom:96px;width:min(420px,92vw);height:min(70vh,680px);border:0;border-radius:16px;
      box-shadow:0 20px 60px rgba(0,0,0,.35);transform:translateY(16px);opacity:0;pointer-events:none;transition:.2s;background:#fff}
    .cs-iframe.open{transform:translateY(0);opacity:1;pointer-events:auto}
    @media (max-width:480px){.cs-iframe{width:94vw;height:78vh}}
  ;
  shadow.appendChild(style);

  const wrap = document.createElement('div');
  wrap.innerHTML = 
    <div class="cs-bubble" id="cs-bubble">I am here to help. Ask me a question.</div>
    <iframe class="cs-iframe" id="cs-frame" title="Cornerstone Assistant"
      allow="clipboard-write; microphone; autoplay"
      src="\/widget?project=\"></iframe>
    <div class="cs-stack">
      \
      <button class="cs-fab chat" id="cs-open" aria-label="Open chat">💬</button>
    </div>;
  shadow.appendChild(wrap);

  const frame = shadow.getElementById('cs-frame');
  const bubble = shadow.getElementById('cs-bubble');
  const openBtn = shadow.getElementById('cs-open');
  const whatsBtn = shadow.getElementById('cs-whats');

  setTimeout(() => bubble?.remove(), 6000);
  openBtn?.addEventListener('click', () => frame.classList.toggle('open'));
  whatsBtn?.addEventListener('click', () => {
    const num = cfg.whatsapp.replace(/[^\d]/g,''); window.open(\https://wa.me/\\, '_blank', 'noopener');
  });
  window.addEventListener('keydown', (e)=>{ if(e.key==='Escape') frame.classList.remove('open') });
})();

# ---- Cornerstone-OpenWidget.ps1 ----
Set-StrictMode -Version 3
param([switch]$DeployProd)

$utf8 = New-Object System.Text.UTF8Encoding($false)

# 1) Append a tiny auto-open hook to the widget (idempotent)
$widget = "public\cs-chat-widget.js"
if (-not (Test-Path $widget)) { throw "Missing $widget" }

$w = Get-Content -Raw $widget -Encoding UTF8
if ($w -notmatch "URLSearchParams\(location.search\)\.get\('chat'\)\s*===\s*'open'") {
$w += @"

;try {
  if (new URLSearchParams(location.search).get('chat') === 'open') {
    setTimeout(() => document.querySelector('#cs-chat-bubble')?.click(), 250);
  }
} catch (e) {}
"@
  [IO.File]::WriteAllText((Join-Path $PWD $widget), $w, $utf8)
  Write-Host "Widget patched with ?chat=open hook."
}
else {
  Write-Host "Auto-open hook already present in widget."
}

# 2) Bump cache-buster in app/layout.tsx so Vercel serves the new JS
$layout = "app\layout.tsx"
if (Test-Path $layout) {
  $L = Get-Content -Raw $layout -Encoding UTF8
  $rx = [regex]'/cs-chat-widget\.js(\?v=[^""'']+)?'
  if ($rx.IsMatch($L)) {
    $L = $rx.Replace($L, "/cs-chat-widget.js?v=" + (Get-Date -Format yyyyMMddHHmmss))
    [IO.File]::WriteAllText((Join-Path $PWD $layout), $L, $utf8)
    Write-Host "layout.tsx cache-buster updated."
  } else {
    Write-Host "NOTE: Could not find /cs-chat-widget.js script tag in layout.tsx (skipped)."
  }
} else {
  Write-Host "NOTE: app/layout.tsx not found (skipped)."
}

# 3) Build (and optionally deploy)
pnpm install --frozen-lockfile | Out-Null
pnpm build
git add -A
$ts = Get-Date -Format yyyyMMdd-HHmmss
git commit -m "Auto-open widget via ?chat=open ($ts)" | Out-Null

if ($DeployProd) {
  pnpm dlx vercel --prod --yes
  Write-Host "`nDeployed. Open your PROD URL and add ?chat=open"
} else {
  Write-Host "`nBuild done. Start dev with:  pnpm dev"
}

Write-Host "`nTest with:  http://localhost:3000/?chat=open  or  https://YOUR-VERCEL-URL/?chat=open"
# ---- end ----

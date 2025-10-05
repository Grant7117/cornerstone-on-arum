# === Move Cornerstone chat bubble higher (≈5cm -> 220px) and deploy ===
# Run this from your project root. It will:
#  1) Find app/layout.tsx or pages/_app.tsx
#  2) Backup the file
#  3) Set window.CORNERSTONE_WIDGET_OFFSET_Y = 220
#  4) Deploy to Vercel (production)

$ErrorActionPreference = 'Stop'

# ~5cm on typical displays ≈ 200–240px. Using 220px.
$OffsetPx = 220

# Candidate files to edit (both supported layouts)
$targets = @(
  "app\layout.tsx",
  "src\app\layout.tsx",
  "pages\_app.tsx",
  "src\pages\_app.tsx"
) | Where-Object { Test-Path $_ }

if (-not $targets) {
  throw "Could not find 'app\layout.tsx' or 'pages\_app.tsx'. Please run this in your Next.js project root."
}

$edited = @()

foreach ($t in $targets) {
  $text = Get-Content $t -Raw

  if ($text -notmatch 'CORNERSTONE_WIDGET_OFFSET_Y') {
    Write-Host "Skipping '$t' (no CORNERSTONE_WIDGET_OFFSET_Y found)." -ForegroundColor Yellow
    continue
  }

  $backup = "$t.bak.offset-$(Get-Date -Format 'yyyyMMdd-HHmmss')"
  Copy-Item $t $backup -Force
  Write-Host "Backup created: $backup" -ForegroundColor DarkGray

  $text = $text -replace '(?is)window\.CORNERSTONE_WIDGET_OFFSET_Y\s*=\s*\d+', "window.CORNERSTONE_WIDGET_OFFSET_Y = $OffsetPx"
  $text = $text -replace '(?is)\bCORNERSTONE_WIDGET_OFFSET_Y\s*=\s*\d+', "CORNERSTONE_WIDGET_OFFSET_Y = $OffsetPx"

  Set-Content -Path $t -Value $text -Encoding UTF8
  $edited += $t
  Write-Host "Updated offset in: $t" -ForegroundColor Green
}

if (-not $edited) {
  throw "No files were updated because the widget config variable was not found. Make sure the widget is already embedded."
}

Write-Host "`nVerifying the new value:" -ForegroundColor Cyan
$edited | ForEach-Object {
  (Select-String -Path $_ -Pattern 'CORNERSTONE_WIDGET_OFFSET_Y\s*=\s*\d+').Line
} | ForEach-Object { Write-Host "  $_" }

Write-Host "`nDeploying to Vercel (production)..." -ForegroundColor Cyan
npx -y vercel@latest deploy --prod

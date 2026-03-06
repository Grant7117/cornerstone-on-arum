import { Youtube, Facebook } from "./icons"

export function Footer() {
  return (
    <>
      <div className="bg-[#FFF8E7] border-t border-[#D4A574] py-6 px-4">
        <div className="container mx-auto max-w-5xl">
          <p className="text-sm text-[#8B4513] text-center leading-relaxed">
            <span className="font-semibold">Important Notice:</span> All renders are artist impressions. Final finishes,
            layouts, and specifications may vary. Please confirm details before purchase.
          </p>
        </div>
      </div>

      <footer className="bg-background border-t border-foreground/20 py-6">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center gap-6 mb-4">
            <a
              href="https://www.youtube.com/@CornerstoneonArum"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF0000] hover:text-[#CC0000] transition-colors"
              aria-label="Visit our YouTube channel"
            >
              <Youtube className="w-9 h-9" />
            </a>
            <a
              href="https://www.facebook.com/share/17GEshr39y/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1877F2] hover:text-[#0C63D4] transition-colors"
              aria-label="Visit our Facebook page"
            >
              <Facebook className="w-9 h-9" />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-2 text-xs text-foreground/70">
            <p>Developed by Igneous Property Development</p>
            <span className="hidden sm:inline">•</span>
            <p>Website by IntelDev – Development Intelligence & Advisory</p>
          </div>
        </div>
      </footer>
    </>
  )
}

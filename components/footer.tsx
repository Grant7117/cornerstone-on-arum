import { Youtube, Facebook } from "./icons"
import Link from "next/link"

export function Footer() {
  return (
    <>
      <div className="bg-warm-stone/20 border-t border-muted-bronze/20 py-6 px-4">
        <div className="container mx-auto max-w-5xl">
          <p className="text-sm text-deep-obsidian/60 text-center leading-relaxed">
            <span className="font-semibold">Important Notice:</span> All renders are artist impressions. Final finishes,
            layouts, and specifications may vary. Please confirm details before purchase.
          </p>
        </div>
      </div>

      <footer className="bg-sand-drift border-t border-deep-obsidian/10 py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center gap-6 mb-4">
            <a
              href="https://www.youtube.com/@CornerstoneonArum"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF0000] hover:text-[#CC0000] transition-colors p-1"
              aria-label="Visit our YouTube channel"
            >
              <Youtube className="w-11 h-11" />
            </a>
            <a
              href="https://www.facebook.com/share/17GEshr39y/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1877F2] hover:text-[#0C63D4] transition-colors p-1"
              aria-label="Visit our Facebook page"
            >
              <Facebook className="w-11 h-11" />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 text-xs uppercase tracking-widest text-deep-obsidian/50 font-sans">
            <p className="text-center">Developed by Igneous Property Development</p>
            <span className="hidden sm:inline opacity-30">•</span>
            <p className="text-center">
              Website by:{" "}
              <a
                href="https://www.inteldev.co.za"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-muted-bronze transition-colors font-bold"
              >
                Inteldev
              </a>
            </p>
            <span className="hidden sm:inline opacity-30">•</span>
            <Link href="/privacy-policy" className="hover:text-muted-bronze transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </>
  )
}

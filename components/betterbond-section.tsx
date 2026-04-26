import { StandardBanner } from "./standard-banner"
import { Button } from "@/components/ui/button"
import { Phone, ExternalLink } from "lucide-react"

export function BetterBondSection() {
  return (
    <section id="financing" className="bg-white pb-16">
      {/* Original Banner */}
      <StandardBanner
        src="/images/Frictionless%20Financing%20Betterbond.png"
        alt="BetterBond - Frictionless Financing"
      />

      {/* Financing Actions */}
      <div className="container mx-auto px-4 mt-8">
        <div className="max-w-4xl mx-auto bg-slate-50 rounded-3xl p-8 border border-slate-100 shadow-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            
            {/* Yolanda's Contact Info */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Expert Financing Advice</h3>
              <p className="text-slate-600 mb-4">
                Contact our dedicated BetterBond consultant for personalized assistance.
              </p>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Phone className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">Yolanda</p>
                  <a 
                    href="tel:+27846457216" 
                    className="text-lg font-bold text-slate-900 hover:text-blue-600 transition-colors"
                  >
                    084 645 7216
                  </a>
                </div>
              </div>
            </div>

            {/* Digilink Button */}
            <div className="flex-1 w-full md:w-auto">
              <Button 
                asChild
                className="w-full bg-[#1a365d] hover:bg-[#2a4a7d] text-white py-8 text-lg rounded-2xl shadow-md transition-all active:scale-95"
              >
                <a 
                  href="https://online.consultant.betterbond.co.za/dev/C-638918922458058838-deb2db" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3"
                >
                  Get Pre-Qualified Now
                  <ExternalLink className="w-5 h-5" />
                </a>
              </Button>
              <p className="text-center text-xs text-slate-400 mt-3 italic">
                *Secure, digital application via BetterBond
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
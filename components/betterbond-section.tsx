import { Button } from "@/components/ui/button"
import { CheckCircle2, Clock, Users, DollarSign } from "@/components/icons"
import Image from "next/image"
import Link from "next/link"

export function BetterBondSection() {
  return (
    <section id="financing" className="py-16 px-6 bg-[#003366]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Financing Made Simple</h2>
            <p className="text-xl text-white/90 mb-8">
              Cornerstone on Arum buyers enjoy exclusive access to BetterBond – South Africa's trusted bond originator.
              With tailored guidance and faster approvals, securing your new home has never been easier.
            </p>

            <h3 className="text-2xl font-semibold text-white mb-6">Why BetterBond?</h3>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-[#00D9FF] shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-white mb-1">79% Success Rate</h4>
                  <p className="text-sm text-white/80">A higher approval rate than direct bank applications.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="h-6 w-6 text-[#00D9FF] shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-white mb-1">Fast Pre-Approval in 48 Hours</h4>
                  <p className="text-sm text-white/80">Confirm what you can afford before you commit.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <DollarSign className="h-6 w-6 text-[#00D9FF] shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-white mb-1">100% Financing Options</h4>
                  <p className="text-sm text-white/80">No deposit required for qualifying buyers.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Users className="h-6 w-6 text-[#00D9FF] shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-white mb-1">Dedicated Guidance</h4>
                  <p className="text-sm text-white/80">
                    A professional bond originator supports you through every step.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg border-2 border-[#00D9FF] p-5 mb-8">
              <h3 className="text-xl font-bold text-white mb-2">Cornerstone Buyer Advantage</h3>
              <p className="text-white/90">
                All bond applications are managed through BetterBond, ensuring a smooth, quick, and successful process.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-white mb-4">Take the First Step Today</h3>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Button
                asChild
                size="lg"
                className="bg-[#0066FF] hover:bg-[#0052CC] text-white text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
              >
                <Link
                  href="https://digiapp.betterbond.co.za/YolandaKensley/38613/129015"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apply for Your Bond
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white hover:bg-gray-100 text-[#003366] border-2 border-white text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
              >
                <Link href="tel:+27846457216">Call Yolanda: 084 645 7216</Link>
              </Button>
            </div>

            <div className="p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
              <p className="text-sm text-white">
                <span className="font-semibold">Your Bond Originator:</span> Yolanda Kensley
              </p>
              <p className="text-sm text-white/90 mt-1">
                📧{" "}
                <Link href="mailto:yolanda.kensley@betterbond.co.za" className="text-[#00D9FF] hover:underline">
                  yolanda.kensley@betterbond.co.za
                </Link>
              </p>
            </div>
          </div>

          {/* Right Column - Logo & Visual */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-12">
              <div className="relative w-full aspect-[2/1] mb-6">
                <Image
                  src="/images/betterbond-logo.png"
                  alt="BetterBond - Home Loan Experts"
                  fill
                  className="object-contain"
                />
              </div>

              <div className="space-y-4">
                <div className="bg-gradient-to-r from-[#003366]/10 to-[#0066FF]/10 p-4 rounded-lg border border-[#003366]/20">
                  <p className="text-center text-[#003366] font-semibold text-lg">Trusted Financing Partner</p>
                  <p className="text-center text-gray-600 text-sm mt-1">
                    Smooth, quick, and successful bond applications
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-2xl font-bold text-[#00D9FF]">79%</p>
                    <p className="text-xs text-gray-600 mt-1">Success Rate</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-2xl font-bold text-[#00D9FF]">48h</p>
                    <p className="text-xs text-gray-600 mt-1">Pre-Approval</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-2xl font-bold text-[#00D9FF]">100%</p>
                    <p className="text-xs text-gray-600 mt-1">Financing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function BetterBondSection() {
  return (
    <section id="financing" className="py-12 md:py-20 px-4 md:px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header and Logo */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 md:mb-16 gap-4 md:gap-6">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-[#001f3f] leading-tight">
            Frictionless Financing <br className="hidden sm:block" />& Approvals
          </h2>
          <div className="relative w-40 sm:w-48 md:w-64 h-20 sm:h-24">
            <Image
              src="/images/betterbond-logo.png"
              alt="BetterBond"
              fill
              className="object-contain object-left md:object-right"
            />
          </div>
        </div>

        {/* 3 Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-start">
          
          {/* Column 1: The Promise */}
          <div className="lg:col-span-3 space-y-4 md:space-y-6">
            <h3 className="text-xl md:text-2xl font-black text-[#001f3f] border-b-4 border-[#001f3f] pb-2 inline-block">
              The BetterBond <br className="hidden md:block" />Promise:
            </h3>
            <p className="text-base md:text-lg text-[#001f3f] font-medium leading-relaxed">
              We submit your home loan application to multiple leading banks—including your own—forcing them to compete for your business and secure the lowest possible rate.
            </p>
          </div>

          {/* Column 2: Success Metrics */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <h3 className="text-2xl font-black text-[#001f3f] mb-2 px-1 text-center md:text-left">Success Metrics</h3>
            
            {/* Metric Blocks */}
            {[
              { 
                num: "100%", 
                title: "Financing Available:", 
                desc: "No deposit required for qualifying buyers." 
              },
              { 
                num: "79%", 
                title: "Success Rate:", 
                desc: "Significantly higher approval rates than direct bank applications." 
              },
              { 
                num: "48-Hour", 
                title: "48-Hour Pre-Approval:", 
                desc: "Fast, definitive answers so you can secure your unit with confidence." 
              },
              { 
                num: "Zero", 
                title: "Zero Cost to You:", 
                desc: "Our negotiation service is completely free to the buyer." 
              }
            ].map((metric, i) => (
              <div key={metric.num} className="bg-[#003366] text-white rounded-xl p-6 flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8 shadow-xl transition-transform hover:scale-[1.02]">
                <div className="text-4xl md:text-5xl font-black min-w-[140px] text-center md:text-left leading-none tracking-tighter">
                  {metric.num}
                </div>
                <div className="border-t md:border-t-0 md:border-l border-white/20 pt-4 md:pt-0 md:pl-8 flex-1">
                  <h4 className="text-sm font-black uppercase tracking-widest mb-1 text-blue-300">
                    {metric.title}
                  </h4>
                  <p className="text-sm md:text-base font-medium opacity-90 leading-tight text-center md:text-left">
                    {metric.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Column 3: Dedicated Originator */}
          <div className="lg:col-span-4 h-full">
            <div className="bg-[#003366] text-white rounded-2xl p-10 h-full flex flex-col border-4 border-[#003366] shadow-2xl relative min-h-[450px]">
               {/* Internal white border style like in Image 3 */}
               <div className="absolute inset-4 border-2 border-white/20 rounded-xl pointer-events-none"></div>
               
               <h3 className="text-3xl font-black mb-12 relative">
                Dedicated <br />Originator:
               </h3>
               
               <div className="space-y-8 relative flex-grow flex flex-col justify-between">
                 <div>
                    <p className="text-3xl font-black text-white mb-2 tracking-tight">Yolanda Kensley</p>
                    <Link 
                      href="mailto:yolanda.kensley@betterbond.co.za" 
                      className="text-lg font-medium text-blue-300 hover:text-white transition-colors break-words block"
                    >
                      yolanda.kensley@betterbond.co.za
                    </Link>
                 </div>

                 <div className="pt-8 border-t border-white/10 flex flex-col gap-4">
                    <Button
                      asChild
                      className="w-full bg-[#00D9FF] hover:bg-[#05a6c3] text-[#003366] font-black text-xl py-8 rounded-xl shadow-lg transition-all transform active:scale-95"
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
                      variant="outline"
                      className="w-full bg-transparent hover:bg-white/10 text-white border-2 border-white/30 text-lg py-7 rounded-xl transition-all"
                    >
                      <Link href="tel:+27846457216">Call: 084 645 7216</Link>
                    </Button>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

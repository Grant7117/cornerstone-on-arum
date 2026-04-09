import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function BetterBondSection() {
  return (
    <section id="financing" className="py-20 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Top Header Row: Title on Left, Logo on Right */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
          <h2 className="text-4xl md:text-[56px] font-black text-[#011B33] leading-[1.1] tracking-tight">
            Frictionless Financing <br />& Approvals
          </h2>
          <div className="relative w-48 md:w-72 h-32 -mt-4">
            <Image
              src="/images/betterbond-logo.png"
              alt="BetterBond"
              fill
              className="object-contain object-right"
            />
          </div>
        </div>

        {/* The "Perfection" Grid: 3 Column Layout */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Column 1: The Promise (3 Units) */}
          <div className="lg:col-span-3">
            <h3 className="text-[28px] font-black text-[#011B33] border-b-[6px] border-[#011B33] pb-3 mb-8 inline-block leading-tight">
              The BetterBond <br />Promise:
            </h3>
            <p className="text-[19px] text-[#011B33] font-medium leading-[1.6] tracking-tight">
              We submit your home loan application to multiple leading banks—including your own—forcing them to compete for your business and secure the lowest possible rate.
            </p>
          </div>

          {/* Column 2: Success Metrics (5 Units) */}
          <div className="lg:col-span-5">
            <h3 className="text-[28px] font-black text-[#011B33] mb-8">Success Metrics</h3>
            <div className="flex flex-col gap-3">
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
                <div key={i} className="bg-[#011B33] text-white rounded-xl p-8 flex flex-col md:flex-row items-center md:items-start gap-8 shadow-2xl transition-all hover:scale-[1.02] cursor-default">
                  <div className="text-[48px] md:text-[56px] font-black min-w-[150px] leading-none tracking-tighter text-center md:text-left">
                    {metric.num}
                  </div>
                  <div className="w-full border-t md:border-t-0 md:border-l border-white/20 pt-6 md:pt-0 md:pl-8 flex-1">
                    <h4 className="text-[14px] font-black uppercase tracking-[0.2em] mb-2 text-[#00D9FF]">
                      {metric.title}
                    </h4>
                    <p className="text-[17px] font-medium opacity-95 leading-snug">
                      {metric.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Dedicated Originator (4 Units) */}
          <div className="lg:col-span-4 h-full">
            <div className="bg-[#011B33] text-white rounded-[40px] p-12 h-full flex flex-col border-[2px] border-[#011B33] shadow-2xl relative min-h-[500px]">
               {/* Pixel Perfect Inner Border */}
               <div className="absolute inset-5 border-[2px] border-white/10 rounded-[28px] pointer-events-none"></div>
               
               <h3 className="text-[34px] font-black mb-16 relative leading-tight">
                Dedicated <br />Originator:
               </h3>
               
               <div className="space-y-10 relative flex-grow flex flex-col justify-between">
                 <div>
                    <p className="text-[36px] font-black text-white mb-3 tracking-tighter leading-none">Yolanda Kensley</p>
                    <Link 
                      href="mailto:yolanda.kensley@betterbond.co.za" 
                      className="text-[20px] font-bold text-[#00D9FF] hover:text-white transition-all underline decoration-[#00D9FF]/30 underline-offset-8"
                    >
                      yolanda.kensley@betterbond.co.za
                    </Link>
                 </div>

                 <div className="pt-10 border-t border-white/10 flex flex-col gap-5">
                    <Button
                      asChild
                      className="w-full bg-[#00D9FF] hover:bg-white text-[#011B33] font-black text-[22px] py-9 rounded-2xl shadow-[0_15px_30px_rgba(0,217,255,0.3)] transition-all transform active:scale-[0.98]"
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
                      className="w-full bg-transparent hover:bg-white/10 text-white border-[3px] border-white/20 text-[20px] py-8 rounded-2xl transition-all"
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

import { Shield, Droplet, Zap, Flame, Home, Car } from "@/components/icons"
import { Card } from "@/components/ui/card"

const features = [

  {
    icon: Droplet,
    title: "Sustainable Living",
    description: "Central hot water boiler system. Saving up to 40% on electricity.",
    color: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: Zap,
    title: "Prepaid Meters",
    description: "Each unit has prepaid meters for: Hot and cold water, and electricity.",
    color: "bg-orange-50",
    iconColor: "text-orange-600",
  },
  {
    icon: Flame,
    title: "Gas Cooking",
    description:
      "Each unit features a Black Defy gas hob with regulation-compliant secure storage for 9kg gas bottles.",
    color: "bg-orange-50",
    iconColor: "text-orange-600",
  },
  {
    icon: Home,
    title: "Private Balconies",
    description: "A private balcony for each unit.",
    color: "bg-orange-50",
    iconColor: "text-orange-600",
  },
  {
    icon: Car,
    title: "Parking",
    description: "One off-street secure parking bay per unit.",
    color: "bg-red-50",
    iconColor: "text-red-600",
  },
]

export function PropertyFeaturesSection() {
  return (
    <div id="property-features" className="py-24 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">Built for Modern Living</h2>
          <div className="mt-4 h-1.5 w-24 bg-blue-600 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-8 hover:shadow-2xl transition-all hover:-translate-y-2 bg-white border-slate-100 rounded-[2rem] shadow-xl">

              <div className="flex flex-col items-center text-center gap-6">
                <div
                  className={`w-20 h-20 rounded-2xl ${feature.color} flex items-center justify-center flex-shrink-0 shadow-inner`}
                >
                  <feature.icon className={`w-10 h-10 ${feature.iconColor}`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-slate-900">{feature.title}</h3>
                  <p className="text-base text-slate-600 leading-relaxed font-medium">{feature.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>

  )
}

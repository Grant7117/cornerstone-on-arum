import { Shield, Droplet, Zap, Flame, Home, Car } from "@/components/icons"
import { Card } from "@/components/ui/card"

const features = [
  {
    icon: Shield,
    title: "Safety and Security",
    description:
      "Advanced access control, garage door automation. The security is further enhanced with backup power storage.",
    color: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: Droplet,
    title: "Sustainable Living",
    description: "Onsite water storage, central hot water boiler system.",
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
    <div id="features" className="py-16 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Built for Modern Living</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow bg-white">
              <div className="flex gap-4">
                <div
                  className={`w-16 h-16 rounded-full ${feature.color} flex items-center justify-center flex-shrink-0`}
                >
                  <feature.icon className={`w-8 h-8 ${feature.iconColor}`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2 text-foreground">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

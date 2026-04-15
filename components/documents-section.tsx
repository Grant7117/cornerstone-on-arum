"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FileText, Download, Lock } from "lucide-react"

const documents = [
    {
        name: "Agreement of Sale",
        filename: "Agreement-of-sale-cornerstone-on-arum-9-September-2025.pdf",
    },
    {
        name: "Conduct Rules",
        filename: "conduct-rules-cornerstone-on-arum-01-september-2025.pdf",
    },
    {
        name: "Schedule of Finishes",
        filename: "Cornerstone-schedule-of-finishes.pdf",
    },
    {
        name: "Draft Levy Schedule",
        filename: "draft-levy-cornerstone-on-arum.pdf",
    },
]

export function DocumentsSection() {
    const [isUnlocked, setIsUnlocked] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        contact: "",
        email: "",
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        // Construct WhatsApp message
        const message = `Hello, I would like to download the documents for Cornerstone on Arum.%0A%0A*Name:* ${formData.name}%0A*Contact:* ${formData.contact}%0A*Email:* ${formData.email}`
        const whatsappUrl = `https://wa.me/27724503626?text=${message}`

        // Open WhatsApp in new tab
        window.open(whatsappUrl, "_blank")

        // Unlock downloads
        setIsUnlocked(true)
    }

    const handleDownload = (filename: string) => {
        // Create a link and click it to trigger download
        const link = document.createElement('a')
        link.href = `/documents/${filename}`
        link.download = filename
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    return (
        <section id="documents" className="py-20 bg-slate-50">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        Project Documents
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        {isUnlocked
                            ? "You can now download the project documents below."
                            : "Please complete your details to unlock and download key project documents."}
                    </p>
                </div>

                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100 p-6 md:p-8">
                    {!isUnlocked ? (
                        <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
                            <div className="space-y-2">
                                <Label htmlFor="name">Full Name</Label>
                                <Input
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="John Doe"
                                    className="bg-slate-50"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="contact">Contact Number</Label>
                                <Input
                                    id="contact"
                                    name="contact"
                                    required
                                    value={formData.contact}
                                    onChange={handleInputChange}
                                    placeholder="082 123 4567"
                                    className="bg-slate-50"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email Address</Label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="john@example.com"
                                    className="bg-slate-50"
                                />
                            </div>
                            <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                                <Lock className="w-4 h-4 mr-2" />
                                Unlock Downloads
                            </Button>
                        </form>
                    ) : (
                        <div className="space-y-4 max-w-2xl mx-auto">
                            {documents.map((doc, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col sm:flex-row items-center justify-between p-4 border rounded-xl hover:bg-slate-50 transition-colors gap-4"
                                >
                                    <div className="flex items-center gap-3 w-full sm:w-auto">
                                        <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                                            <FileText className="w-6 h-6" />
                                        </div>
                                        <span className="font-semibold text-slate-900">{doc.name}</span>
                                    </div>
                                    <Button
                                        onClick={() => handleDownload(doc.filename)}
                                        className="w-full sm:w-auto flex items-center gap-2"
                                    >
                                        <Download className="w-4 h-4" />
                                        Download PDF
                                    </Button>
                                </div>
                            ))}
                            <div className="pt-8 text-center border-t mt-8">
                                <p className="text-slate-600 mb-4">
                                    Need more information? Speak directly to our sales team.
                                </p>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="border-green-500 text-green-600 hover:bg-green-50 hover:text-green-700"
                                    onClick={() => window.open(`https://wa.me/27724503626`, "_blank")}
                                >
                                    Chat on WhatsApp
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

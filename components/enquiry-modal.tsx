"use client"

import { useState } from "react"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2 } from "lucide-react"

interface EnquiryModalProps {
    isOpen: boolean
    onClose: () => void
}

export function EnquiryModal({ isOpen, onClose }: EnquiryModalProps) {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        contact: "",
        email: "",
        vipBackup: "yes",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        // 1. Send data to your Make.com Webhook (EU Server)
        try {
            await fetch("https://hook.eu1.make.com/4ixks6nllov1z5kcye6qadkgx05j9y5i", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...formData,
                    source: "Website Enquiry Modal",
                    project: "Cornerstone on Arum",
                    timestamp: new Date().toISOString()
                }),
            })
        } catch (error) {
            console.error("Make.com sync failed, proceeding to WhatsApp", error)
        }

        // 2. Prepare WhatsApp Redirection
        const message = `Hello, I'm interested in Cornerstone on Arum.%0A%0A*Name:* ${formData.name}%0A*Contact:* ${formData.contact}%0A*Email:* ${formData.email}%0A*Add to VIP-Backup list:* ${formData.vipBackup === "yes" ? "Yes" : "No"}`
        const whatsappUrl = `https://wa.me/27724503626?text=${message}`

        // 3. Complete process
        setIsSubmitting(false)
        window.open(whatsappUrl, "_blank")
        onClose()
    }

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[425px] bg-white border-none shadow-2xl">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-slate-900">Enquire Now</DialogTitle>
                    <DialogDescription className="text-slate-600">
                        Secure one of the final 6 units. Fill in your details and we'll connect with you immediately.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4 py-4">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="name" className="text-sm font-semibold text-slate-700">Full Name</Label>
                            <Input
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your full name"
                                className="h-12 text-base px-4 rounded-xl border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="contact" className="text-sm font-semibold text-slate-700">Contact Number</Label>
                            <Input
                                id="contact"
                                name="contact"
                                type="tel"
                                required
                                value={formData.contact}
                                onChange={handleChange}
                                placeholder="e.g. 072 450 3626"
                                className="h-12 text-base px-4 rounded-xl border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-sm font-semibold text-slate-700">Email Address</Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="your@email.com"
                                className="h-12 text-base px-4 rounded-xl border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="vipBackup" className="text-sm font-semibold text-slate-700">Add to VIP-Backup list?</Label>
                            <select
                                id="vipBackup"
                                name="vipBackup"
                                value={formData.vipBackup}
                                onChange={handleChange}
                                className="flex h-12 w-full rounded-xl border border-slate-200 bg-background px-4 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="yes">Yes, notify me of new availability</option>
                                <option value="no">No, just this enquiry</option>
                            </select>
                        </div>
                    </div>
                    <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-7 text-xl rounded-xl shadow-lg mt-6 active:scale-95 transition-all flex items-center justify-center gap-2"
                    >
                        {isSubmitting ? (
                            <>
                                <Loader2 className="h-6 w-6 animate-spin" />
                                <span>Syncing Lead...</span>
                            </>
                        ) : (
                            "Enquire via WhatsApp"
                        )}
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    )
}
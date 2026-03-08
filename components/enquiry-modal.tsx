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

interface EnquiryModalProps {
    isOpen: boolean
    onClose: () => void
}

export function EnquiryModal({ isOpen, onClose }: EnquiryModalProps) {
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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        const message = `Hello, I'm interested in Cornerstone on Arum.%0A%0A*Name:* ${formData.name}%0A*Contact:* ${formData.contact}%0A*Email:* ${formData.email}%0A*Add to VIP-Backup list:* ${formData.vipBackup === "yes" ? "Yes" : "No"}`

        const whatsappUrl = `https://wa.me/27724503626?text=${message}`
        window.open(whatsappUrl, "_blank")
        onClose()
    }

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[425px] bg-white">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-slate-900">Enquire Now</DialogTitle>
                    <DialogDescription className="text-slate-600">
                        Please fill in your details and we will get back to you shortly.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4 py-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your full name"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="contact">Contact Number</Label>
                        <Input
                            id="contact"
                            name="contact"
                            required
                            value={formData.contact}
                            onChange={handleChange}
                            placeholder="e.g. 072 450 3626"
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
                            onChange={handleChange}
                            placeholder="your@email.com"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="vipBackup">Do you want to be added to the VIP-Backup list?</Label>
                        <select
                            id="vipBackup"
                            name="vipBackup"
                            value={formData.vipBackup}
                            onChange={handleChange}
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-6 text-lg">
                        Send to WhatsApp
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    )
}

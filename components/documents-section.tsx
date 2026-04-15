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
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100 p-6 md:p-8">
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
                                    className="w-full sm:w-auto flex items-center gap-2 !bg-black hover:!bg-gray-800 text-white"
                                >
                                    <Download className="w-4 h-4" />
                                    Download PDF
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}


"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface FloatingBannerProps {
    onSignUpClick: () => void
}

export function FloatingBanner({ onSignUpClick }: FloatingBannerProps) {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        // Show banner after a short delay
        const timer = setTimeout(() => setIsVisible(true), 1500)
        return () => clearTimeout(timer)
    }, [])

    if (!isVisible) return null

    return (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[60] w-full max-w-4xl px-4 animate-in slide-in-from-top duration-500">
            <div className="bg-white/50 backdrop-blur-md border-2 border-blue-600 shadow-2xl rounded-2xl overflow-hidden relative p-5 md:p-8">
                <button
                    onClick={() => setIsVisible(false)}
                    className="absolute top-3 right-3 text-black hover:text-gray-700 transition-colors p-1"
                    aria-label="Close banner"
                >
                    <X className="w-5 h-5" />
                </button>

                <div className="flex flex-col gap-4 text-center md:text-left pr-4">
                    <div className="space-y-1 mb-1">
                        <p className="text-red-600 text-xl md:text-2xl font-bold leading-tight">
                            5 units have come back onto the market
                        </p>
                        <p className="text-slate-800 text-lg md:text-xl font-semibold">
                            R5000 deposit secures
                        </p>
                    </div>

                    <div className="bg-blue-50/80 p-3 md:p-4 rounded-xl border border-blue-100 mt-1 shadow-sm">
                        <p className="text-blue-900 font-bold text-sm md:text-base">
                            VIP Back-Up-List: sign up {" "}
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    onSignUpClick();
                                }}
                                className="text-blue-600 hover:text-blue-800 underline decoration-2 underline-offset-4 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1 transition-all"
                            >
                                here
                            </button>{" "}
                            to Receive Immediate Availability Alerts
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

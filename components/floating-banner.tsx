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
            <div className="bg-white/70 backdrop-blur-lg border-2 border-blue-600 shadow-2xl rounded-2xl overflow-hidden relative p-5 md:p-8 max-h-[40vh] md:max-h-none overflow-y-auto">
                <button
                    onClick={() => setIsVisible(false)}
                    className="absolute top-2 right-2 text-slate-900 hover:text-slate-700 transition-colors w-12 h-12 flex items-center justify-center rounded-full bg-white/50 border border-black/5 active:scale-90"
                    aria-label="Close banner"
                >
                    <X className="w-6 h-6" />
                </button>

                <div className="flex flex-col gap-4 text-center md:text-left pr-6">
                    <div className="space-y-2 mb-1">
                        <p className="text-red-600 text-xl md:text-2xl font-black leading-tight">
                            5 Units back on market!
                        </p>
                        <p className="text-slate-900 text-lg md:text-xl font-bold">
                            R5000 Deposit secures your unit!
                        </p>
                    </div>

                    <div className="bg-blue-600 p-4 rounded-xl shadow-lg mt-1">
                        <p className="text-white font-bold text-sm md:text-base">
                            VIP Back-Up-List: sign up {" "}
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    onSignUpClick();
                                }}
                                className="text-white hover:text-blue-100 underline decoration-2 underline-offset-4 cursor-pointer focus:outline-none font-black px-1 transition-all"
                            >
                                here
                            </button>{" "}
                            to get immediate availability alerts
                        </p>
                    </div>

                    <div className="flex justify-center md:justify-start">
                        <button
                            onClick={() => {
                                const element = document.getElementById("about")
                                if (element) {
                                    element.scrollIntoView({ behavior: "smooth", block: "start" })
                                }
                            }}
                            className="bg-slate-100 hover:bg-slate-200 text-[#0066FF] px-4 py-3 rounded-lg text-xs font-bold uppercase tracking-widest flex items-center gap-2 transition-all active:scale-95 shadow-sm"
                        >
                            <span>Project Information</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

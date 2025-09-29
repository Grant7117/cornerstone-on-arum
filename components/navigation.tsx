import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navigation() {
  return (
    <nav className="bg-slate-800 text-white px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex flex-col">
          <div className="text-xl font-bold leading-tight">CORNERSTONE</div>
          <div className="text-sm text-gray-300 leading-tight">ON ARUM</div>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <Link href="/about" className="hover:text-gray-300 transition-colors">
            About
          </Link>
          <Link href="/properties" className="hover:text-gray-300 transition-colors">
            Properties
          </Link>
          <Link href="/gallery" className="hover:text-gray-300 transition-colors">
            Gallery
          </Link>
          <Link href="/documents" className="hover:text-gray-300 transition-colors">
            Documents
          </Link>

          <Link href="/contact" className="hover:text-gray-300 transition-colors">
            Contact
          </Link>
          <Button
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-slate-800 bg-transparent"
          >
            Enquire Now
          </Button>
        </div>
      </div>
    </nav>
  )
}

import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24 text-center">
      <h2 className="mb-4 text-4xl font-bold">404 - Page Not Found</h2>
      <p className="mb-8 text-lg text-muted-foreground">Could not find requested resource</p>
      <Link href="/" className="text-primary hover:underline">
        Return Home
      </Link>
    </div>
  )
}

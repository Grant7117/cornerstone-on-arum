import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-5xl py-10 px-6">
        <h1 className="text-4xl md:text-5xl font-bold">Cornerstone on Arum</h1>
        <p className="mt-4 text-lg text-gray-600">Landing page is up.</p>
      </div>
      <Hero />
    </main>
  );
}

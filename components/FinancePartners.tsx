import Image from "next/image";

export default function FinancePartners() {
  return (
    <section id="financing" className="container mx-auto px-4 py-12">
      <h2 className="mb-6 text-3xl font-semibold">Financing</h2>
      <div className="flex items-center gap-8">
        <Image
          src="/images/betterbond-logo.png"
          alt="BetterBond"
          width={220}
          height={80}
          className="h-10 w-auto"
        />
      </div>
    </section>
  );
}

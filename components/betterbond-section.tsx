"use client";
import Image from "next/image";

export default function BetterBondSection() {
  return (
    <section id="betterbond" className="bg-white py-16 px-4">
      <div className="mx-auto max-w-4xl text-center">
        <Image
          src="/images/betterbond-logo.png"
          alt="BetterBond - our name says it all"
          width={300}
          height={100}
          priority
          className="mx-auto mb-6 h-auto w-auto"
        />
        <h2 className="mb-4 text-2xl font-bold text-gray-800">
          Simplify Your Home Loan Application
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Cornerstone on Arum has partnered with <strong>BetterBond</strong> to assist
          buyers with obtaining pre-approvals and the best available home loan rates from
          all major South African banks.
        </p>
        <p className="mt-4 text-gray-600">
          BetterBond will guide you through the process, ensuring a smooth and efficient
          bond application, free of charge.
        </p>
      </div>
    </section>
  );
}

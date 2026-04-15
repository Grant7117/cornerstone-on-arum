import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen bg-background relative flex flex-col">
            <Navigation />

            <div className="flex-grow container mx-auto px-4 py-8 md:py-12 max-w-4xl">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">Privacy Policy</h1>
                <p className="text-gray-500 mb-8">Effective Date: 15 December 2025</p>

                <div className="space-y-8 text-gray-700 leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
                        <p>
                            Igneous Property Developments (Pty) Ltd ("we," "us," or "our") is committed to protecting the privacy of our potential buyers and website visitors. This Privacy Policy outlines how we collect, use, and safeguard your personal information in compliance with the Protection of Personal Information Act (POPIA). This policy applies to data collected via our website (Cornerstone-on-arum-road), Facebook Lead Ads, and Instagram interactions related to our development, "Cornerstone on Arum".
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
                        <p className="mb-4">
                            We limit our data collection to the minimum necessary to provide you with information about our property developments. We specifically collect:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Identity Data:</strong> Your full name.</li>
                            <li><strong>Contact Data:</strong> Your email address and phone number.</li>
                            <li><strong>Preference Data:</strong> Information regarding your preferred unit type and budget.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
                        <p className="mb-4">
                            We use your personal data solely for the following purposes:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>To contact you regarding your interest in "Cornerstone on Arum".</li>
                            <li>To provide you with updates, availability, and pricing information.</li>
                            <li>To facilitate the sales process should you choose to purchase.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Data Sharing and Security</h2>
                        <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                            <p className="font-medium text-gray-900 mb-2">Strict Privacy Commitment</p>
                            <p>
                                We value your trust. <strong>We strictly do not sell, rent, trade, or share your personal data with third parties, unauthorized agencies, or marketing lists.</strong> Your information is used exclusively by Igneous Property Developments (Pty) Ltd for the purposes stated above. We implement appropriate technical and organisational measures to protect your data against unauthorized access or processing.
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Your Rights Under POPIA</h2>
                        <p className="mb-4">As a data subject, you have the following rights:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Access:</strong> You have the right to request a copy of the personal information we hold about you.</li>
                            <li><strong>Correction:</strong> You may request that we update or correct any inaccurate personal information.</li>
                            <li><strong>Objection (Unsubscribe):</strong> You may object to the processing of your personal information or unsubscribe from our communications at any time.</li>
                            <li><strong>Deletion:</strong> You have the right to request the deletion of your personal information from our records, subject to any legal retention requirements.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Contact Us</h2>
                        <p className="mb-4">
                            If you have any questions about this policy or wish to exercise your rights, please contact our Information Officer:
                        </p>
                        <div className="mt-4">
                            <p className="font-semibold">Sean Mackay</p>
                            <p className="text-gray-600">Information Officer</p>
                            <p className="mt-2">
                                <span className="font-medium">Email:</span>{" "}
                                <a href="mailto:sean@igneousproperty.co.za" className="text-blue-600 hover:underline">
                                    sean@igneousproperty.co.za
                                </a>
                            </p>
                            <p>
                                <span className="font-medium">Website:</span>{" "}
                                <a href="https://www.igneousproperty.co.za" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                    www.igneousproperty.co.za
                                </a>
                            </p>
                        </div>
                    </section>
                </div>
            </div>

            <Footer />
        </main>
    )
}

import { MapPin, Phone, Mail } from "@/components/icons"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ContactLocationSection() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Find Us at 154 Arum Road, Table View</h2>
          <p className="text-xl text-gray-600">Visit us in the heart of Table View</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 h-[400px] lg:h-[500px] w-full flex items-center justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.8!2d18.5!3d-33.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc5b0c0c0c0c0d%3A0x0!2s154%20Arum%20Rd%2C%20Table%20View%2C%207441!5e0!3m2!1sen!2sza!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map - 154 Arum Road, Table View"
            />
          </div>

          <div className="flex flex-col w-full">
            <div className="backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl flex-1 flex flex-col border border-gray-200">
              <h3 className="text-2xl font-bold mb-8 text-gray-900">Contact Information</h3>

              <div className="space-y-8">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="bg-blue-500 p-3 rounded-xl flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1 text-gray-900">Address</h4>
                    <p className="text-gray-700">154 Arum Road, Table View, Cape Town</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="bg-blue-500 p-3 rounded-xl flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1 text-gray-900">Phone</h4>
                    <a href="tel:+27724503626" className="text-gray-700 hover:text-blue-600 transition-colors">
                      Grant - 072 450 3626
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="bg-[#25D366] p-3 rounded-xl flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1 text-gray-900">WhatsApp Business</h4>
                    <p className="text-gray-700 mb-3">072 450 3626</p>
                    <Button asChild className="!bg-[#25D366] hover:!bg-[#20BA5A] text-white">
                      <Link href="https://wa.me/27724503626" target="_blank" rel="noopener noreferrer">
                        Message on WhatsApp
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="bg-blue-500 p-3 rounded-xl flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1 text-gray-900">Email</h4>
                    <Link
                      href="mailto:sales@igneousproperty.co.za"
                      className="text-gray-700 hover:text-blue-600 transition-colors underline"
                    >
                      sales@igneousproperty.co.za
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

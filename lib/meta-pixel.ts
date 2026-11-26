// Meta Pixel lead tracking for Cornerstone on Arum.
// The Pixel itself (dataset 2421305398312777) is loaded in app/layout.tsx.
// These helpers send standard events so Meta can optimise ads for enquiries:
//   Lead    = an enquiry form was submitted
//   Contact = a WhatsApp, phone or email link was clicked

type PixelParams = Record<string, string | number>

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
  }
}

const DEFAULT_PARAMS: PixelParams = {
  content_name: "Cornerstone on Arum - Unit 304",
  content_category: "Apartment",
  currency: "ZAR",
  value: 2725000,
}

const track = (event: "Lead" | "Contact", source: string) => {
  // Never break a button: if the Pixel is blocked or not loaded yet, skip quietly.
  try {
    window.fbq?.("track", event, { ...DEFAULT_PARAMS, source })
  } catch {
    /* ignore */
  }
}

export const trackLead = (source: string) => track("Lead", source)
export const trackContact = (source: string) => track("Contact", source)

// Custom event: a visitor shared Unit 304 with someone
export const trackShare = (source: string) => {
  try {
    window.fbq?.("trackCustom", "ShareUnit", { ...DEFAULT_PARAMS, source })
  } catch {
    /* ignore */
  }
}

import { StandardBanner } from "./standard-banner"

export function OnShowBanner() {
  return (
    <StandardBanner
      id="on-show"
      src="/images/Visit us today at 154 Arum Road Table View.png"
      alt="Visit us today at 154 Arum Road Table View - On Show Daily 1pm to 5pm"
      priority={true}
    />
  )
}

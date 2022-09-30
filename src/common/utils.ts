import { MONTH_NAMES } from "./constants"
import { Duration } from "types/common"

export const formatDuration = (duration: Duration) =>
  [
    `${MONTH_NAMES[duration.from.month]} ${duration.from.year}`,
    duration.to && `${MONTH_NAMES[duration.to.month]} ${duration.to.year}`,
  ]
    .filter(Boolean)
    .join(" – ")

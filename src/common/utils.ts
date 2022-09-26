import { Duration } from "types/common"

export const formatDuration = (duration: Duration) =>
  [`${duration.from.month}/${duration.from.year}`, duration.to && `${duration.to.month}/${duration.to.year}`]
    .filter(Boolean)
    .join(" – ")

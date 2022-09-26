import { Duration, Organisation, Technology } from "./common"

export type WorkType = "contract" | "permanent" | "freelance"

export type WorkHistoryItem = {
  company: Organisation
  role: string
  workType: WorkType
  duration: Duration
  items: string[]
  summary?: string
  technologies?: Technology[]
  location?: string
  isRemote?: boolean
}

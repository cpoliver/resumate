import { Duration, Organisation, Technology } from "./common"

export type WorkType = "contract" | "permanent" | "freelance"

export type WorkHistoryItem = {
  company: Organisation
  role: string
  workType: WorkType
  duration: Duration
  summary?: string
  items: string[]
  technologies: Technology[]
  location?: string
  isRemote?: boolean
}

import { Duration, Organisation, Technology } from "./common"

export type WorkType = "contract" | "permanent" | "freelance"

export type History = {
  company: Organisation
  role: string
  workType: WorkType
  duration: Duration
  summary?: string
  items: string[]
  technologies: Technology[]
}

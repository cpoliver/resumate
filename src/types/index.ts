import { Duration, Organisation, Technology } from "./common"
import { ContactDetails } from "./contactDetails"
import { Link } from "./link"
import { WorkHistoryItem } from "./workHistory"

export type Resume = {
  name: Name
  title: string
  contactDetails: ContactDetails[]
  links: Link[]
  profile: Profile
  softSkills: SoftSkill[]
  technicalSkills: TechnicalSkill[]
  training: Training[]
  education: Education[]
  workHistory: WorkHistoryItem[]
}

export type Name = {
  title?: string
  firstName: string
  middleName?: string
  lastName: string
  postnomials?: string
}

export type Profile = {
  description: string
}

export type SkillType = "technical" | "soft" | "education" | "training"

export type SkillLevel = "basic" | "intermediate" | "advanced" | "expert"

export type TechnicalSkill = {
  technology: Technology
  description?: string
  yearsExperience?: number
  skillLevel?: SkillLevel
}

export type SoftSkill = {
  description: string
  yearsExperience?: number
  skillLevel?: SkillLevel
}

export type Education = {
  institution: Organisation
  course: string
  grade?: string
  duration?: Duration
}

export type Training = {
  institution: Organisation
  course: string
  grade?: string
  duration?: Duration
}

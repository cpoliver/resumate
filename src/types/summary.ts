import { Duration, Organisation, Technology } from "./common"

export type Summary = {
  profile: Profile
  keySkills: KeySkill[]
}

export type Profile = {
  description: string
}

export type SkillType = "technical" | "soft" | "education" | "training"

export type SkillLevel = "basic" | "intermediate" | "advanced" | "expert"

export type TechnicalSkill = {
  type: "technical"
  technology: Technology
  description: string
  yearsExperience?: number
  skillLevel?: SkillLevel
}

export type SoftSkill = {
  type: "soft"
  description: string
  yearsExperience?: number
  skillLevel?: SkillLevel
}

export type Education = {
  type: "education"
  institution: Organisation
  course: string
  grade?: string
  duration?: Duration
}

export type Training = {
  type: "training"
  institution: Organisation
  course: string
  grade?: string
  duration?: Duration
}

export type KeySkill = TechnicalSkill | SoftSkill | Education | Training

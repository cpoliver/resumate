import { Duration, Organisation, Technology } from "./common"

export type Summary = {
  profile: Profile
  keySkills: KeySkill[]
}

export type Profile = {
  description: string
}

export type SkillLevel = "basic" | "intermediate" | "advanced" | "expert"

export type TechnicalSkill = {
  technology: Technology
  description: string
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
  duration: Duration
}

export type Training = {
  institution: Organisation
  course: string
  grade?: string
  duration: Duration
}

export type KeySkill = TechnicalSkill | SoftSkill | Education | Training

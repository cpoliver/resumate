import { TechnicalSkill } from "types"
import { technology } from "./technology"

const skills: TechnicalSkill[] = [
  {
    technology: technology.javascript,
    yearsExperience: 12,
    skillLevel: "expert" as const,
  },
  {
    technology: technology.typescript,
    yearsExperience: 8,
    skillLevel: "expert" as const,
  },
  {
    technology: technology.react,
    yearsExperience: 6,
    skillLevel: "expert" as const,
  },
  {
    technology: technology.node,
    yearsExperience: 8,
    skillLevel: "advanced" as const,
  },
  {
    technology: technology.css,
    yearsExperience: 12,
    skillLevel: "advanced" as const,
  },
  {
    technology: technology.html,
    yearsExperience: 12,
    skillLevel: "advanced" as const,
  },
  {
    technology: technology.cSharp,
    yearsExperience: 5,
    skillLevel: "intermediate" as const,
  },
]

export const technicalSkills = {
  standard: skills.slice(0, 4),
  full: skills,
}

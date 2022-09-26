import { KeySkill, Profile, SoftSkill, Summary, TechnicalSkill } from "types/summary"
import { technology } from "./technology"

const profile: Profile = {
  description: `
  I am a passionate polyglot programmer who thrives off problem-solving in a variety of languages, both professionally and for fun. My main skills are centred around full-stack web development with TypeScript/JavaScript (React, React Native, Node), GraphQL, SCSS/CSS-in-JS, and HTML to create rich, responsive user experiences. Prior experience of people management, application support, and UI design also contribute to my offerings as a multi-disciplined professional.
  `,
}

const softSkills: SoftSkill[] = [
  "Leading and working as part of Agile development remotely and on-site",
  "Designing and building responsive, accessible web interfaces, using a mobile-first approach",
  "Mentoring and upskilling new developers within the company and as an external consultant",
  "Advocating TDD in a multitude of languages such as TypeScript, C#, and Elixir",
  "Extensive experience with libraries such as React, Redux, Apollo, Ramda, Express, and Jest",
  "Using React Native and Expo to create cross-platform mobile apps",
  "Engaging with clients in-person and remotely on the behalf of a consulting company",
].map((description) => ({
  type: "soft",
  description,
}))

const technicalSkills: TechnicalSkill[] = [
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
].map((technicalSkill) => ({ type: "technical", ...technicalSkill }))

const standard: Summary = {
  profile,
  keySkills: [...softSkills, ...technicalSkills.slice(0, 5)],
}

const full: Summary = {
  profile,
  keySkills: [...softSkills, ...technicalSkills],
}

export const summary = {
  standard,
  full,
}

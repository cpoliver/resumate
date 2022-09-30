import { SoftSkill } from "types"

const skills: SoftSkill[] = [
  "Leading and working as part of Agile development remotely and on-site",
  "Designing and building responsive, accessible web interfaces, using a mobile-first approach",
  "Mentoring and upskilling new developers within the company and as an external consultant",
  "Advocating TDD in a multitude of languages such as TypeScript, C#, and Elixir",
  "Extensive experience with libraries such as React, Redux, Apollo, Ramda, Express, and Jest",
  "Using React Native and Expo to create cross-platform mobile apps",
  "Engaging with clients in-person and remotely on the behalf of a consulting company",
].map((description) => ({
  description,
}))

export const softSkills = {
  full: skills,
  standard: skills.slice(0, 4),
}

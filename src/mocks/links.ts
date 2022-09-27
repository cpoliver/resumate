import { Link } from "types/link"

const username = "cpoliver"

const linkedin: Link = {
  type: "linkedin",
  name: "LinkedIn",
  url: "https://linkedin.com/in/cpoliver",
  username,
}

const github: Link = {
  type: "github",
  name: "Github",
  url: "https://github.com/cpoliver",
  username,
}

const stackoverflow: Link = {
  type: "stackoverflow",
  name: "StackOverflow",
  url: "https://stackoverflow.com/users/903880/cpoliver",
  username,
}

const twitter: Link = {
  type: "twitter",
  name: "Twitter",
  url: "https://twitter.com/cpoliver",
  username,
}

const dribbble: Link = {
  type: "dribbble",
  name: "Dribbble",
  url: "https://dribbble.com/cpoliver",
  username,
}

const behance: Link = {
  type: "behance",
  name: "Behance",
  url: "https://behance.com/cpoliver",
  username,
}

const codepen: Link = {
  type: "codepen",
  name: "codepen",
  url: "https://codepen.com/cpoliver",
  username,
}

const custom: Link = {
  type: "custom",
  name: "cpoliver.com",
  url: "https://cpoliver.com",
}

const standard: Link[] = [
  //
  linkedin,
  github,
  stackoverflow,
]

const full: Link[] = [
  //
  ...standard,
  twitter,
  dribbble,
  behance,
  codepen,
  custom,
]

export const links = {
  standard,
  full,
}

import { Link } from "types/link"

const username = "cpoliver"

const linkedin: Link = {
  type: "linkedin",
  url: "https://linkedin.com/in/cpoliver",
  username,
}

const github: Link = {
  type: "github",
  url: "https://github.com/cpoliver",
  username,
}

const stackoverflow: Link = {
  type: "stackoverflow",
  url: "https://stackoverflow.com/users/903880/cpoliver",
  username,
}

const twitter: Link = {
  type: "twitter",
  url: "https://twitter.com/cpoliver",
  username,
}

const dribbble: Link = {
  type: "dribbble",
  url: "https://dribbble.com/cpoliver",
  username,
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
]

export const links = {
  standard,
  full,
}

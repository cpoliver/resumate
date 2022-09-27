export type LinkType =
  | "behance"
  | "codepen"
  | "dribbble"
  | "github"
  | "linkedin"
  | "stackoverflow"
  | "twitter"
  | "custom"

export type Link = {
  type: LinkType
  name: string
  url: string
  username?: string
}

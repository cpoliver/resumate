export type LinkType = "linkedin" | "github" | "stackoverflow" | "twitter" | "dribbble" | "custom"

export type LinkStandard = {
  type: Omit<LinkType, "custom">
  url: string
  username?: string
}

export type LinkCustom = {
  type: "custom"
  label: string
  url: string
  username?: string
}

export type Link = LinkStandard | LinkCustom
import { ContactInfo } from "./contactInfo"
import { Link } from "./link"
import { Summary } from "./summary"
import { WorkHistoryItem } from "./workHistory"

export type Resume = {
  name: Name
  contactInfo: ContactInfo[]
  links: Link[]
  summary: Summary
  workHistory: WorkHistoryItem[]
}

export type Name = {
  title?: string
  firstName: string
  middleName?: string
  lastName: string
  postnomials?: string
}

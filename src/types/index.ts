import { ContactInfo } from "./contactInfo"
import { History } from "./history"
import { Link } from "./link"
import { Summary } from "./summary"

export type Resume = {
  name: Name
  contactInfo: ContactInfo[]
  links: Link
  summary: Summary
  history: History
}

export type Name = {
  title?: string
  firstName: string
  middleName?: string
  lastName: string
  postnomials?: string
}

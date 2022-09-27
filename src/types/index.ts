import { ContactDetails } from "./contactDetails"
import { Link } from "./link"
import { Summary } from "./summary"
import { WorkHistoryItem } from "./workHistory"

export type Resume = {
  name: Name
  title: string
  contactDetails: ContactDetails[]
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

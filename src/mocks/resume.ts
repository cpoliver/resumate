import { Resume } from "types"
import { name } from "mocks/name"
import { contactDetails } from "mocks/contactDetails"
import { links } from "mocks/links"
import { summary } from "mocks/summary"
import { workHistory } from "mocks/workHistory"

const standard: Resume = {
  name: name.standard,
  contactDetails: contactDetails.standard,
  links: links.standard,
  summary: summary.standard,
  workHistory: workHistory.standard,
}

const full: Resume = {
  name: name.full,
  contactDetails: contactDetails.full,
  links: links.full,
  summary: summary.full,
  workHistory: workHistory.full,
}

export const resume = {
  standard,
  full,
}

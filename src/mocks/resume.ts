import { Resume } from "types"
import { name, contactDetails, links, summary, workHistory } from "mocks"

const standard: Partial<Resume> = {
  name: name.standard,
  contactDetails: contactDetails.standard,
  links: links.standard,
  summary: summary.standard,
  workHistory: workHistory.standard,
}

const full: Partial<Resume> = {
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

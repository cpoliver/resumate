import { Resume } from "types"
import { name } from "mocks/name"
import { contactDetails } from "mocks/contactDetails"
import { links } from "mocks/links"
import { profile } from "mocks/profile"
import { softSkills } from "mocks/softSkills"
import { technicalSkills } from "mocks/technicalSkills"
import { training } from "mocks/training"
import { education } from "mocks/education"
import { workHistory } from "mocks/workHistory"

const title = "Principal Developer"

const standard: Resume = {
  name: name.standard,
  title,
  contactDetails: contactDetails.standard,
  links: links.standard,
  profile,
  softSkills: softSkills.standard,
  technicalSkills: technicalSkills.standard,
  training: training.standard,
  education: education.standard,
  workHistory: workHistory.standard,
}

const full: Resume = {
  name: name.full,
  title,
  contactDetails: contactDetails.full,
  links: links.full,
  profile,
  softSkills: softSkills.standard,
  technicalSkills: technicalSkills.standard,
  training: training.standard,
  education: education.standard,
  workHistory: workHistory.full,
}

export const resume = {
  standard,
  full,
}

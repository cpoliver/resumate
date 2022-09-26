import { Name } from "types"

const standard: Name = {
  firstName: "Charles",
  lastName: "Oliver",
}

const full: Name = {
  title: "Dr.",
  firstName: "Charles",
  middleName: "Peter",
  lastName: "Oliver",
  postnomials: "PhD",
}

export const name = {
  standard,
  full,
}

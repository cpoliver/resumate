import { Education } from "types"

const nationalDiploma: Education = {
  institution: {
    name: "Hull College of Art and Design",
  },
  course: "National Diploma in Graphic Design",
  grade: "Double Merit",
  duration: {
    from: {
      month: 9,
      year: 2004,
    },
    to: {
      month: 7,
      year: 2006,
    },
  },
}

const asLevel: Education = {
  institution: {
    name: "Hull College of Art and Design",
  },
  course: "National Diploma in Graphic Design",
  grade: "Double Merit",
  duration: {
    from: {
      month: 9,
      year: 2004,
    },
    to: {
      month: 7,
      year: 2006,
    },
  },
}

export const education = {
  standard: [nationalDiploma],
  full: [nationalDiploma, asLevel],
}

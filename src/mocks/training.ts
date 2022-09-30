import { Training } from "types"

const ux: Training = {
  institution: {
    name: "Interaction Design Foundation",
    url: "",
  },
  course: "User Experience: The Beginner's Guide",
}

const designThinking: Training = {
  institution: {
    name: "Interaction Design Foundation",
    url: "",
  },
  course: "Design Thinking: The Beginner's Guide",
}

export const training = {
  standard: [ux],
  full: [ux, designThinking],
}

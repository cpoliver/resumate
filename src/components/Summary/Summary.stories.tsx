import { Flex } from "@chakra-ui/react"
import { Meta, Story } from "@storybook/react"
import React from "react"

import { Summary, SummaryProps } from "./Summary"
import { KeySkill } from "types/summary"

export default {
  title: "Components / Summary",
  component: Summary,
} as Meta<SummaryProps>

const Template: Story<SummaryProps> = (args) => (
  <Flex maxW={800}>
    <Summary {...args} />
  </Flex>
)

const keySkills: KeySkill[] = [
  {
    type: "technical",
    technology: {
      name: "javascript",
    },
    description: "JavaScript and TypeScript development",
    yearsExperience: 10,
    skillLevel: "expert",
  },
  { type: "soft", description: "People management", yearsExperience: 10, skillLevel: "advanced" },
  {
    type: "education",
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
  },
  {
    type: "training",
    institution: {
      name: "Interaction Design Foundation",
      url: "",
    },
    course: "User Experience: The Beginner's Guide",
  },
]

export const Default = Template.bind({})
Default.args = {
  profile: {
    description: "I am a person",
  },
  keySkills,
}

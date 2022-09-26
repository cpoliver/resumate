import { Flex } from "@chakra-ui/react"
import { Meta, Story } from "@storybook/react"
import React from "react"

import { WorkHistory, WorkHistoryProps } from "./WorkHistory"
import { WorkHistoryItem } from "types/workHistory"

export default {
  title: "Components / Work History",
  component: WorkHistory,
} as Meta<WorkHistoryProps>

const Template: Story<WorkHistoryProps> = (args) => (
  <Flex maxW={800}>
    <WorkHistory {...args} />
  </Flex>
)

const workHistory: WorkHistoryItem[] = [
  {
    company: {
      name: "Aperture Science",
      url: "http://127.0.0.1",
    },
    role: "Principal Developer",
    workType: "permanent",
    duration: {
      from: {
        month: 4,
        year: 1991,
      },
      to: {
        month: 9,
        year: 2022,
      },
    },
    summary: "summary",
    items: ["write code", "??????", "profit!"],
    technologies: [{ name: "JavasSript" }, { name: "nodeJS" }],
  },
]

export const Default = Template.bind({})
Default.args = {
  workHistory,
}

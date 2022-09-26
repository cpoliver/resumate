import { Flex } from "@chakra-ui/react"
import { Meta, Story } from "@storybook/react"
import React from "react"

import { ContactDetails, ContactDetailsProps } from "./ContactDetails"
import { contactDetails } from "mocks/contactDetails"

export default {
  title: "Components / Contact Details",
  component: ContactDetails,
} as Meta<ContactDetailsProps>

const Template: Story<ContactDetailsProps> = (args) => (
  <Flex maxW={800}>
    <ContactDetails {...args} />
  </Flex>
)

export const Default = Template.bind({})
Default.args = {
  contactDetails: contactDetails.standard,
}

export const Full = Template.bind({})
Full.args = {
  contactDetails: contactDetails.full,
}

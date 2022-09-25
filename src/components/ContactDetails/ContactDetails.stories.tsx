import { Flex } from "@chakra-ui/react"
import { Meta, Story } from "@storybook/react"
import React from "react"

import { ContactDetails, ContactDetailsProps } from "./ContactDetails"
import { ContactInfoCustom, ContactInfoEmail, ContactInfoPhone } from "types/contactInfo"

export default {
  title: "Components / Contact Details",
  component: ContactDetails,
} as Meta<ContactDetailsProps>

const Template: Story<ContactDetailsProps> = (args) => (
  <Flex maxW={800}>
    <ContactDetails {...args} />
  </Flex>
)

const phone: ContactInfoPhone = {
  type: "phone",
  countryCode: "+44",
  number: "7000000000",
}

const email: ContactInfoEmail = {
  type: "email",
  emailAddress: "user@test.com",
}

const custom: ContactInfoCustom = {
  type: "custom",
  label: "skype",
  value: "@username",
}

export const Default = Template.bind({})
Default.args = {
  contactInfo: [phone, email, custom],
}

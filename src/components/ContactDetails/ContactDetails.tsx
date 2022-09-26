import { Flex, Stack, Text } from "@chakra-ui/react"
import React from "react"

import { Resume } from "types"
import {
  ContactDetailsCustom,
  ContactDetailsEmail,
  ContactDetailsPhone,
  ContactDetails as ContactDetailsType,
  ContactType,
} from "types/contactDetails"

const getKey = (contactDetails: ContactDetailsType): string => {
  if (contactDetails.type === "phone") return contactDetails.number
  if (contactDetails.type === "email") return contactDetails.emailAddress

  return contactDetails.value
}

export type ContactDetailsProps = Pick<Resume, "contactDetails">

export const ContactDetails: React.FC<ContactDetailsProps> = ({ contactDetails }) => (
  <Stack gap={4}>
    {contactDetails.map((contactItem) => (
      <ContactItem key={getKey(contactItem)} {...contactItem} />
    ))}
  </Stack>
)

const ContactItem: React.FC<ContactDetailsType> = (contactDetails) => {
  const map: Record<ContactType, React.ReactElement> = {
    phone: <ContactItemPhone {...(contactDetails as ContactDetailsPhone)} />,
    email: <ContactItemEmail {...(contactDetails as ContactDetailsEmail)} />,
    custom: <ContactItemCustom {...(contactDetails as ContactDetailsCustom)} />,
  }

  return map[contactDetails.type]
}

const ContactItemPhone: React.FC<ContactDetailsPhone> = (contactDetails) => (
  <Flex>
    <Text>{contactDetails.countryCode}</Text>
    <Text>{contactDetails.number}</Text>
  </Flex>
)

const ContactItemEmail: React.FC<ContactDetailsEmail> = (contactDetails) => (
  <Flex>
    <Text>{contactDetails.emailAddress}</Text>
  </Flex>
)

const ContactItemCustom: React.FC<ContactDetailsCustom> = (contactDetails) => (
  <Flex>
    <Text>{contactDetails.label}</Text>
    <Text>{contactDetails.value}</Text>
  </Flex>
)

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
  <Flex align="baseline" flexWrap="wrap" gap={4}>
    {contactDetails.map((contactItem) => (
      <ContactItem key={getKey(contactItem)} {...contactItem} />
    ))}
  </Flex>
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
  <Flex align="center">
    {/* TODO: support icons */}
    <Text fontSize="sm" opacity={0.8}>
      phone:&nbsp;
    </Text>
    <Text>
      ({contactDetails.countryCode})&nbsp;{contactDetails.number}
    </Text>
  </Flex>
)

const ContactItemEmail: React.FC<ContactDetailsEmail> = (contactDetails) => (
  <Flex align="center">
    <Text fontSize="sm" opacity={0.8}>
      email:&nbsp;
    </Text>
    <Text>{contactDetails.emailAddress}</Text>
  </Flex>
)

const ContactItemCustom: React.FC<ContactDetailsCustom> = (contactDetails) => (
  <Flex align="baseline">
    <Text fontSize="sm" opacity={0.8}>
      {contactDetails.label}:&nbsp;
    </Text>
    <Text>{contactDetails.value}</Text>
  </Flex>
)

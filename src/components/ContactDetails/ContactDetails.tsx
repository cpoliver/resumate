import { Flex, Stack, Text } from "@chakra-ui/react"
import React from "react"

import { Resume } from "types"
import { ContactInfo, ContactInfoCustom, ContactInfoEmail, ContactInfoPhone, ContactInfoType } from "types/contactInfo"

export type ContactDetailsProps = Pick<Resume, "contactInfo">

const getKey = (contactInfo: ContactInfo): string => {
  if (contactInfo.type === "phone") return contactInfo.number
  if (contactInfo.type === "email") return contactInfo.emailAddress

  return contactInfo.value
}

export const ContactDetails: React.FC<ContactDetailsProps> = ({ contactInfo }) => (
  <Stack gap={4}>
    {contactInfo.map((contactItem) => (
      <ContactItem key={getKey(contactItem)} {...contactItem} />
    ))}
  </Stack>
)

const ContactItem: React.FC<ContactInfo> = (contactInfo) => {
  const map: Record<ContactInfoType, React.ReactElement> = {
    phone: <ContactItemPhone {...(contactInfo as ContactInfoPhone)} />,
    email: <ContactItemEmail {...(contactInfo as ContactInfoEmail)} />,
    custom: <ContactItemCustom {...(contactInfo as ContactInfoCustom)} />,
  }

  return map[contactInfo.type]
}

const ContactItemPhone: React.FC<ContactInfoPhone> = (contactInfo) => (
  <Flex>
    <Text>{contactInfo.countryCode}</Text>
    <Text>{contactInfo.number}</Text>
  </Flex>
)

const ContactItemEmail: React.FC<ContactInfoEmail> = (contactInfo) => (
  <Flex>
    <Text>{contactInfo.emailAddress}</Text>
  </Flex>
)

const ContactItemCustom: React.FC<ContactInfoCustom> = (contactInfo) => (
  <Flex>
    <Text>{contactInfo.label}</Text>
    <Text>{contactInfo.value}</Text>
  </Flex>
)

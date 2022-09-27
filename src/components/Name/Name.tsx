import { Heading, Text } from "@chakra-ui/react"
import React from "react"

import { Name as NameType } from "types"

export type NameProps = NameType

export const Name: React.FC<NameProps> = ({ title, firstName, middleName, lastName, postnomials }) => (
  <Heading as="h2" display="inline-flex">
    {title && (
      <Text as="span" fontWeight="normal">
        {title}&nbsp;
      </Text>
    )}
    <Text>{firstName}&nbsp;</Text>
    {middleName && <Text>{middleName}&nbsp;</Text>}
    <Text>{lastName}&nbsp;</Text>
    {postnomials && (
      <Text as="span" fontWeight="normal">
        {postnomials}
      </Text>
    )}
  </Heading>
)

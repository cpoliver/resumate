import { Stack, Text } from "@chakra-ui/react"
import React from "react"

import { Name as NameType } from "types"

export type NameProps = NameType

export const Name: React.FC<NameProps> = ({ title, firstName, middleName, lastName, postnomials }) => (
  <Stack direction="row" spacing={1}>
    {title && <Text>{title}</Text>}
    <Text>{firstName}</Text>
    {middleName && <Text>{middleName}</Text>}
    <Text>{lastName}</Text>
    {postnomials && <Text>{postnomials}</Text>}
  </Stack>
)

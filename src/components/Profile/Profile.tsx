import { Heading, Stack, Text } from "@chakra-ui/react"
import React from "react"

import { Resume } from "types"

export type ProfileProps = Resume["profile"]

export const Profile: React.FC<ProfileProps> = ({ description }) => (
  <Stack>
    <Heading as="h4" size="md">
      Profile
    </Heading>
    <Text>{description}</Text>
  </Stack>
)

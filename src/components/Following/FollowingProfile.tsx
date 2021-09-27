import { Avatar, Box, Stack, Text } from "@chakra-ui/react"
import React from "react"

import { Profile } from "api/data"

export const FollowingProfile: React.FC<Profile> = ({ profile_name }) => (
  <Stack align="center" cursor="pointer" justify="center">
    <Box layerStyle="avatarBorder">
      <Avatar bg="mode.secondary" name={profile_name} size="lg" src={`https://i.pravatar.cc/80?u=${profile_name}`} />
    </Box>
    <Text fontSize="xs" overflow="hidden" textAlign="center" textOverflow="ellipsis" w={16} whiteSpace="nowrap">
      {profile_name}
    </Text>
  </Stack>
)

export const FollowingProfileSkeleton: React.FC = () => (
  <Stack align="center" cursor="pointer" justify="center" spacing={3}>
    <Box borderColor="mode.text1" layerStyle="avatarBorder">
      <Avatar bg="mode.text1" name=" " size="lg" />
    </Box>
    <Box layerStyle="skeleton" w={16} />
  </Stack>
)

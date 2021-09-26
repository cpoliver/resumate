import { Avatar, Box, Stack, Text } from "@chakra-ui/react"
import React from "react"

import { Profile } from "common"

type FollowingProps = { profiles: Profile[] }

export const Following: React.FC<FollowingProps> = ({ profiles }) => (
  <Stack
    as="section"
    bg="mode.backgroundAlt"
    borderColor="mode.border"
    borderWidth="1px"
    direction="row"
    overflow="hidden"
    px={2}
    py={4}
  >
    {profiles.map(({ profile_picture, profile_name }) => (
      <Stack key={profile_name} align="center" cursor="pointer" justify="center">
        <Box layerStyle="avatarBorder">
          <Avatar bg="mode.secondary" name={profile_name} size="lg" src={profile_picture} />
        </Box>
        <Text fontSize="xs" overflow="hidden" textAlign="center" textOverflow="ellipsis" w={16} whiteSpace="nowrap">
          {profile_name}
        </Text>
      </Stack>
    ))}
  </Stack>
)

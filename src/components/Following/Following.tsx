import { Avatar, Box, Stack, Text } from "@chakra-ui/react"
import React from "react"

import { Profile } from "common"

type FollowingProps = { profiles: Profile[] }

export const Following: React.FC<FollowingProps> = ({ profiles }) => (
  <Stack as="section" bg="white" borderColor="gray.300" borderWidth="1px" direction="row" px={2} py={4}>
    {profiles.map(({ profile_picture, profile_name }) => (
      <Stack key={profile_name} align="center" cursor="pointer" justify="center">
        <Box layerStyle="avatarBorder">
          <Avatar bg="secondary" name={profile_name} size="lg" src={profile_picture} />
        </Box>
        <Text fontSize="xs" overflow="hidden" textAlign="center" textOverflow="ellipsis" w={20} whiteSpace="nowrap">
          {profile_name}
        </Text>
      </Stack>
    ))}
  </Stack>
)

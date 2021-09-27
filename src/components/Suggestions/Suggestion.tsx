import { Avatar, Box, Button, Link, Spacer, Stack, Text } from "@chakra-ui/react"
import React from "react"

import { Profile } from "api"

type SuggestionType = "suggestion" | "follower"

const label: { [key in SuggestionType]: string } = {
  follower: "Follows you",
  suggestion: "Suggested for you",
}

export const Suggestion: React.FC<Profile> = ({ profile_name, profile_picture }) => {
  const suggestionType = label[profile_name.length % 2 === 0 ? "follower" : "suggestion"]

  return (
    <Stack align="center" direction="row" spacing={3}>
      <Avatar bg="mode.secondary" cursor="pointer" name={profile_name} size="sm" src={profile_picture} />
      <Stack flex={1} justify="center" spacing="-.125rem">
        <Link variant="profile">{profile_name}</Link>
        <Text color="mode.text2" fontSize="xs">
          {suggestionType}
        </Text>
      </Stack>
      <Button variant="link">Follow</Button>
    </Stack>
  )
}

export const SuggestionSkeleton: React.FC = () => (
  <Stack align="center" direction="row" spacing={3}>
    <Avatar bg="mode.text1" cursor="pointer" name=" " size="sm" />
    <Stack flex={1} justify="center" spacing="1px">
      <Box layerStyle="skeleton" w={24} />
      <Spacer />
      <Box layerStyle="skeleton" w={20} />
    </Stack>
    <Box layerStyle="skeleton" w={10} />
  </Stack>
)

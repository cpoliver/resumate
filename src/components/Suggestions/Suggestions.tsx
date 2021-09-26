import { Avatar, Box, Button, Link, Spacer, Stack, Text } from "@chakra-ui/react"
import React from "react"

type SuggestionType = "suggestion" | "follower"

export type Suggestion = {
  profile_name: string
  profile_picture: string
  type: SuggestionType
}

type SuggestionsProps = {
  suggestions: Suggestion[]
}

const label: { [key in SuggestionType]: string } = {
  follower: "Follows you",
  suggestion: "Suggested for you",
}

export const Suggestions: React.FC<SuggestionsProps> = ({ suggestions }) => (
  <Stack fontSize="sm" spacing={3}>
    <Stack direction="row">
      <Text color="mode.text2" flex={1} fontWeight="semibold">
        Suggestions for you
      </Text>
      <Button color="mode.text2" variant="link">
        See All
      </Button>
    </Stack>
    {suggestions.map(({ profile_name, profile_picture, type }) => (
      <Stack key={profile_name} align="center" direction="row" spacing={3}>
        <Avatar bg="mode.secondary" cursor="pointer" name={profile_name} size="sm" src={profile_picture} />
        <Stack flex={1} justify="center" spacing="-.125rem">
          <Link variant="profile">{profile_name}</Link>
          <Text color="mode.text2" fontSize="xs">
            {label[type]}
          </Text>
        </Stack>
        <Button variant="link">Follow</Button>
      </Stack>
    ))}
  </Stack>
)

export const SuggestionsSkeleton: React.FC = () => (
  <Stack fontSize="sm" layerStyle="loading" spacing={4}>
    <Stack direction="row" py={1}>
      <Box layerStyle="skeleton" w={64} />
      <Spacer />
      <Box layerStyle="skeleton" w={10} />
    </Stack>
    {[1, 2, 3, 4, 5].map((i) => (
      <Stack key={i} align="center" direction="row" spacing={3}>
        <Avatar bg="mode.text1" cursor="pointer" name=" " size="sm" />
        <Stack flex={1} justify="center" spacing="1px">
          <Box layerStyle="skeleton" w={24} />
          <Spacer />
          <Box layerStyle="skeleton" w={32} />
        </Stack>
        <Box layerStyle="skeleton" w={10} />
      </Stack>
    ))}
  </Stack>
)

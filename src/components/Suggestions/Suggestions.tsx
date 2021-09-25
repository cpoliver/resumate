import { Avatar, Button, Stack, Text } from "@chakra-ui/react"
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
      <Text color="gray.500" flex={1} fontWeight="semibold">
        Suggestions for you
      </Text>
      <Button _hover={{ bg: "none" }} size="xs" variant="ghost">
        See All
      </Button>
    </Stack>
    {suggestions.map(({ profile_name, profile_picture, type }) => (
      <Stack key={profile_name} align="center" direction="row" spacing={3}>
        <Avatar bg="secondary" cursor="pointer" name={profile_name} size="sm" src={profile_picture} />
        <Stack flex={1} justify="center" spacing="-.125rem">
          <Text cursor="pointer" fontWeight="semibold">
            {profile_name}
          </Text>
          <Text color="gray.500" fontSize="xs">
            {label[type]}
          </Text>
        </Stack>
        <Button _hover={{ bg: "none" }} color="primary" size="xs" variant="ghost">
          Follow
        </Button>
      </Stack>
    ))}
  </Stack>
)

import { Button, Heading, Stack, StackProps, Text } from "@chakra-ui/react"
import React from "react"

type ErrorMessageProps = StackProps & {
  message: string
  description: string
  onRetry?: () => void
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, description, onRetry, ...stackProps }) => (
  <Stack align="center" borderColor="mode.border" borderRadius="md" borderWidth="1px" p={4} spacing={4} {...stackProps}>
    <Heading color="mode.text1" fontSize="2xl" lineHeight={4}>
      {message}
    </Heading>
    <Text color="mode.text2">{description}</Text>
    {onRetry && (
      <Button color="mode.text4" mt={2} size="sm" textTransform="uppercase" variant="outline" onClick={onRetry}>
        Retry
      </Button>
    )}
  </Stack>
)

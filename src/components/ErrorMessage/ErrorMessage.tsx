import { Button, Heading, Stack, StackProps, Text } from "@chakra-ui/react"
import React from "react"

type ErrorMessageProps = StackProps & {
  name: string
  message: string
  onRetry?: () => void
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ name, message, onRetry, ...stackProps }) => (
  <Stack align="center" borderColor="mode.border" borderRadius="md" borderWidth="1px" p={4} spacing={4} {...stackProps}>
    <Heading color="mode.text1" fontSize="2xl" lineHeight={4}>
      {name}
    </Heading>
    <Text color="mode.text2">{message}</Text>
    {onRetry && (
      <Button color="mode.text4" mt={2} size="sm" textTransform="uppercase" variant="outline" onClick={onRetry}>
        Retry
      </Button>
    )}
  </Stack>
)

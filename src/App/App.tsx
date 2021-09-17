import { Container, Flex, Stack } from "@chakra-ui/react"
import React from "react"

import { AppBar } from "components"
import posts from "data/posts.json"

export const App: React.FC = () => (
  <Stack bottom={0} flex={1} left={0} pos="fixed" right={0} spacing={0} top={0}>
    <AppBar />
    <Flex bg="gray.50" flex={1}>
      <Container flex={1} maxW="container.lg" minH="100vh">
        <Stack bg="rgba(0,0,0,.2)" direction="row" flex={1} height="100%">
          <Flex flex={2}>
            {posts.map((post) => (
              <Post key={post.date.date} {...post} />
            ))}
          </Flex>
          <Flex flex={1}>Suggestions</Flex>
        </Stack>
      </Container>
    </Flex>
  </Stack>
)

const Post: React.FC = () => <Flex bg="rgba(0,0,0,.2)" flex={1} />

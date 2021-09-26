import { Container, Flex, Stack, Text } from "@chakra-ui/react"
import React from "react"

import { posts, profiles, suggestions } from "common"
import { AppBar, ColorModeSwitcher, Following, Post, ProfileSwitcher, Suggestion, Suggestions } from "components"

export const App: React.FC = () => (
  <Stack bottom={0} flex={1} left={0} pos="absolute" right={0} spacing={0} top={0}>
    <AppBar />
    <Flex as="main" bg="mode.background" flex={1}>
      <Container flex={1} minH="100vh" my={20} overflow="auto">
        <Stack direction="row" flex={1} spacing={8}>
          <Content />
          <SideBar />
        </Stack>
      </Container>
    </Flex>
    <Flex bottom={4} pos="fixed" right={4}>
      <ColorModeSwitcher />
    </Flex>
  </Stack>
)

const Content: React.FC = () => (
  <Stack as="section" flex={2} spacing={6}>
    <Following profiles={profiles} />
    {posts.map((post) => (
      <Post key={post.date.date} {...post} />
    ))}
  </Stack>
)

const SideBar: React.FC = () => (
  <Stack as="aside" flex={1} spacing={6}>
    <ProfileSwitcher {...posts[0]} />
    <Suggestions suggestions={suggestions as Suggestion[]} />
    <Text color="mode.text3" fontSize="xs" textTransform="uppercase">
      &copy; {new Date().getFullYear()} Killagram from Charlie
    </Text>
  </Stack>
)

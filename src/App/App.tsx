import { Avatar, Button, Container, Flex, Image, Spacer, Stack, Text } from "@chakra-ui/react"
import React from "react"

import { AppBar, ProfileSwitcher } from "components"
import posts from "data/posts.json"

const FollowedList = Flex
const SuggestionList = Flex

export const App: React.FC = () => (
  <Stack bottom={0} flex={1} left={0} pos="fixed" right={0} spacing={0} top={0}>
    <AppBar />
    <Flex bg="gray.50" flex={1}>
      <Container flex={1} maxW="container.lg" minH="100vh" overflow="auto">
        <Stack bg="rgba(0,0,0,.2)" direction="row" flex={1} height="100%">
          <Stack flex={2} spacing={0}>
            <FollowedList />
            {posts.map((post) => (
              <Post key={post.date.date} {...post} />
            ))}
          </Stack>
          <Flex flex={1}>
            <ProfileSwitcher />
            <SuggestionList />
          </Flex>
        </Stack>
      </Container>
    </Flex>
  </Stack>
)

const Post: React.FC<typeof posts[0]> = (props) => (
  <Stack bg="rgba(0,0,0,.2)" flex={1}>
    <Stack bg="white" direction="row" px={2} py={4}>
      <Avatar src={props.profile_picture} />
      <Text flex={1}>{props.profile_name}</Text>
      <Button>...</Button>
    </Stack>

    <Image alt={props.post_text} src={props.post_image} />

    <Stack direction="row">
      <Button>Heart</Button>
      <Button>Comment</Button>
      <Button>Message</Button>
      <Spacer />
      <Button>Bookmark</Button>
    </Stack>
  </Stack>
)

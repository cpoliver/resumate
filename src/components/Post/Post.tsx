import { Avatar, Button, Image, Spacer, Stack, Text } from "@chakra-ui/react"
import React from "react"

import posts from "data/posts.json"

type Post = typeof posts[0]

export const Post: React.FC<Post> = (props) => (
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

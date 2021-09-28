import { Flex } from "@chakra-ui/react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { Post } from "./Post"
import { PostSkeleton } from "./PostSkeleton"
import { post } from "api"

export default {
  title: "Stories / Post",
  component: Post,
} as ComponentMeta<typeof Post>

const Template: ComponentStory<typeof Post> = (args) => (
  <Flex maxW={800}>
    <Post {...args} />
  </Flex>
)

export const Success = Template.bind({})
Success.args = post

export const Loading = () => (
  <Flex maxW={800}>
    <PostSkeleton />
  </Flex>
)

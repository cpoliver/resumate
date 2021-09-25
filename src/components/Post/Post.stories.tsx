import { Flex } from "@chakra-ui/react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

import { Post } from "./Post"
import { post } from "common"

export default {
  title: "Post",
  component: Post,
} as ComponentMeta<typeof Post>

const Template: ComponentStory<typeof Post> = (args) => (
  <Flex maxW={800}>
    <Post {...args} />
  </Flex>
)

export const WithComments = Template.bind({})
WithComments.args = post

export const New = Template.bind({})
New.args = { ...post, comments: [], likes: [] }

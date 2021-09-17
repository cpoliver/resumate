import { Container, Flex, HStack, IconButton, Image, Input } from "@chakra-ui/react"
import React from "react"

import logo from "logo.svg"

export const AppBar: React.FC = () => (
  <Flex as="header" bg="tomato" p={4}>
    <Container maxW="container.lg">
      <HStack>
        <Image alt="Killergram" data-testid="logo" h={32} src={logo} />
        <Input placeholder="search" />
        <Nav />
      </HStack>
    </Container>
  </Flex>
)

const Nav: React.FC = () => (
  <HStack>
    <IconButton aria-label="Home" />
    <IconButton aria-label="Direct messages" />
    <IconButton aria-label="New post" />
    <IconButton aria-label="Find people" />
    <IconButton aria-label="Activity feed" />
    <IconButton aria-label="Profile" />
  </HStack>
)

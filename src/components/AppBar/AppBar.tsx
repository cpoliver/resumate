import { Container, Flex, Image, Input, Link, Stack } from "@chakra-ui/react"
import React from "react"

import * as Button from "../Button/Button"
import { focusStyles } from "components"
import logo from "logo.svg"

export const AppBar: React.FC = () => (
  <Flex
    align="center"
    as="header"
    bg="white"
    borderBottomColor="gray.300"
    borderBottomWidth="1px"
    h={14}
    justify="space-between"
    left={0}
    pos="fixed"
    px={4}
    py={1}
    right={0}
    zIndex="banner"
  >
    <Container maxW="container.lg">
      <Stack align="center" direction="row" spacing={2}>
        <Logo />
        <Search />
        <Nav />
      </Stack>
    </Container>
  </Flex>
)

const Logo: React.FC = () => (
  <Flex flex={1}>
    <Link {...focusStyles} tabIndex={0}>
      <Image alt="Killergram" data-testid="logo" h={7} src={logo} />
    </Link>
  </Flex>
)

const Search: React.FC = () => (
  <Flex flex={1} justify="center">
    <Input bg="gray.50" maxW="215px" placeholder="Search" size="sm" textAlign="center" />
  </Flex>
)

const Nav: React.FC = () => (
  <Stack as="nav" direction="row" flex={1} justifyContent="flex-end" spacing={2}>
    <Button.HomeButton />
    <Button.DirectMessagesButton />
    <Button.NewPostButton />
    <Button.FindPeopleButton />
    <Button.ActivityFeedButton />
    <Button.ProfileButton />
  </Stack>
)

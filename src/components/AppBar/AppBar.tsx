import { Container, Flex, Input, Link, Stack } from "@chakra-ui/react"
import React from "react"

import * as Button from "../Button/Button"
import { ReactComponent as Logo } from "logo.svg"
import { focusStyles } from "theme/utils"

export const AppBar: React.FC = () => (
  <Flex
    align="center"
    as="header"
    bg="mode.backgroundAlt"
    borderBottomColor="mode.border"
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
        <Brand />
        <Search />
        <Nav />
      </Stack>
    </Container>
  </Flex>
)

const Brand: React.FC = () => (
  <Flex flex={1}>
    <Link {...focusStyles} aria-label="Killergram" color="mode.text1" tabIndex={0}>
      <Logo data-testid="logo" height="2rem" />
    </Link>
  </Flex>
)

const Search: React.FC = () => (
  <Flex flex={1} justify="center">
    <Input maxW="215px" placeholder="Search" size="sm" textAlign="center" />
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

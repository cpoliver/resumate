import { Container, Flex, Image, Input, Stack } from "@chakra-ui/react"
import React from "react"

import * as Buttons from "../Button/Button"
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
    px={4}
    py={1}
  >
    <Container maxW="container.lg">
      <Stack align="center" direction="row" spacing={2}>
        <Flex flex={1}>
          <Image alt="Killergram" data-testid="logo" h={6} src={logo} />
        </Flex>

        <Flex flex={1} justify="center">
          <Input bg="gray.50" maxW="215px" placeholder="Search" size="sm" textAlign="center" />
        </Flex>

        <AppBarButtons />
      </Stack>
    </Container>
  </Flex>
)

const AppBarButtons: React.FC = () => (
  <Stack direction="row" flex={1} justifyContent="flex-end">
    <Buttons.HomeButton />
    <Buttons.DirectMessagesButton />
    <Buttons.NewPostButton />
    <Buttons.FindPeopleButton />
    <Buttons.ActivityFeedButton />
    <Buttons.ProfileButton />
  </Stack>
)

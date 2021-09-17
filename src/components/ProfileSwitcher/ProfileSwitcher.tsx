import { Container, Flex, HStack, Image, Input } from "@chakra-ui/react"
import React from "react"

import logo from "logo.svg"

export const ProfileSwitcher: React.FC = () => (
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
      <HStack align="center" spacing={2}>
        <Flex flex={1}>
          <Image alt="Killergram" data-testid="logo" h={6} src={logo} />
        </Flex>

        <Flex flex={1} justify="center">
          <Input bg="gray.50" maxW="215px" placeholder="Search" size="sm" textAlign="center" />
        </Flex>
      </HStack>
    </Container>
  </Flex>
)

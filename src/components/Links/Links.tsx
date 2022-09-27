import { Flex, LinkBox, LinkOverlay, Stack, Text } from "@chakra-ui/react"
import React from "react"

import { LinkIcon } from "components/LinkIcon/LinkIcon"
import { Resume } from "types"
import { Link as LinkProps } from "types/link"

export type LinksProps = Pick<Resume, "links">

export const Links: React.FC<LinksProps> = ({ links }) => (
  <Stack gap={4}>
    {links.map((link) => (
      <LinkItem key={link.url} {...link} />
    ))}
  </Stack>
)

const LinkItem: React.FC<LinkProps> = (link) => (
  <LinkBox>
    <LinkOverlay href={link.url ?? "#"}>
      <Flex align="center" gap={2}>
        <LinkIcon boxSize={8} link={link}></LinkIcon>
        {link.username ? <Text>@{link.username}</Text> : <Text>{link.name}</Text>}
      </Flex>
    </LinkOverlay>
  </LinkBox>
)

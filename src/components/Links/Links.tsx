import { Flex, LinkBox, LinkOverlay, Text } from "@chakra-ui/react"
import React from "react"

import { LinkIcon } from "components/LinkIcon/LinkIcon"
import { Resume } from "types"
import { Link as LinkProps } from "types/link"

export type LinksProps = Pick<Resume, "links">

export const Links: React.FC<LinksProps> = ({ links }) => (
  <Flex flexWrap="wrap" gap={4}>
    {links.map((link) => (
      <LinkItem key={link.url} {...link} />
    ))}
  </Flex>
)

const LinkItem: React.FC<LinkProps> = (link) => (
  <LinkBox>
    <LinkOverlay href={link.url ?? "#"} target="_blank">
      <Flex align="center" gap={2}>
        <LinkIcon boxSize={6} link={link} />
        {<Text fontSize="sm">{link.username ? `@${link.username}` : link.name}</Text>}
      </Flex>
    </LinkOverlay>
  </LinkBox>
)

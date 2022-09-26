import { Stack, Text } from "@chakra-ui/react"
import React from "react"

import { Resume } from "types"
import { Link, LinkCustom, LinkDefault } from "types/link"

export type LinksProps = Pick<Resume, "links">

export const Links: React.FC<LinksProps> = ({ links }) => (
  <Stack gap={4}>
    {links.map((link) => (
      <LinkItem key={link.url} {...link} />
    ))}
  </Stack>
)

const LinkItem: React.FC<Link> = (link) => {
  if (link.type === "custom") return <LinkItemCustom {...(link as LinkCustom)} />

  return <LinkItemDefault {...(link as LinkDefault)} />
}

const LinkItemDefault: React.FC<LinkDefault> = ({ type, url, username }) => (
  <Stack spacing={0}>
    <Text>{type}</Text>
    <Text>{url}</Text>
    <Text>{username}</Text>
  </Stack>
)

const LinkItemCustom: React.FC<LinkCustom> = ({ label, url, username }) => (
  <Stack spacing={0}>
    <Text>{label}</Text>
    <Text>{url}</Text>
    <Text>{username}</Text>
  </Stack>
)

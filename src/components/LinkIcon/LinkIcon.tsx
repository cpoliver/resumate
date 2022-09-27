import { Icon, IconProps } from "@chakra-ui/react"
import React, { ReactElement } from "react"

import { ReactComponent as BehanceIcon } from "resources/icons/link/behance.svg"
import { ReactComponent as CodepenIcon } from "resources/icons/link/codepen.svg"
import { ReactComponent as CustomIcon } from "resources/icons/link/custom.svg"
import { ReactComponent as DribbleIcon } from "resources/icons/link/dribbble.svg"
import { ReactComponent as GithubIcon } from "resources/icons/link/github.svg"
import { ReactComponent as LinkedInIcon } from "resources/icons/link/linkedin.svg"
import { ReactComponent as StackOverflowIcon } from "resources/icons/link/stackoverflow.svg"
import { ReactComponent as TwitterIcon } from "resources/icons/link/twitter.svg"
import { Link, LinkType } from "types/link"

// TODO: add missing logo svgs
const ICON_MAP: Record<LinkType, ReactElement> = {
  behance: <BehanceIcon />,
  codepen: <CodepenIcon />,
  dribbble: <DribbleIcon />,
  github: <GithubIcon />,
  linkedin: <LinkedInIcon />,
  stackoverflow: <StackOverflowIcon />,
  twitter: <TwitterIcon />,
  custom: <CustomIcon />,
}

type LinkIconProps = Omit<IconProps, "css"> & {
  link: Link
}

export const LinkIcon: React.FC<LinkIconProps> = ({ link, ...iconProps }) =>
  ICON_MAP[link.type] ? <Icon {...iconProps}>{ICON_MAP[link.type]}</Icon> : null

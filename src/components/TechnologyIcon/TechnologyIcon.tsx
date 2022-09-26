import { Flex, Icon, IconProps, Text } from "@chakra-ui/react"
import React, { ReactElement } from "react"

import { ReactComponent as AngularIcon } from "resources/logos/angular.svg"
import { ReactComponent as CSharpIcon } from "resources/logos/csharp.svg"
import { ReactComponent as CssIcon } from "resources/logos/css.svg"
import { ReactComponent as ElixirIcon } from "resources/logos/elixir.svg"
import { ReactComponent as HtmlIcon } from "resources/logos/html.svg"
import { ReactComponent as JavaScriptIcon } from "resources/logos/javascript.svg"
import { ReactComponent as NodeIcon } from "resources/logos/node.svg"
import { ReactComponent as ReactIcon } from "resources/logos/react.svg"
import { ReactComponent as TypeScriptIcon } from "resources/logos/typescript.svg"
import { Technology } from "types/common"

// TODO: union type of valid technology names
const ICON_MAP: Record<string, ReactElement> = {
  angular: <AngularIcon />,
  csharp: <CSharpIcon />,
  css: <CssIcon />,
  elixir: <ElixirIcon />,
  html: <HtmlIcon />,
  javascript: <JavaScriptIcon />,
  node: <NodeIcon />,
  react: <ReactIcon />,
  reactNative: <ReactIcon />,
  typescript: <TypeScriptIcon />,
}

type TechnologyIconProps = Omit<IconProps, "css"> & {
  technology: Technology
  hideLabel?: boolean
}

export const TechnologyIcon: React.FC<TechnologyIconProps> = ({ technology, hideLabel, ...iconProps }) =>
  technology.icon ? (
    <Flex>
      <Icon {...iconProps}> {ICON_MAP[technology.icon]}</Icon>
      {!hideLabel && <Text fontSize="sm">{technology.name}</Text>}
    </Flex>
  ) : null

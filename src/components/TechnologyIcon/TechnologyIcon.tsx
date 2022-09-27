import { Flex, Icon, IconProps, Text } from "@chakra-ui/react"
import React, { ReactElement } from "react"

import { ReactComponent as AngularIcon } from "resources/icons/technology/angular.svg"
import { ReactComponent as CSharpIcon } from "resources/icons/technology/csharp.svg"
import { ReactComponent as CssIcon } from "resources/icons/technology/css.svg"
import { ReactComponent as ElixirIcon } from "resources/icons/technology/elixir.svg"
import { ReactComponent as HtmlIcon } from "resources/icons/technology/html.svg"
import { ReactComponent as JavaScriptIcon } from "resources/icons/technology/javascript.svg"
import { ReactComponent as NodeIcon } from "resources/icons/technology/node.svg"
import { ReactComponent as ReactNativeIcon } from "resources/icons/technology/react-native.svg"
import { ReactComponent as ReactIcon } from "resources/icons/technology/react.svg"
import { ReactComponent as SqlIcon } from "resources/icons/technology/sql.svg"
import { ReactComponent as TypeScriptIcon } from "resources/icons/technology/typescript.svg"
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
  reactNative: <ReactNativeIcon />,
  sql: <SqlIcon />,
  typescript: <TypeScriptIcon />,
}

type TechnologyIconProps = Omit<IconProps, "css"> & {
  technology: Technology
  hideLabel?: boolean
}

export const TechnologyIcon: React.FC<TechnologyIconProps> = ({ technology, hideLabel, ...iconProps }) =>
  technology.type ? (
    <Flex>
      <Icon {...iconProps}> {ICON_MAP[technology.type]}</Icon>
      {!hideLabel && <Text fontSize="sm">{technology.name}</Text>}
    </Flex>
  ) : null

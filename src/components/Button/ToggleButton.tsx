import { IconButton, IconButtonProps } from "@chakra-ui/react"
import React, { useState } from "react"

import * as Icon from "../Icon/Icon"

type ToggleButtonInstanceProps = Omit<IconButtonProps, "icon" | "aria-label"> & { isToggled?: boolean }

type ToggleButtonProps = ToggleButtonInstanceProps & {
  icons: [toggled: React.ReactElement, untoggled: React.ReactElement]
  labels: [toggled: string, untoggled: string]
}

export type { ToggleButtonInstanceProps as ToggleButtonProps }

export const ToggleButton: React.FC<ToggleButtonProps> = ({
  icons,
  labels,
  isToggled: defaultIsToggled,
  ...iconButtonProps
}) => {
  const [isToggled, setIsToggled] = useState(defaultIsToggled)

  const index = isToggled ? 0 : 1

  const props: IconButtonProps = {
    ...iconButtonProps,
    "aria-label": labels[index],
    icon: icons[index],
  }

  return <IconButton {...props} onClick={() => setIsToggled(!isToggled)} />
}

export const LikeButton: React.FC<ToggleButtonInstanceProps> = ({ isToggled = false }) => (
  <ToggleButton
    icons={[<Icon.HeartFilledIcon key="toggled" />, <Icon.HeartOutlineIcon key="untoggled" />]}
    isToggled={isToggled}
    labels={["Unlike", "Like"]}
  />
)

export const SaveButton: React.FC<ToggleButtonInstanceProps> = ({ isToggled = false, ...buttonProps }) => (
  <ToggleButton
    {...buttonProps}
    icons={[<Icon.SaveFilledIcon key="toggled" />, <Icon.SaveOutlineIcon key="untoggled" />]}
    labels={["Remove", "Save"]}
  />
)

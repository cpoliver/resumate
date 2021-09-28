import { IconButton, IconButtonProps, IconProps } from "@chakra-ui/react"
import React, { useState } from "react"
import { useTranslation } from "react-i18next"

import * as Icon from "../Icon/Icon"

type ToggleButtonInstanceProps = Omit<IconButtonProps, "icon" | "aria-label"> & {
  isToggled?: boolean
  iconProps?: IconProps
}

type ToggleButtonProps = ToggleButtonInstanceProps & {
  icons: [toggled: React.ReactElement, untoggled: React.ReactElement]
  labels: [toggled: string, untoggled: string]
}

export type { ToggleButtonInstanceProps as ToggleButtonProps }

export const ToggleButton: React.FC<ToggleButtonProps> = ({
  icons,
  labels,
  isToggled: defaultIsToggled,
  iconProps,
  ...iconButtonProps
}) => {
  const { t } = useTranslation()
  const [isToggled, setIsToggled] = useState(defaultIsToggled)

  const index = isToggled ? 0 : 1

  const props: IconButtonProps = {
    ...iconButtonProps,
    "aria-label": t(labels[index]),
    icon: icons[index],
    outline: "none",
  }

  return <IconButton size="md" {...props} onClick={() => setIsToggled(!isToggled)} />
}

export const LikeButton: React.FC<ToggleButtonInstanceProps> = ({ isToggled = false, iconProps, ...buttonProps }) => (
  <ToggleButton
    {...buttonProps}
    icons={[
      <Icon.HeartFilledIcon {...(iconProps as any)} key="toggled" />,
      <Icon.HeartOutlineIcon {...(iconProps as any)} key="untoggled" />,
    ]}
    isToggled={isToggled}
    labels={["Unlike", "Like"]}
  />
)

export const SaveButton: React.FC<ToggleButtonInstanceProps> = ({ isToggled = false, iconProps, ...buttonProps }) => (
  <ToggleButton
    {...buttonProps}
    icons={[
      <Icon.SaveFilledIcon {...(iconProps as any)} key="toggled" />,
      <Icon.SaveOutlineIcon {...(iconProps as any)} key="untoggled" />,
    ]}
    labels={["Remove", "Save"]}
  />
)

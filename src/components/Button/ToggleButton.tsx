import { Icon, IconButton, IconButtonProps } from "@chakra-ui/react"
import React, { useState } from "react"

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
    icons={[<Icon key="toggled" />, <Icon key="untoggled" />]}
    isToggled={isToggled}
    labels={["Unlike", "Like"]}
  />
)

export const SaveButton: React.FC<ToggleButtonInstanceProps> = ({ isToggled = false, ...buttonProps }) => (
  <ToggleButton
    {...buttonProps}
    icons={[
      <Icon key="toggled" color="currentColor" viewBox="0 0 48 48" width="22">
        <path d="M24 48C10.8 48 0 37.2 0 24S10.8 0 24 0s24 10.8 24 24-10.8 24-24 24zm0-45C12.4 3 3 12.4 3 24s9.4 21 21 21 21-9.4 21-21S35.6 3 24 3z"></path>
        <path d="M34.9 24c0-1.4-1.1-2.5-2.5-2.5s-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5zm-21.8 0c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5zM24 37.3c-5.2 0-8-3.5-8.2-3.7-.5-.6-.4-1.6.2-2.1.6-.5 1.6-.4 2.1.2.1.1 2.1 2.5 5.8 2.5 3.7 0 5.8-2.5 5.8-2.5.5-.6 1.5-.7 2.1-.2.6.5.7 1.5.2 2.1 0 .2-2.8 3.7-8 3.7z"></path>
      </Icon>,
      <Icon key="untoggled" color="currentColor" viewBox="0 0 48 48" width="22">
        <path d="M24 48C10.8 48 0 37.2 0 24S10.8 0 24 0s24 10.8 24 24-10.8 24-24 24zm0-45C12.4 3 3 12.4 3 24s9.4 21 21 21 21-9.4 21-21S35.6 3 24 3z"></path>
        <path d="M34.9 24c0-1.4-1.1-2.5-2.5-2.5s-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5zm-21.8 0c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5zM24 37.3c-5.2 0-8-3.5-8.2-3.7-.5-.6-.4-1.6.2-2.1.6-.5 1.6-.4 2.1.2.1.1 2.1 2.5 5.8 2.5 3.7 0 5.8-2.5 5.8-2.5.5-.6 1.5-.7 2.1-.2.6.5.7 1.5.2 2.1 0 .2-2.8 3.7-8 3.7z"></path>
      </Icon>,
    ]}
    labels={["Remove", "Save"]}
  />
)

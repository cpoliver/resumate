import { Stack } from "@chakra-ui/react"
import React from "react"

import { ContactDetails, Links, Name, Summary, WorkHistory } from "components"
import { Resume as ResumeType } from "types"

export type ResumeProps = ResumeType

export const Resume: React.FC<ResumeProps> = ({ name, contactDetails, links, summary, workHistory }) => (
  <Stack>
    <Name {...name} />
    <ContactDetails contactDetails={contactDetails} />
    <Links links={links} />
    <Summary {...summary} />
    <WorkHistory workHistory={workHistory} />
  </Stack>
)

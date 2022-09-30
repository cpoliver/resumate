import { Heading, Stack } from "@chakra-ui/react"
import React from "react"

import {
  ContactDetails,
  Education,
  Links,
  Name,
  Profile,
  SoftSkills,
  TechnicalSkills,
  Training,
  WorkHistory,
} from "components"
import { Resume as ResumeType } from "types"

export type ResumeProps = ResumeType

export const Resume: React.FC<ResumeProps> = ({
  name,
  title,
  contactDetails,
  links,
  profile,
  softSkills,
  technicalSkills,
  education,
  training,
  workHistory,
}) => (
  <Stack p={8} spacing={8}>
    <Header name={name} title={title}>
      <ContactDetails contactDetails={contactDetails} />
      <Links links={links} />
    </Header>
    <Profile {...profile} />
    <SoftSkills softSkills={softSkills} />
    <TechnicalSkills technicalSkills={technicalSkills} />
    <Education education={education} />
    <Training training={training} />
    <WorkHistory workHistory={workHistory} />
  </Stack>
)

const Header: React.FC<Pick<ResumeProps, "name" | "title">> = ({ name, title, children }) => (
  <Stack spacing={4}>
    <Stack spacing={0}>
      <Name {...name} />
      <Heading as="h4" fontStyle="italic" fontWeight="normal">
        {title}
      </Heading>
    </Stack>
    {children}
  </Stack>
)

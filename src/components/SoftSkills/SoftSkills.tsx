import { Heading, Stack, Text } from "@chakra-ui/react"
import React from "react"

import { Resume, SoftSkill as SoftSkillItemProps } from "types"

export type SoftSkillsProps = Pick<Resume, "softSkills">

export const SoftSkills: React.FC<SoftSkillsProps> = ({ softSkills }) => (
  <Stack>
    <Heading as="h4" size="md">
      Key Skills
    </Heading>
    {softSkills.map((softSkill) => (
      <SoftSkillItem key={softSkill.description} {...softSkill} />
    ))}
  </Stack>
)

const SoftSkillItem: React.FC<SoftSkillItemProps> = ({ description, yearsExperience, skillLevel }) => (
  <Stack spacing={0}>
    <Text>• {description}</Text>
    {yearsExperience && <Text>{yearsExperience}</Text>}
    {skillLevel && <Text>{skillLevel}</Text>}
  </Stack>
)

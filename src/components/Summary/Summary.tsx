import { Flex, Stack, Text } from "@chakra-ui/react"
import React from "react"

import { formatDuration } from "common/utils"
import { TechnologyIcon } from "components/TechnologyIcon/TechnologyIcon"
import { Resume } from "types"
import { Education, KeySkill, SkillType, SoftSkill, TechnicalSkill, Training } from "types/summary"

const getKey = (keySkill: KeySkill): string => {
  if (keySkill.type === "soft") return keySkill.description
  if (keySkill.type === "technical") return keySkill.technology.name

  return keySkill.course
}

export type SummaryProps = Resume["summary"]

export const Summary: React.FC<SummaryProps> = ({ profile, keySkills }) => (
  <Stack gap={4}>
    <Text>{profile.description}</Text>
    {keySkills.map((keySkill) => (
      <SummaryItem key={getKey(keySkill)} {...keySkill} />
    ))}
  </Stack>
)

const SummaryItem: React.FC<KeySkill> = (keySkill) => {
  const map: Record<SkillType, React.ReactElement> = {
    technical: <SummaryItemTechnicalSkill {...(keySkill as TechnicalSkill)} />,
    soft: <SummaryItemSoftSkill {...(keySkill as SoftSkill)} />,
    education: <SummaryItemEducation {...(keySkill as Education)} />,
    training: <SummaryItemTraining {...(keySkill as Training)} />,
  }

  return map[keySkill.type]
}

const SummaryItemTechnicalSkill: React.FC<TechnicalSkill> = ({
  technology,
  description,
  yearsExperience,
  skillLevel,
}) => (
  <Flex>
    <TechnologyIcon technology={technology} />
    <Text>{description}</Text>
    {yearsExperience && <Text>{yearsExperience}</Text>}
    {skillLevel && <Text>{skillLevel}</Text>}
  </Flex>
)

const SummaryItemSoftSkill: React.FC<SoftSkill> = ({ description, yearsExperience, skillLevel }) => (
  <Stack spacing={0}>
    <Text>{description}</Text>
    {yearsExperience && <Text>{yearsExperience}</Text>}
    {skillLevel && <Text>{skillLevel}</Text>}
  </Stack>
)

const SummaryItemEducation: React.FC<Education> = ({ institution, course, grade, duration }) => (
  <Stack spacing={0}>
    <Text>{course}</Text>
    <Text>{institution.name}</Text>
    {grade && <Text>{grade}</Text>}
    {duration && (
      <Flex>
        <Text>{formatDuration(duration)}</Text>
      </Flex>
    )}
  </Stack>
)

const SummaryItemTraining: React.FC<Training> = ({ institution, course, duration }) => (
  <Stack spacing={0}>
    <Text>{course}</Text>
    <Text>{institution.name}</Text>
    {/* {grade && <Text>{grade}</Text>} */}
    {duration && (
      <Flex>
        <Text>
          {duration.from.month}/{duration.from.year}
        </Text>
        <Text>{formatDuration(duration)}</Text>
      </Flex>
    )}
  </Stack>
)

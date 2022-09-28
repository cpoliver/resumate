import { Badge, Box, Flex, Heading, List, ListItem, Stack, Text } from "@chakra-ui/react"
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
    <Profile {...profile} />
    <KeySkills keySkills={keySkills} />
  </Stack>
)

const Profile: React.FC<SummaryProps["profile"]> = ({ description }) => (
  <Stack>
    <Heading as="h4" size="md">
      Profile
    </Heading>
    <Text>{description}</Text>
  </Stack>
)

const KeySkills: React.FC<{ keySkills: KeySkill[] }> = ({ keySkills }) => (
  <Stack>
    <Heading as="h4" size="md">
      Key Skills
    </Heading>
    <List as={Stack} spacing={2}>
      {keySkills.map((keySkill) => (
        <SummaryItem key={getKey(keySkill)} {...keySkill} />
      ))}
    </List>
  </Stack>
)

const SummaryItem: React.FC<KeySkill> = (keySkill) => {
  const map: Record<SkillType, React.ReactElement> = {
    technical: <SummaryItemTechnicalSkill {...(keySkill as TechnicalSkill)} />,
    soft: <SummaryItemSoftSkill {...(keySkill as SoftSkill)} />,
    education: <SummaryItemEducation {...(keySkill as Education)} />,
    training: <SummaryItemTraining {...(keySkill as Training)} />,
  }

  return <ListItem>{map[keySkill.type]}</ListItem>
}

const SummaryItemTechnicalSkill: React.FC<TechnicalSkill> = ({
  technology,
  description,
  yearsExperience,
  skillLevel,
}) => (
  <Flex align="center" gap={2} maxW="50%">
    <Box flex={1}>
      <TechnologyIcon technology={technology} />
    </Box>
    {description && <Text flex={1}>{description}</Text>}
    {yearsExperience && (
      <Text flex={1} fontSize="sm">
        {yearsExperience} years
      </Text>
    )}
    {skillLevel && (
      <Box flex={1}>
        <Badge size="sm">{skillLevel}</Badge>
      </Box>
    )}
  </Flex>
)

const SummaryItemSoftSkill: React.FC<SoftSkill> = ({ description, yearsExperience, skillLevel }) => (
  <Stack spacing={0}>
    <Text>• {description}</Text>
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

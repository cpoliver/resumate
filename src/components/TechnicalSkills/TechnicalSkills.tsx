import { Badge, Box, Flex, Heading, Stack, Text } from "@chakra-ui/react"
import React from "react"

import { TechnologyIcon } from "components/TechnologyIcon/TechnologyIcon"
import { Resume, TechnicalSkill as TechnicalSkillItemProps } from "types"

export type TechnicalSkillsProps = Pick<Resume, "technicalSkills">

export const TechnicalSkills: React.FC<TechnicalSkillsProps> = ({ technicalSkills }) => (
  <Stack gap={4}>
    <Heading as="h4" size="md">
      Technical Skills
    </Heading>
    {technicalSkills.map((technicalSkill) => (
      <TechnicalSkillItem key={technicalSkill.description} {...technicalSkill} />
    ))}
  </Stack>
)

const TechnicalSkillItem: React.FC<TechnicalSkillItemProps> = ({
  technology,
  description,
  yearsExperience,
  skillLevel,
}) => (
  <Flex align="center" bg="whiteAlpha.100" gap={2} maxW="50%" p={2}>
    <Box flex={1}>
      <TechnologyIcon technology={technology} hideLabel />
    </Box>
    <Stack flex={4} spacing={1}>
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
    </Stack>
  </Flex>
)

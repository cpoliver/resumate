import { Flex, Heading, Stack, Text } from "@chakra-ui/react"
import React from "react"

import { formatDuration } from "common/utils"
import { Education as EducationItemProps, Resume } from "types"

export type EducationProps = Pick<Resume, "education">

export const Education: React.FC<EducationProps> = ({ education }) => (
  <Stack gap={4}>
    {education.map((educationItem) => (
      <EducationItem key={educationItem.course} {...educationItem} />
    ))}
  </Stack>
)

const EducationItem: React.FC<EducationItemProps> = ({ institution, course, duration }) => (
  <Stack spacing={0}>
    <Flex>
      <Heading as="h4" flex={1} size="md">
        {course}
      </Heading>
      {duration && <Text>{formatDuration(duration)}</Text>}
    </Flex>
    <Heading as="h4" fontWeight="medium" size="md">
      {institution.name}
    </Heading>
    {/* {grade && <Text>{grade}</Text>} */}
    {duration && (
      <Flex>
        <Text>{formatDuration(duration)}</Text>
      </Flex>
    )}
  </Stack>
)

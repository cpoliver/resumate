import { Flex, Heading, Stack, Text } from "@chakra-ui/react"
import React from "react"

import { formatDuration } from "common/utils"
import { Resume, Training as TrainingItemProps } from "types"

export type TrainingProps = Pick<Resume, "training">

export const Training: React.FC<TrainingProps> = ({ training }) => (
  <Stack gap={4}>
    {training.map((trainingItem) => (
      <TrainingItem key={trainingItem.course} {...trainingItem} />
    ))}
  </Stack>
)

const TrainingItem: React.FC<TrainingItemProps> = ({ institution, course, duration }) => (
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

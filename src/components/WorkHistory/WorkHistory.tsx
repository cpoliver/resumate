import { Badge, Flex, List, ListItem, Stack, Text } from "@chakra-ui/react"
import React from "react"

import { formatDuration } from "common/utils"
import { Resume } from "types"
import { WorkHistoryItem as WorkHistoryItemProps } from "types/workHistory"

const getKey = (workHistoryItem: WorkHistoryItemProps) => `${workHistoryItem.company}${workHistoryItem.role}`

export type WorkHistoryProps = Pick<Resume, "workHistory">

export const WorkHistory: React.FC<WorkHistoryProps> = ({ workHistory }) => (
  <Stack gap={4}>
    {workHistory.map((workHistoryItem) => (
      <WorkHistoryItem key={getKey(workHistoryItem)} {...workHistoryItem} />
    ))}
  </Stack>
)

const WorkHistoryItem: React.FC<WorkHistoryItemProps> = ({
  company,
  role,
  workType,
  duration,
  summary,
  items,
  technologies,
}) => (
  <Stack spacing={0}>
    <Flex>
      <Text>
        {role} at {company.name}
      </Text>
      <Badge>{workType}</Badge>
    </Flex>
    <Text>{formatDuration(duration)}</Text>
    <Text>{summary}</Text>
    <ItemList items={items} />
    <TechnologyList technologies={technologies} />
  </Stack>
)

const ItemList: React.FC<Pick<WorkHistoryItemProps, "items">> = ({ items }) => (
  <List>
    {items.map((item) => (
      <ListItem key={item}>{item}</ListItem>
    ))}
  </List>
)

const TechnologyList: React.FC<Pick<WorkHistoryItemProps, "technologies">> = ({ technologies }) =>
  technologies?.length ? (
    <List>
      {technologies.map((technology) => (
        <ListItem key={technology.name}>{technology.name}</ListItem>
      ))}
    </List>
  ) : null
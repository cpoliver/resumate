import { Badge, Flex, Heading, Link, List, ListItem, Stack, Text } from "@chakra-ui/react"
import React from "react"

import { formatDuration } from "common/utils"
import { TechnologyIcon } from "components/TechnologyIcon/TechnologyIcon"
import { Resume } from "types"
import { WorkHistoryItem as WorkHistoryItemProps } from "types/workHistory"

const getKey = (workHistoryItem: WorkHistoryItemProps) => `${workHistoryItem.company}${workHistoryItem.role}`

export type WorkHistoryProps = Pick<Resume, "workHistory">

export const WorkHistory: React.FC<WorkHistoryProps> = ({ workHistory }) => (
  <Stack gap={6}>
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
  <Stack borderTopColor="whiteAlpha.200" borderTopWidth="1px" pt={4} spacing={2}>
    <Flex>
      <Heading as="h4" flex={1} size="md">
        {role}
        <Text as="span" fontWeight="normal">
          &nbsp;at&nbsp;
        </Text>
        <Link href={company.url ?? "#"} target="blank">
          {company.name}
        </Link>
      </Heading>
      <Text>{formatDuration(duration)}</Text>
    </Flex>
    <Flex>
      <Badge>{workType}</Badge>
    </Flex>
    <Text>{summary}</Text>
    <ItemList items={items} />
    <TechnologyList technologies={technologies} />
  </Stack>
)

const ItemList: React.FC<Pick<WorkHistoryItemProps, "items">> = ({ items }) => (
  <List as={Stack} spacing={2}>
    {items.map((item) => (
      <ListItem key={item}>• {item}</ListItem>
    ))}
  </List>
)

const TechnologyList: React.FC<Pick<WorkHistoryItemProps, "technologies">> = ({ technologies }) =>
  technologies?.length ? (
    <Flex gap={8}>
      {technologies.map((technology) => (
        <Flex key={technology.name} align="center" gap={2}>
          <TechnologyIcon technology={technology} hideLabel />
          <Text fontSize="sm">{technology.name}</Text>
        </Flex>
      ))}
    </Flex>
  ) : null

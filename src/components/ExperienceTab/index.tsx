import { Badge, Box, Group, Paper, PaperProps, Stack, Text } from "@mantine/core"
import { IconExternalLink } from '@tabler/icons-react'
import React from "react"

import classes from './index.module.scss'

type ExperienceTabProps = PaperProps & React.DOMAttributes<HTMLDivElement> & {
  periodStart: string
  periodEnd: string
  title: string
  subtitle: string
  description: React.ReactNode
  tags: string[]
  url?: string
  fade?: boolean
}

const ExperienceTab: React.FC<ExperienceTabProps> = ({
  periodStart,
  periodEnd,
  title,
  subtitle,
  description,
  tags = [],
  url,
  fade = false,
  ...props
}) => {
  return (
    <Paper
      radius='md'
      className={`
        ${classes.card}
        ${fade ? classes.faded : ''}
        ${url ? 'clickable' : ''}
      `}
      onClick={() => url && window.open(url, '_blank')}
      {...props}
    >
      {url &&
        <Box
          className={classes.link}
          c='white'
          m='xs'
        >
          {/* <IconArrowUpRight size='1rem' /> */}
          <IconExternalLink size='1rem' />
        </Box>
      }

      <Group
        align='flex-start'
        wrap='nowrap'
        gap='xs'
        mr='xl'
      >
        <Text fz='xs' miw={100}>
          {periodStart} – {periodEnd}
        </Text>

        <Stack gap='xs'>
          <Text fw={700} mr='sm' lh='1.2rem'>
            {title}
            <Text span fz='sm' lh='1.2rem'>
              {' • '}
              {subtitle}
            </Text>
          </Text>

          <Text>
            {description}
          </Text>

          <Group gap='xs'>
            {
              tags.map((tag, idx) => (
                <Badge key={idx} variant='light'>{tag}</Badge>
              ))
            }
          </Group>
        </Stack>
      </Group>
    </Paper>
  )
}

export {
  ExperienceTab as default,
  type ExperienceTabProps
}

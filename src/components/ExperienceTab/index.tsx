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
  className,
  ...props
}) => {
  return (
    <Paper
      component='a'
      href={url}
      target='_blank'
      radius='md'
      c='gray'
      className={[
        className ?? '',
        classes.card,
        url ? 'clickable' : '',
      ].join(' ')}
      {...props as any}
    >
      {url &&
        <Box
          className={classes.externalLink}
          c='white'
          m='xs'
        >
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
          <Text className={classes.title} fw={700} mr='sm' lh='1.2rem'>
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

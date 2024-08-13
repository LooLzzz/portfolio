import { Badge, Box, Group, Image, Paper, PaperProps, Stack, Text } from "@mantine/core"
import { IconExternalLink } from '@tabler/icons-react'
import React from "react"

import classes from './index.module.scss'

type ProjectTabProps = PaperProps & React.DOMAttributes<HTMLDivElement> & {
  title: string
  description: React.ReactNode
  thumbnailSrc: string
  tags: string[]
  url?: string
}

const ProjectTab: React.FC<ProjectTabProps> = ({
  title,
  description,
  thumbnailSrc,
  tags = [],
  url,
  className,
  ...props
}) => {
  return (
    <Paper
      radius='md'
      className={[
        className ?? '',
        classes.card,
        url ? 'clickable' : '',
      ].join(' ')}
      onClick={() => url && window.open(url, '_blank')}
      {...props}
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
        gap='md'
        mr='xl'
      >
        <Image
          className={classes.thumbnail}
          radius='md'
          h={70}
          w={100}
          fit='contain'
          src={thumbnailSrc}
        />

        <Stack gap='xs'>
          <Text className={classes.title} fw={700} mr='sm' lh='1.2rem'>
            {title}
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
  ProjectTab as default,
  type ProjectTabProps
}

import { Badge, Box, Group, Image, Paper, PaperProps, Stack, Text } from "@mantine/core"
import { IconExternalLink, IconStarFilled } from '@tabler/icons-react'
import React, { useEffect, useState } from "react"

import { useGithubRepoStars } from '@/hooks'

import classes from './index.module.scss'

type ProjectTabProps = PaperProps & React.DOMAttributes<HTMLDivElement> & {
  title: string
  description: React.ReactNode
  thumbnailSrc: string
  thumbnailFit?: 'contain' | 'cover'
  tags: string[]
  url?: string
}

const ProjectTab: React.FC<ProjectTabProps> = ({
  title,
  description,
  thumbnailSrc,
  thumbnailFit,
  tags = [],
  url,
  className,
  ...props
}) => {
  const [[repoOwner, repoName], setGithubRepo] = useState<[string?, string?]>([undefined, undefined])
  const { data: stargazersCount, isFetched } = useGithubRepoStars(repoOwner, repoName)

  useEffect(() => {
    const urlObj = new URL(url ?? 'http://localhost')
    if (urlObj.hostname.toLowerCase() === 'github.com') {
      // url like 'http://github.com/loolzzz/docking-station'
      const [repoOwner, repoName] = urlObj.pathname.split('/').slice(-2)
      setGithubRepo([repoOwner, repoName])
    } else if (urlObj.hostname.toLowerCase().includes('github.io')) {
      // url like 'http://loolzzz.github.io/better-wordle/'
      const repoName = urlObj.pathname.replace(/(^\/)|(\/$)/g, '')
      const repoOwner = urlObj.hostname.toLowerCase().split('.')[0]
      setGithubRepo([repoOwner, repoName])
    }
  }, [url])

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
        gap='md'
        mr='xl'
      >
        <Image
          className={classes.thumbnail}
          radius='md'
          h={70}
          w={100}
          fit={thumbnailFit ?? 'contain'}
          src={thumbnailSrc}
        />

        <Stack gap='xs'>
          <Text className={classes.title} fw={700} mr='sm' lh='1.2rem'>
            {title}
          </Text>

          <Text>
            {description}
          </Text>

          {
            isFetched &&
            <Text fz='sm' c='white'>
              <IconStarFilled size='0.7rem' /> {stargazersCount}
            </Text>
          }

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

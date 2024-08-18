import { Box, BoxProps, Stack, Text } from "@mantine/core"
import { forwardRef } from "react"

import { ProjectTab, ProjectTabProps } from "@/components"

import classes from './index.module.scss'

const DescriptionText = ({ ...props }) => (
  <Text
    component={Stack}
    gap='0.3rem'
    fz='sm'
    c='hsl(216, 18%, 70%)'
    opacity={0.9}
    {...props}
  />
)

const projectsData: ProjectTabProps[] = [
  {
    title: 'Docking Station',
    thumbnailSrc: './thumbnails/docking-station.png',
    // thumbnailFit: 'cover',
    tags: ['Docker', 'React', 'Nextjs', 'Python', 'FastAPI', 'GitHub Actions', 'DockerHub', 'CI/CD', 'Self-hosted'],
    url: 'https://github.com/loolzzz/docking-station',
    description: (
      <DescriptionText>
        <Box>
          Docking station is a webapp for managing and updating your docker containers. Built using Nextjs and FastAPI.
        </Box>
        <Box>
          This project started as a personal project to manage my docker containers, and I decided to make it open source.
        </Box>
      </DescriptionText>
    ),
  },
  {
    title: 'MagicDex',
    thumbnailSrc: './thumbnails/magicdex-logo.png',
    // thumbnailFit: 'cover',
    tags: ['Magic: The Gathering', 'React', 'Nextjs', 'Python', 'Computer Vision', 'Scryfall API'],
    url: 'https://magicdex.vercel.app/',
    description: (
      <DescriptionText>
        <Box>
        </Box>
      </DescriptionText>
    ),
  },
  {
    title: 'Custom Mechanical Keyboard',
    thumbnailSrc: './thumbnails/qmk.png',
    // thumbnailFit: 'cover',
    tags: ['C', 'QMK', 'DIY', 'Mechanical Keyboard'],
    // url: '',
    description: (
      <DescriptionText>
        <Box>
        </Box>
      </DescriptionText>
    ),
  },
  {
    title: 'Pandoravault',
    thumbnailSrc: './thumbnails/omv.jpg',
    thumbnailFit: 'cover',
    tags: ['Devops', 'Cloudflare', 'OpenMediaVault', 'Docker', 'DIY', 'Self-hosted'],
    // url: '',
    description: (
      <DescriptionText>
        <Box>
        </Box>
      </DescriptionText>
    ),
  },
]

const Projects = forwardRef<HTMLDivElement, BoxProps>(
  function Projects(props, ref) {
    return (
      <Box {...props} id='projects'>
        <Text
          hiddenFrom='md'
          pb='sm'
          pt='md'
          pos='sticky'
          top={0}
          fz='h4'
          fw={700}
          style={{
            webkitBackdropFilter: 'blur(5px)',
            backdropFilter: 'blur(5px)',
            textTransform: 'uppercase',
            zIndex: 1,
          }}>
          Projects
        </Text>

        <Stack
          ref={ref}
          className={classes.container}
        >
          {
            projectsData.map((data, idx) => (
              <ProjectTab
                key={idx}
                className={classes.highlight}
                {...data}
              />
            ))
          }
        </Stack>
      </Box>
    )
  }
)

export default Projects

import { Box, Stack, Text } from '@mantine/core'
import { forwardRef, useState } from 'react'

import { ExperienceTab } from '@/components'
import { ExperienceTabProps } from '@/components/ExperienceTab'

const experiences: ExperienceTabProps[] = [
  {
    periodStart: '2023',
    periodEnd: 'Present',
    title: 'Fullstack Developer',
    subtitle: 'YIT / Yedioth Ahronoth Group',
    tags: ['React', 'Python', 'Redux', 'Node.js', 'TypeScript', 'JavaScript', 'Express', 'Koa', 'AWS', 'Docker'],
    url: 'https://yit.co.il/',
    description: (
      <Text component={Stack} gap='0.3rem' fz='sm' lh='1.3rem'>
        <Box>
          TODO: add description
        </Box>
        <Box>
          Contributed in developing webapp for managing newspapers, including custom PDF viewer & annotator. Using React, Redux, and Node.js for seamless functionality.
        </Box>
        <Box>
          Created a custom pipeline API & Frontend components for automating the creation of video highlights using FFmpeg project. Uses several AWS services including SQS, Lambda, Lambda Layers, API Gateway, RDS.
        </Box>
        <Box>
          Created a custom Dataclass module, taking much inspiration from Pydantic. Including robust validation and serialization, as well as a custom settings model for loading environment variables.
        </Box>
        <Box>
          Maintaining and upgrading legacy Python code to modern Python3.12.
        </Box>
      </Text>
    ),
  },
  {
    periodStart: '2021',
    periodEnd: '2023',
    title: 'Fullstack Developer',
    subtitle: 'Griiip',
    tags: ['Python', 'Multi-processing', 'React', 'Node.js', 'TypeScript', 'JavaScript', 'Embedded (Raspberrypi)', 'Cellular Networking', 'Node.js'],
    url: 'https://www.griiip.com/',
    description: (
      <Text component={Stack} gap='0.3rem' fz='sm' lh='1.3rem'>
        <Box>
          Things I did
        </Box>
        <Box>
          Thing I did
        </Box>
        <Box>
          Thing I did
        </Box>
        <Box>
          Thing I did
        </Box>
        <Box>
          Thing I did
        </Box>
      </Text>
    ),
  },
]

const Experience = forwardRef<HTMLDivElement, React.ComponentProps<'div'>>(
  function Experience(props, ref) {
    const [activeTab, setActiveTab] = useState<number | undefined>(undefined)

    return (
      <Stack id='experience' ref={ref} {...props}>
        {
          experiences.map((data, idx) => (
            <ExperienceTab
              key={idx}
              fade={activeTab !== undefined && activeTab !== idx}
              onMouseEnter={() => setActiveTab(idx)}
              onMouseLeave={() => setActiveTab(undefined)}
              {...data}
            />
          ))
        }
      </Stack>
    )
  }
)

export default Experience

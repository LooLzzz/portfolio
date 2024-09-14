import { Box, BoxProps, Stack, Text } from '@mantine/core'
import { motion } from 'framer-motion'
import { forwardRef } from 'react'

import { ExperienceTab, ExperienceTabProps } from '@/components'
import { popMotionProps } from '@/framer-motion'

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

const experiencesData: ExperienceTabProps[] = [
  {
    periodStart: '2023',
    periodEnd: 'Present',
    title: 'Fullstack Developer',
    subtitle: 'YIT / Yedioth Ahronoth Group',
    tags: ['React', 'Python', 'Redux', 'Nodejs', 'TypeScript', 'JavaScript', 'AWS', 'Docker', 'PostgreSQL', 'MySQL', 'Express', 'Koa'],
    url: 'https://yit.co.il/',
    description: (
      <DescriptionText>
        <Text fs='italic' fz='inherit'>
          Developing and maintaining web applications varying from internal tools to customer-facing products.
        </Text>
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
      </DescriptionText>
    ),
  },
  {
    periodStart: '2021',
    periodEnd: '2023',
    title: 'Fullstack Developer',
    subtitle: 'Griiip',
    tags: ['Python', 'Multi-processing', 'React', 'Node.js', 'TypeScript', 'JavaScript', 'Embedded (Raspberrypi)', 'Cellular Networking', 'Motor Sports'],
    url: 'https://www.griiip.com/',
    description: (
      <DescriptionText>
        <Text fs='italic' fz='inherit'>
          Developed and maintained web applications for monitoring and controlling vehicle data.
        </Text>
        <Box>
          Created a web based dashboard for monitoring over deployed devices around the world as well as controlling device’s configuration using a custom job system, created using React.
        </Box>
        <Box>
          Designed and implemented several services written as Linux systemd services, controlling the data flow from several hardware modules (GPS, IMU, CAN-BUS and Cellular modems).
        </Box>
      </DescriptionText>
    ),
  },
]

const Experience = forwardRef<HTMLDivElement, BoxProps>(
  function Experience(props, ref) {
    return (
      <Box {...props} pos='relative' id='experience'>
        <Text
          hiddenFrom='md'
          pb='sm'
          pt='md'
          pos='sticky'
          top={0}
          fz='h4'
          fw={700}
          style={{
            WebkitBackdropFilter: 'blur(5px)',
            backdropFilter: 'blur(5px)',
            textTransform: 'uppercase',
            zIndex: 1,
          }}>
          Experience
        </Text>

        <Stack
          ref={ref}
          className={classes.container}
        >
          {
            experiencesData.map((data, idx) => (
              <motion.div
                key={idx}
                {...popMotionProps}
              >
                <ExperienceTab
                  className={classes.highlight}
                  {...data}
                />
              </motion.div>
            ))
          }
        </Stack>
      </Box>
    )
  }
)

export default Experience

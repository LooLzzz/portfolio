import { ActionIcon, Box, Button, Center, Group, Space, Stack, Text, Tooltip } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { IconBrandGithub, IconBrandLinkedin, IconBrandSpotify, IconDownload, IconMail } from '@tabler/icons-react'
import { MotionProps, motion } from 'framer-motion'
import { useCallback, useEffect, useRef, useState } from 'react'
import ReactGA from 'react-ga4'

import { fadeMotionProps, heroTitleTransition } from '@/framer-motion'
import { ActiveSectionTypedef } from '@/hooks'

import SectionLink from './SectionLink'

interface HeroProps {
  onMotionEnd?: () => void
}


const Hero = ({
  onMotionEnd
}: HeroProps) => {
  const isMd = useMediaQuery('(max-width: 990px)')
  const isSm = useMediaQuery('(max-width: 465px)')
  const isXs = useMediaQuery('(max-width: 410px)')
  const titleContainerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLAnchorElement>(null)
  const [motionFinished, setMotionFinished] = useState(false)

  const titleMotionProps: MotionProps = {
    initial: {
      position: 'fixed',
      top: 'calc(35lvh - 5rem)',
      left: 'calc(50lvw - 10rem)',
    },
    animate: {
      top: isMd ? 33 : titleContainerRef?.current?.getBoundingClientRect().top,
      left: isMd ? 33 : titleContainerRef?.current?.getBoundingClientRect().left,
      transitionEnd: {
        position: 'unset',
        top: 'unset',
        left: 'unset',
      },
    },
    transition: {
      ...heroTitleTransition,
    },
  }

  const GASocialClickEvent = useCallback((label: string) => {
    ReactGA.event({
      category: 'social',
      action: 'click',
      label,
    })
  }, [])

  useEffect(() => {
    if (motionFinished) {
      onMotionEnd?.()
    }
  }, [motionFinished])

  return (
    <Stack h='100%'>
      <Stack ref={titleContainerRef}>
        {
          titleContainerRef.current &&
          <motion.div
            {...titleMotionProps}
            onAnimationComplete={() => setMotionFinished(true)}
            style={{ width: '22rem' }}
          >
            <Text
              ref={titleRef}
              component='a'
              href='#'
              td='none'
              ff='Montserrat'
              fz={isXs ? '2.75rem' : isSm ? '3.25rem' : '3.75rem'}
              fw={900}
              c='var(--mantine-primary-color-0)'
              lh={isXs ? '2.25rem' : isSm ? '3rem' : '3.5rem'}
              style={{
                textShadow: '0 0 0.8rem rgba(255, 255, 255, 0.3)',
              }}
            >
              Noam Levi
            </Text>
            <Text
              pt='0.4rem'
              ff='Montserrat'
              fz='1.4rem'
              fw={700}
            >
              Fullstack Engineer
            </Text>
          </motion.div>
        }
        <Text
          component={motion.div}
          {...fadeMotionProps as any}
          animate={motionFinished ? 'visible' : 'hidden'}
        >
          Passionate software engineer, tinkerer, gamer, and an all around accomplished geek 😎
        </Text>
      </Stack>

      <motion.div
        {...fadeMotionProps}
        animate={motionFinished ? 'visible' : 'hidden'}
      >
        <Box component={(isMd ? Stack : Group) as any} wrap='nowrap' pt='xl'>
          <Stack>
            {
              (['about', 'experience', 'projects'] as ActiveSectionTypedef[])
                .map((section, idx) => (
                  <Box key={idx} w='10rem'>
                    <SectionLink section={section} />
                  </Box>
                ))
            }
          </Stack>

          <Center flex='1' pt={isMd ? 'xl' : undefined}>
            <Button
              component='a'
              href='https://drive.google.com/file/d/1cY4iZiepFwAUlLaSyZ1vsTD_p_q0IfX0/view?usp=sharing'
              onClick={() => GASocialClickEvent('resume')}
              target='_blank'
              color='blue'
              variant='filled'
              size={isSm ? 'md' : 'lg'}
              p={isSm ? 'xs' : undefined}
            >
              <Group wrap='nowrap' gap={isSm ? 5 : 'xs'}>
                <IconDownload />
                Get my resume
              </Group>
            </Button>
          </Center>
        </Box>
      </motion.div>

      <Space flex={1} />

      <motion.div
        {...fadeMotionProps}
        animate={motionFinished ? 'visible' : 'hidden'}
      >
        <Group mb={isMd ? 150 : 65}>
          <Tooltip withArrow label='Check out my GitHub'>
            <ActionIcon
              size='lg'
              title='GitHub'
              variant='transparent'
              color='white'
              component='a'
              target='_blank'
              href='https://github.com/loolzzz'
              onClick={() => GASocialClickEvent('github')}
            >
              <IconBrandGithub size={50} />
            </ActionIcon>
          </Tooltip>

          <Tooltip withArrow label='Follow me on LinkedIn'>
            <ActionIcon
              size='lg'
              title='LinkedIn'
              variant='transparent'
              color='white'
              component='a'
              target='_blank'
              href='https://linkedin.com/in/loolzzz'
              onClick={() => GASocialClickEvent('linkedin')}
            >
              <IconBrandLinkedin size={50} />
            </ActionIcon>
          </Tooltip>

          <Tooltip withArrow label='Join me on Spotify'>
            <ActionIcon
              size='lg'
              title='Spotify'
              variant='transparent'
              color='white'
              component='a'
              target='_blank'
              href='https://open.spotify.com/user/12148066263'
              onClick={() => GASocialClickEvent('spotify')}
            >
              <IconBrandSpotify size={50} />
            </ActionIcon>
          </Tooltip>

          <Tooltip withArrow label='Contact me'>
            <ActionIcon
              size='lg'
              title='Email'
              variant='transparent'
              color='white'
              component='a'
              target='_blank'
              href='mailto:noaml12@gmail.com'
              onClick={() => GASocialClickEvent('email')}
            >
              <IconMail size={50} />
            </ActionIcon>
          </Tooltip>
        </Group>
      </motion.div>
    </Stack>
  )
}

export {
  Hero as default,
  type HeroProps
}

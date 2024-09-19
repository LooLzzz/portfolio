import { ActionIcon, Box, Button, Center, Group, Space, Stack, Text, Tooltip } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { IconBrandGithub, IconBrandLinkedin, IconBrandSpotify, IconDownload, IconMail } from '@tabler/icons-react'
import { MotionProps, motion } from 'framer-motion'
import { useCallback, useEffect, useRef, useState } from 'react'
import ReactGA from 'react-ga4'

import { fadeMotionProps, heroTitleTransition } from '@/framer-motion'
import { ActiveSectionTypedef } from '@/hooks'

import SectionLink from './SectionLink'
import TitleBox from './TitleBox'

interface HeroProps {
  onMotionEnd?: () => void
}


const Hero = ({
  onMotionEnd
}: HeroProps) => {
  const isMd = useMediaQuery('(max-width: 990px)')
  const isSm = useMediaQuery('(max-width: 465px)')
  const titleRef = useRef<HTMLDivElement>(null)
  const [firstRenderDelay, setFirstRenderDelay] = useState(false)
  const [motionFinished, setMotionFinished] = useState(false)

  const titleMotionProps: Partial<MotionProps> = {
    initial: {
      position: 'fixed',
      top: 'calc(35lvh - 5rem)',
      left: `calc(50lvw - 10rem + 50px)`,
    },
    animate: {
      top: titleRef.current?.getBoundingClientRect().top,
      left: titleRef.current?.getBoundingClientRect().left,
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

  useEffect(() => {
    // hack to allow the title to render before animating
    setTimeout(() => {
      setFirstRenderDelay(true)
    }, 50)
  }, [])

  return (
    <>
      {
        firstRenderDelay && !motionFinished && titleRef.current &&
        <TitleBox
          onAnimationComplete={() => setMotionFinished(true)}
          withExtras={!firstRenderDelay}
          {...titleMotionProps as any}
        />
      }

      <Stack h='100%'>
        <Stack>
          <TitleBox
            ref={titleRef}
            style={{
              visibility: motionFinished ? 'visible' : 'hidden',
            }}
          />
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
    </>
  )
}

export {
  Hero as default,
  type HeroProps
}

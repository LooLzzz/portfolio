import { Box, Container, SimpleGrid, Stack } from '@mantine/core'
import { useIntersection, useMediaQuery, useMouse } from '@mantine/hooks'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

import { Sections } from '@/components'
import { useActiveSection } from '@/hooks'

import { fadeMotionProps } from '@/framer-motion'

function App({
  containerPaddingBase = 100,
}) {
  const isMd = useMediaQuery('(max-width: 990px)')
  const { x: mouseX, y: mouseY } = useMouse()
  const [, setActiveSection] = useActiveSection()
  const [revealWebsite, setRevealWebsite] = useState(false)

  const { ref: aboutRef, entry: aboutEntry } = useIntersection<HTMLDivElement>({ threshold: 0.5 })
  const { ref: experienceRef, entry: experienceEntry } = useIntersection<HTMLDivElement>({ threshold: 0.5 })
  const { ref: projectsRef, entry: projectsEntry } = useIntersection<HTMLDivElement>({ threshold: 0.5 })

  const containerPaddingTop = containerPaddingBase / (isMd ? 3 : 1)
  const containerPaddingLeftRight = containerPaddingBase / (isMd ? 3 : 1)

  useEffect(() => {
    if (aboutEntry?.isIntersecting) setActiveSection('about')
    else if (experienceEntry?.isIntersecting) setActiveSection('experience')
    else if (projectsEntry?.isIntersecting) setActiveSection('projects')
  }, [
    aboutEntry?.isIntersecting,
    experienceEntry?.isIntersecting,
    projectsEntry?.isIntersecting,
  ])

  useEffect(() => {
    const bodyRef = document.querySelector('body')

    bodyRef?.scrollTo({ top: 0, behavior: 'instant' })
    bodyRef?.style.setProperty('overflow', 'hidden')

    setTimeout(() => {
      bodyRef?.style.removeProperty('overflow')
    }, 2000)
  }, [])

  return (
    <Container size='xl' p={[containerPaddingTop, containerPaddingLeftRight, 0, containerPaddingLeftRight].join(' ')}>
      <Box
        className='floatingFlashlight'
        top={mouseY}
        left={mouseX}
      />

      <SimpleGrid cols={{ base: 1, md: 2 }}>
        <Box pos='relative'>
          <Box pos='sticky' top={containerPaddingTop} h={`calc(100lvh - ${containerPaddingTop}px)`}>
            <Sections.Hero
              onMotionEnd={() => setRevealWebsite(true)}
            />
          </Box>
        </Box>

        {
          revealWebsite && (
            <Stack
              component={motion.div}
              {...fadeMotionProps as any}
              gap={100}
            >
              <Sections.About ref={aboutRef} pt={isMd ? containerPaddingTop : undefined} mih='40vh' />
              <Sections.Experience ref={experienceRef} pt={containerPaddingTop} />
              <Sections.Projects ref={projectsRef} pt={containerPaddingTop} />

              <Box p={[containerPaddingTop, 0, containerPaddingTop, 0].join(' ')}>
                <Sections.Footer />
              </Box>
            </Stack>
          )
        }
      </SimpleGrid>
    </Container>
  )
}

export default App

import { Sections } from '@/components'
import { Box, Container, SimpleGrid, Stack } from '@mantine/core'
import { useMouse, useViewportSize, useWindowScroll,useMediaQuery } from '@mantine/hooks'
import { useEffect, useRef } from 'react'

import { useActiveSection } from './hooks'

function App() {
  const isMobile = useMediaQuery('(max-width: 768px)')
  const { height: viewportHeight } = useViewportSize()
  const { x: mouseX, y: mouseY } = useMouse()
  const [{ x: scrollX, y: scrollY },] = useWindowScroll()
  const [, setActiveSection] = useActiveSection()

  const aboutRef = useRef<HTMLDivElement>(null)
  const experienceRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)

  const viewportHeightThreshold = 0.3
  const containerPaddingTop = 100
  const containerPaddingLeftRight = isMobile ? 30 : 100

  useEffect(() => {
    const currentScrollY = scrollY + viewportHeight * viewportHeightThreshold

    const aboutOffset = aboutRef.current?.offsetTop
    const experienceOffset = experienceRef.current?.offsetTop
    const projectsOffset = projectsRef.current?.offsetTop

    if (aboutOffset && experienceOffset && projectsOffset) {
      if (currentScrollY >= aboutOffset && currentScrollY < experienceOffset) {
        setActiveSection('About')
      } else if (currentScrollY >= experienceOffset && currentScrollY < projectsOffset) {
        setActiveSection('Experience')
      } else if (currentScrollY >= projectsOffset) {
        setActiveSection('Projects')
      }
    }
  }, [viewportHeight, scrollX, scrollY])

  return (
    <Container size='xl' p={[containerPaddingTop, containerPaddingLeftRight, 0, containerPaddingLeftRight].join(' ')}>
      <Box
        className='floatingHighlight'
        top={mouseY}
        left={mouseX}
      />

      <SimpleGrid cols={{ base: 1, md: 2 }}>
        <Box pos='relative'>
          <Box pos='sticky' top={containerPaddingTop} h={`calc(100vh - ${containerPaddingTop}px - ${isMobile ? '40px' : '0px'})`}>
            <Sections.Hero />
          </Box>
        </Box>

        <Stack>
          <Sections.About ref={aboutRef} style={{ minHeight: '50vh' }} />
          <Sections.Experience ref={experienceRef} style={{ paddingTop: containerPaddingTop, minHeight: '50vh' }} />
          <Sections.Projects ref={projectsRef} style={{ paddingTop: containerPaddingTop, minHeight: '50vh' }} />
        </Stack>
      </SimpleGrid>
    </Container>
  )
}

export default App

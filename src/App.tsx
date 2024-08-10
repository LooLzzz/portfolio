import { Sections } from '@/components'
import { Box, Container, SimpleGrid, Stack } from '@mantine/core'
import { useMouse, useViewportSize, useWindowScroll } from '@mantine/hooks'
import { useEffect, useRef } from 'react'

import { useActiveSection } from './hooks'

function App() {
  const { height: viewportHeight } = useViewportSize()
  const { x: mouseX, y: mouseY } = useMouse()
  const [{ x: scrollX, y: scrollY },] = useWindowScroll()
  const [, setActiveSection] = useActiveSection()

  const aboutRef = useRef<HTMLDivElement>(null)
  const experienceRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const viewportHeightThreshold = viewportHeight * 0.8
    const currentScrollY = scrollY + viewportHeightThreshold

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
    <Container size='xl' p={'65 65 0 65'}>
      <Box
        className='floatingHighlight'
        top={mouseY}
        left={mouseX}
      />

      <SimpleGrid cols={{ base: 1, md: 2 }}>
        <Box pos='relative'>
          <Box pos='sticky' top={65} h='calc(100vh - 65px)'>
            <Sections.Hero />
          </Box>
        </Box>

        <Stack>
          <Sections.About ref={aboutRef} style={{ minHeight: 1500 }} />
          <Sections.Experience ref={experienceRef} style={{ paddingTop: 65, minHeight: 1500 }} />
          <Sections.Projects ref={projectsRef} style={{ paddingTop: 65, minHeight: 1500 }} />
        </Stack>
      </SimpleGrid>
    </Container>
  )
}

export default App

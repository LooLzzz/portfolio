import { About, Experience, Hero, Projects } from '@/components'
import { Box, Container, Group, Stack } from '@mantine/core'
import { useIntersection } from '@mantine/hooks'
import { useEffect } from 'react'

import { useActiveSection } from './hooks'

function App() {
  const [_, setActiveSection] = useActiveSection()

  const { ref: aboutRef, entry: aboutEntry } = useIntersection({ threshold: 0.9 })
  const { ref: experienceRef, entry: experienceEntry } = useIntersection({ threshold: 0.25 })
  const { ref: projectsRef, entry: projectsEntry } = useIntersection({ threshold: 0.9 })

  useEffect(() => {
    if (aboutEntry?.isIntersecting)
      setActiveSection('About')
    else if (projectsEntry?.isIntersecting)
      setActiveSection('Projects')
    else if (experienceEntry?.isIntersecting)
      setActiveSection('Experience')
  }, [
    aboutEntry?.isIntersecting,
    experienceEntry?.isIntersecting,
    projectsEntry?.isIntersecting,
  ])

  return (
    <Container size='xl' pt={50}>
      <Group grow pos='relative' align='flex-start' gap={50} wrap='nowrap'>
        <Box pos='sticky' top={50}>
          <Hero />
        </Box>

        <Stack>
          <About ref={aboutRef} />
          <Experience ref={experienceRef} />
          <Projects ref={projectsRef} />
        </Stack>
      </Group>
    </Container>
  )
}

export default App

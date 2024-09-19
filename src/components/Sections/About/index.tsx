import { Box, Stack, Text, BoxProps } from '@mantine/core'
import { forwardRef } from 'react'


const About = forwardRef<HTMLDivElement, BoxProps>(
  function About(props, ref) {
    return (
      <Box
        pos='relative'
        {...props}
        id='about'
      >
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
          }}
        >
          About
        </Text>

        <Text
          ref={ref}
          component={Stack}
          gap='0.5rem'
          fz='md'
          lh='1.35rem'
          c='hsl(216, 18%, 70%)'
          opacity='0.9'
        >
          <Box>
            I'm a fullstack engineer with a passion for creating and maintaining web applications, from internal tools to customer-facing products.
          </Box>
          <Box>
            I have experience with a wide range of technologies, from Python and Node.js to React and Next.js, and I'm always looking to learn more.
          </Box>

          {/* <Box>
          some text as a beginning {' '}
          <a target="_blank" href='http://github.com/loolzzz'>an inline link</a>
          {' '} and then some more text
        </Box> */}
        </Text>
      </Box>
    )
  })

export default About

import { Box, Stack, Text, TextProps } from '@mantine/core'
import { forwardRef } from 'react'

type AboutProps = React.DOMAttributes<HTMLDivElement> & TextProps

const About = forwardRef<HTMLDivElement, AboutProps>(
  function About(props, ref) {
    return (
      <Text
        id='about'
        ref={ref}
        component={Stack}
        gap='0.5rem'
        fz='md'
        lh='1.35rem'
        c='hsl(216, 18%, 70%)'
        opacity='0.9'
        {...props}
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
    )
  })

export {
  About as default,
  type AboutProps
}

import { Text } from "@mantine/core"
import { forwardRef } from "react"

const About = forwardRef<HTMLDivElement, React.ComponentProps<'div'>>(
  function About(props, ref) {
    return (
      <div id='about' ref={ref} {...props}>
        <Text>
          Passionate software engineer, enjoys tinkering and to be surrounded by talented people I can learn
          from. Quick and self-learner, independent and work well in a team
        </Text>

        <Text span inline>
          some text as a beginning {' '}
        </Text>
        <Text span target="_blank" href='http://github.com/loolzzz' component='a'>an inline link</Text>
        <Text span inline>
          {' '} and then some more text
        </Text>
      </div>
    )
  })

export default About

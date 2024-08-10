import { Text } from "@mantine/core"
import { forwardRef, Ref } from "react"

const About = forwardRef(function About(props, ref: Ref<HTMLDivElement> | null) {
  return (
    <div id='about' ref={ref} {...props}>
      <Text h={800} >
        Passionate software engineer, enjoys tinkering and to be surrounded by talented people I can learn
        from. Quick and self-learner, independent and work well in a team
      </Text>
    </div>
  )
})

export default About

import { Text } from "@mantine/core"
import { forwardRef, Ref } from "react"

const Experience = forwardRef(function Experience(props, ref: Ref<HTMLDivElement> | null) {
  return (
    <div id='experience' ref={ref} {...props}>
      <Text h={800}>
        Experience
      </Text>
    </div>
  )
})

export default Experience

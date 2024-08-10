import { Text } from "@mantine/core"
import { forwardRef, Ref } from "react"

const Projects = forwardRef(function Projects(props, ref: Ref<HTMLDivElement> | null) {
  return (
    <div id='projects' ref={ref} {...props}>
      <Text h={800}>
        Projects
      </Text>
    </div>
  )
})

export default Projects

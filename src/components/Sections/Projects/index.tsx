import { Text } from "@mantine/core"
import { forwardRef } from "react"

const Projects = forwardRef<HTMLDivElement, React.ComponentProps<'div'>>(
  function Projects(props, ref) {
    return (
      <div id='projects' ref={ref} {...props}>
        <Text h={800}>
          Projects
        </Text>
      </div>
    )
  }
)

export default Projects

import { Button } from "@mantine/core"
import { forwardRef } from "react"

const Experience = forwardRef<HTMLDivElement, React.ComponentProps<'div'>>(
  function Experience(props, ref) {
    return (
      <div id='experience' ref={ref} {...props}>
        <Button>
          Experience
        </Button>
      </div>
    )
  }
)

export default Experience

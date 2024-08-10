import { Box, Group, Text, type TextProps } from '@mantine/core'

import { useActiveSection, type ActiveSectionTypedef } from '@/hooks'

import classes from './SectionLink.module.scss'
import { useState } from 'react'

interface SectionLinkProps extends TextProps {
  section: ActiveSectionTypedef
}

const SectionLink = ({
  section, ...props
}: SectionLinkProps) => {
  const [activeSection, _] = useActiveSection()
  const [isHovered, setIsHovered] = useState(false)
  const isActive = activeSection === section
  const activeClassName = isActive || isHovered ? classes.active : ''

  return (
    <Box w='fit-content'>
      <Text
        component='a'
        href={section === 'About' ? '#' : `#${section.toLowerCase()}`}
        className={`${classes.sectionLink} ${activeClassName}`}
        fw={600}
        fz='xs'
        {...props}
      >
        <Group
          wrap='nowrap'
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Box className={`${classes.navIndicator} ${activeClassName}`} />
          {section}
        </Group>
      </Text>
    </Box>
  )
}

export {
  SectionLink as default,
  type SectionLinkProps
}

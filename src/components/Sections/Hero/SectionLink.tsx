import { Box, Group, Text, type TextProps } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

import { useActiveSection, type ActiveSectionTypedef } from '@/hooks'

import classes from './SectionLink.module.scss'

interface SectionLinkProps extends TextProps {
  section: ActiveSectionTypedef
}

const SectionLink = ({
  section,
  ...props
}: SectionLinkProps) => {
  const isMd = useMediaQuery('(max-width: 990px)')
  const [activeSection, _setActiveSection] = useActiveSection()
  const isActive = activeSection === section
  const activeClassName = isActive ? classes.active : ''

  return (
    <Box w='fit-content'>
      <Text
        component='a'
        href={section === 'about' && !isMd ? '#' : `#${section.toLowerCase()}`}
        className={`${classes.sectionLink} ${activeClassName}`}
        fw={700}
        fz='xs'
        {...props}
      >
        <Group wrap='nowrap'>
          <Box className={classes.navIndicator} />
          {section.charAt(0).toUpperCase() + section.slice(1)}
        </Group>
      </Text>
    </Box>
  )
}

export {
  SectionLink as default,
  type SectionLinkProps
}

import { Box, Group, Text, type TextProps } from '@mantine/core'

import { useActiveSection, type ActiveSectionTypedef } from '@/hooks'

import classes from './SectionLink.module.scss'

interface SectionLinkProps extends TextProps {
  section: ActiveSectionTypedef
}

const SectionLink = ({
  section,
  ...props
}: SectionLinkProps) => {
  const [activeSection,] = useActiveSection()
  const isActive = activeSection === section
  const activeClassName = isActive ? classes.active : ''

  return (
    <Box w='fit-content'>
      <Text
        component='a'
        href={section === 'about' ? '#' : `#${section.toLowerCase()}`}
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

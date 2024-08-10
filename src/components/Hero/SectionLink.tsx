import { Text, type TextProps } from '@mantine/core'

import { useActiveSection, type ActiveSectionTypedef } from '@/hooks'

interface SectionLinkProps extends TextProps {
  section: ActiveSectionTypedef
}

const SectionLink = ({
  section, ...props
}: SectionLinkProps) => {
  const [activeSection, _] = useActiveSection()

  return (
    <Text
      component='a'
      href={section === 'About' ? '#' : `#${section.toLowerCase()}`}
      fw={activeSection === section ? 'bold' : 'normal'}
      {...props}
    >
      {activeSection === section ? '----' : '--'} {section}
    </Text>
  )
}

export {
  SectionLink as default,
  type SectionLinkProps
}

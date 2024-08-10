import { createContext, useContext, useState } from 'react'

type ActiveSectionTypedef = 'About' | 'Experience' | 'Projects'
type SetActiveSectionTypedef = React.Dispatch<React.SetStateAction<ActiveSectionTypedef>>
type ActiveSectionContextTypedef = [
  ActiveSectionTypedef,
  SetActiveSectionTypedef
]
type ActiveSectionProviderProps = {
  children: React.ReactNode
  defaultValue?: ActiveSectionTypedef
}

const ActiveSectionContext = createContext<ActiveSectionContextTypedef>([
  'About',
  () => { }
])
const useActiveSection = () => {
  const context = useContext(ActiveSectionContext)
  if (!context) {
    throw new Error('useSectionContext must be used within a ActiveSectionProvider')
  }
  return context
}

const ActiveSectionProvider = ({ children, defaultValue = 'About' }: ActiveSectionProviderProps) => {
  const [activeSection, setActiveSection] = useState<ActiveSectionTypedef>(defaultValue)

  return (
    <ActiveSectionContext.Provider
      value={[
        activeSection,
        setActiveSection
      ]}
    >
      {children}
    </ActiveSectionContext.Provider>
  )
}

export {
  ActiveSectionProvider,
  useActiveSection,
  type ActiveSectionContextTypedef as ActiveSectionContextProps,
  type ActiveSectionProviderProps,
  type ActiveSectionTypedef,
  type SetActiveSectionTypedef
}

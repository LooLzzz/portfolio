import { createContext, useContext, useState } from 'react'

type ActiveSectionTypedef = 'about' | 'experience' | 'projects'
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
  'about',
  () => { }
])
const useActiveSection = () => {
  const context = useContext(ActiveSectionContext)
  if (!context) {
    throw new Error('useSectionContext must be used within a ActiveSectionProvider')
  }
  return context
}

const ActiveSectionProvider = ({ children, defaultValue = 'about' }: ActiveSectionProviderProps) => {
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
  useActiveSection as default,
  type ActiveSectionContextTypedef as ActiveSectionContextProps,
  type ActiveSectionProviderProps,
  type ActiveSectionTypedef,
  type SetActiveSectionTypedef
}

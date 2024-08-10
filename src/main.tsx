import { MantineProvider, createTheme } from '@mantine/core'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { ActiveSectionProvider } from '@/hooks'
import App from './App.tsx'

import '@mantine/core/styles.css'
import './index.css'

const theme = createTheme({
  // primaryColor: 'red'
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider theme={theme} defaultColorScheme='dark'>
      <ActiveSectionProvider>
        <App />
      </ActiveSectionProvider>
    </MantineProvider>
  </StrictMode>,
)

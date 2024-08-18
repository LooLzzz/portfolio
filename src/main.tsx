import { CSSVariablesResolver, MantineProvider, Text, createTheme } from '@mantine/core'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { ActiveSectionProvider } from '@/hooks'
import App from './App.tsx'

import '@mantine/core/styles.css'
import './index.scss'

const resolver: CSSVariablesResolver = (theme) => ({
  variables: {
    '--mantine-background-color': theme.colors[theme.other.backgroundColor][9],
    // '--mantine-secondary-color': theme.colors[theme.other.secondaryColor][6],
    // '--mantine-secondary-color-hover': theme.colors[theme.other.secondaryColor][7],
  },
  light: {},
  dark: {},
})

const theme = createTheme({
  // primaryColor: 'blue',
  primaryColor: 'cyan',
  // primaryColor: 'grape',
  // primaryColor: 'green',
  // primaryColor: 'indigo',
  // primaryColor: 'lime',
  // primaryColor: 'orange',
  // primaryColor: 'pink',
  // primaryColor: 'red',
  // primaryColor: 'teal',
  // primaryColor: 'violet',
  // primaryColor: 'yellow',

  other: {
    // secondaryColor: 'orange',
    backgroundColor: 'pale-blue',
    // backgroundColor: 'pale-violet',
  },

  colors: {
    'pale-blue': [
      "#ecf0f8", "#c7d1eb", "#a1b3dd", "#7b95d0", "#5676c3", "#3c5da9", "#2f4884", "#22335e", "#141f38", "#0f172a"
    ],
    'pale-violet': [
      "#e4e5ea", "#cacbd5", "#b1b1c0", "#9899ab", "#808197", "#696983", "#535370", "#3e3d5d", "#2a284a", "#100d27"
    ]
  },

  // fontFamily: 'Futura Std, sans-serif',
  fontFamily: 'Open Sans Variable, sans-serif',

  components: {
    Text: Text.extend({
      defaultProps: {
        fz: 'md'
      },
    }),
  },
})

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <MantineProvider
        theme={theme}
        cssVariablesResolver={resolver}
        defaultColorScheme='dark'
      >
        <ActiveSectionProvider>
          <App />
        </ActiveSectionProvider>
      </MantineProvider>
    </QueryClientProvider>
  </StrictMode>,
)

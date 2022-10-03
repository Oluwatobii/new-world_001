import './App.css'
import Header from '../src/components/Header'
import { MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core'
import { useLocalStorage } from '@mantine/hooks'

function App() {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true
  })
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
        <Header />
      </MantineProvider>
    </ColorSchemeProvider>
  )
}

export default App

import './App.css'
import Header from '../src/components/Header'
import Introduction from './components/Introduction'
import Stats from './components/Stats'
import Competencies from './components/Competencies'
import AboutMe from './components/AboutMe'
import Portfolio from './components/Portfolio'
import Resume from './components/Resume'
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
      <MantineProvider
        theme={{
          colorScheme,
          colors: {
            brand: ['#39f758', '#2CA941'],
            white: ['#fff']
          }
        }}
        withGlobalStyles
        withNormalizeCSS
      >
        <Header />
        <Introduction />
        <Stats />
        <Competencies />
        <AboutMe />
        <Portfolio />
        <Resume />
      </MantineProvider>
    </ColorSchemeProvider>
  )
}

export default App

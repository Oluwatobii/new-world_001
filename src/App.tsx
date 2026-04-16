import './App.css'
import Header from '@/components/Header'
import Introduction from './components/Introduction'
import Stats from './components/Stats'
import Competencies from './components/Competencies'
import AboutMe from './components/AboutMe'
import Portfolio from './components/Portfolio'
import Resume from './components/Resume'
import GetInTouch from './components/GetInTouch'
import Footer from './components/Footer'
import MotionReveal from '@/components/Global/MotionReveal'
import ScrollProgress from '@/components/Global/ScrollProgress'
import { ActiveSectionProvider } from '@/contexts/ActiveSectionContext'
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
        <ActiveSectionProvider>
          <ScrollProgress />
          <Header />
          <MotionReveal id="home">
            <Introduction />
          </MotionReveal>
          <MotionReveal id="stats">
            <Stats />
          </MotionReveal>
          <MotionReveal id="competencies">
            <Competencies />
          </MotionReveal>
          <MotionReveal id="about">
            <AboutMe />
          </MotionReveal>
          <MotionReveal id="portfolio">
            <Portfolio />
          </MotionReveal>
          <MotionReveal id="resume">
            <Resume />
          </MotionReveal>
          <MotionReveal id="contact">
            <GetInTouch />
          </MotionReveal>
          <Footer />
        </ActiveSectionProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  )
}

export default App

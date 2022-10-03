import { Box } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import Navigation from './components/Navigation'
import MobileNavigation from './components/MobileNavigation'

export default function Header() {
  const isTabletSize = useMediaQuery('(max-width: 62em)')

  return (
    <Box
      sx={theme => ({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        top: 0,
        zIndex: 2,
        position: 'sticky'
      })}
    >
      {isTabletSize ? <MobileNavigation /> : <Navigation />}
    </Box>
  )
}

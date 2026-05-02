import { Box } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import LeftSection from './components/LeftSection'
import RightSection from './components/RightSection'

export default function index() {
  const isMobile = useMediaQuery('(max-width: 48em)')

  return (
    <Box
      sx={theme => ({
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'stretch',
        width: '100%',
        [theme.fn.smallerThan('sm')]: {
          flexDirection: 'column'
        }
      })}
    >
      {!isMobile ? (
        <Box
          sx={{
            flex: '1 1 50%',
            minWidth: 0,
            maxWidth: '50%'
          }}
        >
          <LeftSection />
        </Box>
      ) : null}
      <Box
        sx={theme => ({
          flex: '1 1 50%',
          minWidth: 0,
          width: '100%',
          maxWidth: '50%',
          [theme.fn.smallerThan('sm')]: {
            flex: '1 1 100%',
            maxWidth: '100%'
          }
        })}
      >
        <RightSection />
      </Box>
    </Box>
  )
}

import { Box } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import LeftSection from './components/LeftSection'
import RightSection from './components/RightSection'

export default function index() {
  const isTabletSize = useMediaQuery('(max-width: 62em)')

  return (
    <Box
      id="contact"
      sx={theme => ({
        display: 'flex',
        justifyContent: 'space-around',
        [theme.fn.smallerThan('md')]: {
          justifyContent: 'center'
        }
      })}
    >
      <div>{!isTabletSize ? <LeftSection /> : null}</div>
      <div>
        <RightSection />
      </div>
    </Box>
  )
}

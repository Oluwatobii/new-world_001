import { Box } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import LeftSection from './components/LeftSection'
import RightSection from './components/RightSection'

export default function index() {
  const isTabletSize = useMediaQuery('(max-width: 62em)')

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-around'
      }}
    >
      <div>
        <LeftSection />
      </div>
      <div>{!isTabletSize ? <RightSection /> : null}</div>
    </Box>
  )
}

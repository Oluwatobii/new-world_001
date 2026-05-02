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
      <Box
        sx={{
          flex: '0 1 auto',
          width: '100%',
          maxWidth: '38rem'
        }}
      >
        <LeftSection />
      </Box>
      <div>{!isTabletSize ? <RightSection /> : null}</div>
    </Box>
  )
}

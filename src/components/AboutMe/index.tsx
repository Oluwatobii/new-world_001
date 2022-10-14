import { SimpleGrid, Box } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import LeftSection from './components/LeftSection'
import RightSection from './components/RightSection'

export default function index() {
  const isTabletSize = useMediaQuery('(max-width: 62em)')

  return (
    <SimpleGrid
      id="about"
      cols={2}
      spacing="lg"
      breakpoints={[
        { maxWidth: 'md', cols: 1, spacing: 'md' },
        { maxWidth: 'sm', cols: 1, spacing: 'sm' },
        { maxWidth: 'xs', cols: 1, spacing: 'sm' }
      ]}
      sx={theme => ({
        [theme.fn.smallerThan('xs')]: {
          marginTop: '45rem'
        }
      })}
    >
      <Box
        sx={() => ({
          display: 'flex',
          justifyContent: 'flex-end',
          width: '95%',
          marginTop: '20px'
        })}
      >
        {!isTabletSize ? <LeftSection /> : null}
      </Box>
      <Box
        sx={() => ({
          display: 'flex',
          justifyContent: 'flex-start',
          width: '95%',
          marginTop: '20px'
        })}
      >
        <RightSection />
      </Box>
    </SimpleGrid>
  )
}

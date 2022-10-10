import { SimpleGrid } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import LeftSection from './components/LeftSection'
import RightSection from './components/RightSection'

export default function index() {
  const isTabletSize = useMediaQuery('(max-width: 62em)')

  return (
    <SimpleGrid
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
      {!isTabletSize ? <LeftSection /> : null}
      <RightSection />
    </SimpleGrid>
  )
}
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
        [theme.fn.smallerThan('md')]: {
          marginTop: '-10rem'
        },
        [theme.fn.smallerThan('sm')]: {
          marginTop: '10rem'
        },
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
        sx={theme => ({
          display: 'flex',
          justifyContent: 'flex-start',
          maxWidth: '38rem',
          marginTop: '20px',
          [theme.fn.smallerThan('md')]: {
            maxWidth: '70rem'
          },
          [theme.fn.smallerThan('sm')]: {
            marginTop: '-210px',
            maxWidth: '40rem'
          },
          [theme.fn.smallerThan('xs')]: {
            marginTop: '-150px',
            maxWidth: '40rem'
          }
        })}
      >
        <RightSection />
      </Box>
    </SimpleGrid>
  )
}

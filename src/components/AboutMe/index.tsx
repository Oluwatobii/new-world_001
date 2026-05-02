import { SimpleGrid, Box } from '@mantine/core'
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
        [theme.fn.smallerThan('md')]: {
          marginTop: theme.spacing.sm
        },
        [theme.fn.smallerThan('sm')]: {
          marginTop: theme.spacing.sm
        },
        [theme.fn.smallerThan('xs')]: {
          marginTop: theme.spacing.xs
        }
      })}
    >
      {!isTabletSize ? (
        <Box
          sx={() => ({
            display: 'flex',
            justifyContent: 'flex-end',
            width: '95%',
            marginTop: '20px'
          })}
        >
          <LeftSection />
        </Box>
      ) : null}
      <Box
        sx={theme => ({
          display: 'flex',
          justifyContent: 'flex-start',
          maxWidth: '38rem',
          marginTop: '20px',
          [theme.fn.smallerThan('md')]: {
            maxWidth: '100%'
          },
          [theme.fn.smallerThan('sm')]: {
            marginTop: theme.spacing.sm,
            maxWidth: '100%'
          },
          [theme.fn.smallerThan('xs')]: {
            marginTop: theme.spacing.sm,
            maxWidth: '100%'
          }
        })}
      >
        <RightSection />
      </Box>
    </SimpleGrid>
  )
}

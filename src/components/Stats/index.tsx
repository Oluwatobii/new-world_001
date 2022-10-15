import { createStyles, SimpleGrid, Box } from '@mantine/core'
import StatGraph from './components/StatGraph'
import stats from './stats.json'
import { useId } from 'react'

const useStyles = createStyles(theme => ({
  main: {
    marginTop: '20px',
    gridGap: '2rem',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center'
  }
}))

export default function index() {
  const { classes } = useStyles()
  const id = useId()

  return (
    <SimpleGrid
      id="stats"
      cols={3}
      spacing="lg"
      className={classes.main}
      breakpoints={[
        { maxWidth: 'md', cols: 2, spacing: 'md' },
        { maxWidth: 'sm', cols: 1, spacing: 'sm' },
        { maxWidth: 'xs', cols: 1, spacing: 'sm' }
      ]}
      sx={theme => ({
        [theme.fn.smallerThan('sm')]: {
          marginTop: '0rem'
        },
        [theme.fn.smallerThan('xs')]: {
          marginTop: '2rem'
        }
      })}
    >
      {stats.map(stat => (
        <div className={classes.container} key={`${id}-${stat.subject}`}>
          <StatGraph subject={stat.subject} stat={stat.stat} />
        </div>
      ))}
    </SimpleGrid>
  )
}

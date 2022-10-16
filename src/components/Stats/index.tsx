import { createStyles, Box } from '@mantine/core'
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
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly'
      }}
    >
      {stats.map(stat => (
        <div className={classes.container} key={`${id}-${stat.subject}`}>
          <StatGraph subject={stat.subject} stat={stat.stat} />
        </div>
      ))}
    </Box>
  )
}

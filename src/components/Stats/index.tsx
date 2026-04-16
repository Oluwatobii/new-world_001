import { createStyles, Box } from '@mantine/core'
import StatGraph from './components/StatGraph'
import { statData } from './stats'
import { useEffect, useState } from 'react'
import { getPortfolioData, PortfolioStat } from '@/lib/portfolio'

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
  const [data, setData] = useState<PortfolioStat[]>([])

  const getData = async () => {
    try {
      const payload = await getPortfolioData()
      setData(payload.stats ?? [])
    } catch (error) {
      setData(statData.data)
    }
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <Box
      id="stats"
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly'
      }}
    >
      {data.map((stat: PortfolioStat) => (
        <div className={classes.container} key={stat.id}>
          <StatGraph subject={stat.subject} stat={stat.stat} />
        </div>
      ))}
    </Box>
  )
}

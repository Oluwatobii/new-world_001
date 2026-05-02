import { createStyles, Box } from '@mantine/core'
import StatGraph from './components/StatGraph'
import { statData } from './stats'
import { useEffect, useState } from 'react'
import { getPortfolioData, PortfolioStat } from '@/lib/portfolio'

const useStyles = createStyles(theme => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    [theme.fn.smallerThan('sm')]: {
      width: '100%'
    }
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
      sx={theme => ({
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        gap: theme.spacing.xl,
        [theme.fn.smallerThan('sm')]: {
          flexDirection: 'column',
          flexWrap: 'nowrap',
          alignItems: 'stretch',
          gap: theme.spacing.xl * 2,
          paddingTop: theme.spacing.md,
          paddingLeft: theme.spacing.md,
          paddingRight: theme.spacing.md
        },
        [theme.fn.smallerThan('xs')]: {
          gap: theme.spacing.xl * 2.5
        }
      })}
    >
      {data.map((stat: PortfolioStat) => (
        <div className={classes.container} key={stat.id}>
          <StatGraph subject={stat.subject} stat={stat.stat} />
        </div>
      ))}
    </Box>
  )
}

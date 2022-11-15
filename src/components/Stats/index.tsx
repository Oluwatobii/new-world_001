import { createStyles, Box } from '@mantine/core'
import StatGraph from './components/StatGraph'
import { statData } from './stats'
import { useEffect, useState } from 'react'
import axios, { AxiosResponse } from 'axios'

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

interface Props {
  id: string
  subject: string
  stat: string
  active: boolean
}

export default function index() {
  const { classes } = useStyles()
  const [data, setData] = useState<Props[]>([])

  const getData = async () => {
    try {
      const response: AxiosResponse = await axios.get(
        `${import.meta.env.VITE_HOUSTON}/api/hub/portfolio/${import.meta.env.VITE_APP_ID}`,
        {
          withCredentials: true
        }
      )
      const data: Props[] = response?.data?.data?.stats
      const activeData = data.filter(({ active }: { active: boolean }) => active)
      setData(activeData)
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
      {data.map((stat: Props) => (
        <div className={classes.container} key={stat.id}>
          <StatGraph subject={stat.subject} stat={stat.stat} />
        </div>
      ))}
    </Box>
  )
}

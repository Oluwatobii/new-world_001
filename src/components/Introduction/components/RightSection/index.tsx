import { createStyles, Center } from '@mantine/core'
import RobotAnimation from '../../../../assets/animation/RobotAnimation'

const useStyles = createStyles(theme => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    marginLeft: '-100px',
    marginTop: '5rem',
    textAlign: 'center',
    width: '800px',
    height: '400px'
  }
}))

export default function RightSection() {
  const { classes } = useStyles()

  return (
    <Center
      className={classes.container}
      sx={theme => ({
        [theme.fn.smallerThan('md')]: {
          height: '0vh'
        },
        [theme.fn.smallerThan('sm')]: {
          height: '45vh',
          width: '100vw'
        }
      })}
    >
      <RobotAnimation />
    </Center>
  )
}

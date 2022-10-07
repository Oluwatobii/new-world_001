import { createStyles, Center } from '@mantine/core'
import Triangle from '../../../Global/Triangle'
import Curve from '../../../Global/Curve'

const useStyles = createStyles(theme => ({
  container: {
    display: 'flex',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
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
        [theme.fn.smallerThan('lg')]: {
          width: '600px'
        },
        [theme.fn.smallerThan('sm')]: {
          width: '350px',
          height: '300px'
        }
      })}
    >
      <div>Insert Animation here with Lottie or three.js</div>
    </Center>
  )
}

import { createStyles, Center } from '@mantine/core'

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
        [theme.fn.smallerThan('md')]: {
          height: '0vh'
        },
        [theme.fn.smallerThan('sm')]: {
          height: '45vh',
          width: '100vw'
        }
      })}
    >
      <div>Insert Animation here with Lottie or three.js</div>
    </Center>
  )
}

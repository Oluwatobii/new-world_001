import { createStyles, Box, Image } from '@mantine/core'
import AboutMe from '../../../../assets/svgs/AboutMe'
/* import AboutMeImage from '../../../../assets/images/about-me.png' */

const useStyles = createStyles(theme => ({
  container: {
    display: 'flex',
    justifyContent: 'flex-end',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    marginTop: '5rem'
  }
}))

export default function LeftSection() {
  const { classes } = useStyles()

  return (
    <Box
      className={classes.container}
      sx={theme => ({
        marginTop: '60px',
        width: '55%',
        [theme.fn.smallerThan('lg')]: {
          marginTop: '55px',
          height: '0vh'
        },
        [theme.fn.smallerThan('md')]: {
          height: '0vh'
        },
        [theme.fn.smallerThan('sm')]: {
          height: '80vh',
          width: '100vw'
        }
      })}
    >
      <AboutMe />
      {/* <Image src={AboutMeImage} alt="portrait" /> */}
    </Box>
  )
}

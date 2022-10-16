import { createStyles, Stack, Image, useMantineColorScheme } from '@mantine/core'
import AboutMe from '../../../../assets/svgs/AboutMe'

/*
import AboutMeImageDark from '../../../../assets/images/about-me-dark.png'
import AboutMeImageLight from '../../../../assets/images/about-me-light.png'
*/

const useStyles = createStyles(theme => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    spacing: 'lg'
  }
}))

export default function LeftSection() {
  const { classes } = useStyles()
  /*
  const { colorScheme } = useMantineColorScheme()
  */

  return (
    <Stack
      className={classes.container}
      sx={theme => ({
        marginTop: '60px',
        [theme.fn.smallerThan('lg')]: {
          marginTop: '55px'
        },
        [theme.fn.smallerThan('md')]: {
          height: '0vh'
        },
        [theme.fn.smallerThan('sm')]: {
          height: '80vh'
        }
      })}
    >
      <AboutMe />
      {/* {colorScheme === 'dark' ? (
        <Image src={AboutMeImageDark} width="270px" height="350px" alt="portrait" />
      ) : (
        <Image src={AboutMeImageLight} width="270px" height="350px" alt="portrait" />
      )} */}
    </Stack>
  )
}

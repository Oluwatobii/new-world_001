import { BackgroundImage, createStyles, Box, Container, Title, useMantineColorScheme } from '@mantine/core'
import CustomButton from '../Global/Button'
import resumePath from '../../assets/images/resume-backgnd.png'
import axios, { AxiosResponse } from 'axios'

const useStyles = createStyles(theme => ({
  wrapper: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: '20px',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2
  },
  image: {
    marginTop: '3rem',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,
    '::before': {
      content: '""',
      position: 'absolute',
      left: '1rem',
      top: '5.85rem',
      background: theme.colorScheme === 'dark' ? theme.colors.brand[0] : theme.colors.brand[1],
      width: '98.1%',
      height: '76.3%',
      opacity: 0.59,

      [theme.fn.smallerThan('lg')]: {
        width: '97.3%',
        height: '76%'
      },
      [theme.fn.smallerThan('md')]: {
        width: '96%',
        height: '76%'
      },
      [theme.fn.smallerThan('xs')]: {
        width: '91.3%',
        height: '77.7%'
      }
    }
  }
}))

export default function index() {
  const { classes } = useStyles()
  const { colorScheme } = useMantineColorScheme()
  const buttonTextColor = colorScheme === 'dark' ? 'dark' : 'white.0'

  const handleDownload = async () => {
    await axios
      .get(`${import.meta.env.VITE_HOUSTON}/api/hub/resume`, { withCredentials: true, responseType: 'blob' })
      .then((res: AxiosResponse) => {
        const url = window.URL.createObjectURL(res.data)
        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', 'Oluwatobi A. Bello.pdf')
        document.body.appendChild(link)
        link.click()
      })
      .catch((error: Error) => {
        console.log(error)
      })
  }

  return (
    <Box className={classes.wrapper} id="resume">
      <BackgroundImage src={resumePath} radius="xs" className={classes.image}>
        <Container
          size="sm"
          sx={theme => ({
            marginTop: '3rem',
            paddingLeft: theme.spacing.md,
            paddingRight: theme.spacing.md,
            paddingTop: theme.spacing.xl * 2,
            paddingBottom: theme.spacing.xl * 2
          })}
        >
          <Title
            align="center"
            sx={() => ({
              marginTop: '3rem',
              color: 'black',
              fontWeight: 700
            })}
          >
            DOWNLOAD MY RESUME!
          </Title>

          <Box
            sx={theme => ({
              marginTop: '4.5rem',
              marginLeft: '17rem',
              cursor: 'pointer',
              [theme.fn.smallerThan('xs')]: {
                marginLeft: '5rem'
              }
            })}
          >
            <CustomButton
              text="Download"
              textColor={buttonTextColor}
              options={{
                onClick: handleDownload
              }}
            />
          </Box>
        </Container>
      </BackgroundImage>
    </Box>
  )
}

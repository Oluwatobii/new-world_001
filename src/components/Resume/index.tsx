import { BackgroundImage, Text, createStyles, Box, Container, Title, useMantineColorScheme } from '@mantine/core'
import CustomButton from '../Global/Button'
import resumePath from '../../assets/images/resume-backgnd.png'

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
      width: '98.3%',
      height: '80.5%',
      opacity: 0.59,
      [theme.fn.smallerThan('xs')]: {
        width: '91.3%',
        height: '83.5%'
      }
    }
  }
}))

export default function index() {
  const { classes } = useStyles()
  const { colorScheme } = useMantineColorScheme()
  const buttonTextColor = colorScheme === 'dark' ? 'dark' : 'white.0'

  return (
    <Box className={classes.wrapper}>
      <BackgroundImage src={resumePath} radius="xs" className={classes.image}>
        <Container
          size="sm"
          sx={theme => ({
            marginTop: '3rem',
            zIndex: 100,
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
              color: 'black'
            })}
          >
            DOWNLOAD MY RESUME
          </Title>

          <Text
            sx={() => ({
              marginTop: '3rem',
              color: 'black',
              textSize: 600
            })}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, id voluptas quas veritatis enim modi
            eveniet recusandae fugiat accusamus quaerat quasi labore deleniti doloribus voluptates molestias aperiam.
            Enim, nemo libero.
          </Text>

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
                onClick: () => window.open('https://awss3resume.s3.ca-central-1.amazonaws.com/Resume.pdf', '_blank')
              }}
            />
          </Box>
        </Container>
      </BackgroundImage>
    </Box>
  )
}

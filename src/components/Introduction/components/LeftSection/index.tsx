import { createStyles, keyframes, Stack, Title, Text, Box, Group, useMantineColorScheme } from '@mantine/core'
import CustomButton from '../../../Global/Button'

const useStyles = createStyles(theme => ({
  text: {
    display: 'flex',
    alignItems: 'flex-start',
    marginTop: '20px',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textAlign: 'initial'
  },
  bannerText: {
    color: theme.colorScheme === 'dark' ? theme.colors.brand[0] : theme.colors.brand[1],
    position: 'relative',
    transform: 'translate(-50%, -50%)',
    left: '25%',
    marginTop: '25px',
    width: '100%'
  },
  name: {
    display: 'flex',
    alignItems: 'flex-start',
    color: theme.colorScheme === 'dark' ? theme.colors.white[0] : theme.colors.dark,
    marginTop: '30px',
    margin: 0,
    marginLeft: '24.9%',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textAlign: 'initial',
    [theme.fn.smallerThan('lg')]: {
      marginTop: '35px',
      marginLeft: '24.9%'
    },
    [theme.fn.smallerThan('md')]: {
      marginTop: '30px',
      marginLeft: '24.9%'
    },
    [theme.fn.smallerThan('sm')]: {
      marginTop: '45px',
      marginLeft: '23%'
    }
  },
  intrests: {
    color: theme.colorScheme === 'dark' ? theme.colors.brand[0] : theme.colors.brand[1],
    position: 'absolute',
    width: '100%',
    height: '30px',
    overflow: 'hidden',
    top: '115%',
    left: '26.5%',
    textAlign: 'initial',
    opacity: 1,
    fontWeight: 'bold',
    [theme.fn.smallerThan('xl')]: {
      left: '26.9%'
    }
  }
}))

const slide = keyframes({
  '0%': {
    top: 0
  },
  '25%': {
    top: '-40px'
  },
  '50%': {
    top: '-80px'
  },
  '75%': {
    top: '-120px'
  }
})

export default function LeftSection() {
  const { classes } = useStyles()
  const { colorScheme } = useMantineColorScheme()

  const buttonColor = colorScheme === 'dark' ? 'brand.0' : 'brand.1'
  const textColor = colorScheme === 'dark' ? 'dark' : 'white.0'

  return (
    <Stack
      justify="center"
      spacing="xl"
      sx={theme => ({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : '#fff',
        height: 400,
        marginTop: '65px',
        [theme.fn.smallerThan('md')]: {
          marginTop: '60px'
        },
        [theme.fn.smallerThan('sm')]: {
          marginTop: '0px'
        },
        [theme.fn.smallerThan('xs')]: {
          marginTop: '80px'
        }
      })}
    >
      <Box
        sx={theme => ({
          padding: '3.5rem',
          color: theme.colorScheme === 'dark' ? theme.white : theme.black
        })}
      >
        <Text
          className={classes.text}
          size="md"
          sx={theme => ({
            fontWeight: 600,
            marginLeft: '0.3%',
            color: theme.colorScheme === 'dark' ? theme.colors.brand[0] : theme.colors.brand[1],
            [theme.fn.smallerThan('md')]: {
              marginLeft: '5px'
            },
            [theme.fn.smallerThan('sm')]: {
              marginLeft: 0
            }
          })}
        >
          HELLO I'M
        </Text>
        <div className={classes.bannerText}>
          <Title className={classes.name} order={1}>
            Oluwatobi A. Bello
          </Title>
          <div className={classes.intrests}>
            <Box
              sx={theme => ({
                position: 'absolute',
                top: 0,
                marginLeft: '0.3%',
                fontSize: '25px',
                animation: `${slide} 9s infinite`,
                [theme.fn.smallerThan('xl')]: {
                  marginLeft: '0%'
                },
                [theme.fn.smallerThan('xs')]: {
                  marginLeft: '2%'
                }
              })}
            >
              WEB DEVELOPER.
              <br />
              MECH. ENGR.
              <br />
              MAN UNITED FAN.
              <br />
              CAR ENTHUSIAT.
            </Box>
          </div>
        </div>
        <Text
          className={classes.text}
          size="md"
          sx={() => ({
            marginTop: '30px',
            textAlign: 'initial',
            width: '85%'
          })}
        >
          Excellent at working well with others while holding myself accountable and navigating the dynamics of the
          toughest teams.
        </Text>
        <Group
          sx={() => ({
            padding: '1rem',
            marginTop: '30px'
          })}
        >
          <a href="#stats">
            <CustomButton text="Come On In" buttonColor={buttonColor} textColor={textColor} />
          </a>
          <a href="#about">
            <CustomButton text="About Me" textColor={textColor} />
          </a>
        </Group>
      </Box>
    </Stack>
  )
}

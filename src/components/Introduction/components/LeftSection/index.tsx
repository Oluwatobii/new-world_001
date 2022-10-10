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
    marginLeft: '25%',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textAlign: 'initial',
    [theme.fn.smallerThan('lg')]: {
      marginTop: '35px',
      marginLeft: '25%'
    },
    [theme.fn.smallerThan('md')]: {
      marginTop: '45px',
      marginLeft: '24%'
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
    overflow: 'hidden',
    top: '115%',
    left: '27%',
    textAlign: 'initial',
    maxHeight: '40px',
    opacity: 1,
    fontWeight: 'bold',
    [theme.fn.smallerThan('xl')]: {
      left: '26.7%'
    }
  }
}))

const intrestsOne = keyframes({
  '0%': {
    opacity: 0
  },
  '10%': {
    opacity: 1
  },
  '20%': {
    opacity: 0
  }
})
const intrestsTwo = keyframes({
  '20%': {
    opacity: 0
  },
  '30%': {
    opacity: 1
  },
  '40%': {
    opacity: 0
  }
})
const intrestsThree = keyframes({
  '40%': {
    opacity: 0
  },
  '50%': {
    opacity: 1
  },
  '60%': {
    opacity: 0
  }
})
const intrestsFour = keyframes({
  '60%': {
    opacity: 0
  },
  '70%': {
    opacity: 1
  },
  '80%': {
    opacity: 0
  }
})
const intrestsFive = keyframes({
  '80%': {
    opacity: 0
  },
  '90%': {
    opacity: 1
  },
  '100%': {
    opacity: 0
  }
})

export default function LeftSection() {
  const { classes } = useStyles()
  const { colorScheme } = useMantineColorScheme()

  const buttonColor = colorScheme === 'dark' ? 'brand.0' : 'brand.1'
  const textColor = colorScheme === 'dark' ? 'dark' : 'white.0'

  return (
    <Stack
      align="flex-start"
      spacing="xl"
      sx={theme => ({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : '#fff',
        height: 400,
        marginTop: '65px',
        [theme.fn.smallerThan('sm')]: {
          marginTop: '-35px'
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
            marginLeft: '6px',
            color: theme.colorScheme === 'dark' ? theme.colors.brand[0] : theme.colors.brand[1],
            [theme.fn.smallerThan('md')]: {
              marginLeft: 0
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
            <Title
              order={2}
              sx={() => ({
                animation: `${intrestsOne} 15s infinite`
              })}
            >
              WEB DEVELOPER.
            </Title>
            <Title
              order={2}
              sx={() => ({
                animation: `${intrestsTwo} 15s infinite`
              })}
            >
              MECH. ENGR.
            </Title>
            <Title
              order={2}
              sx={() => ({
                animation: `${intrestsThree} 15s infinite`
              })}
            >
              MANCHESTER UNITED FAN.
            </Title>
            <Title
              order={2}
              sx={() => ({
                animation: `${intrestsFour} 15s infinite`
              })}
            >
              CAR ENTHUSIAT.
            </Title>
            <Title
              order={2}
              sx={() => ({
                animation: `${intrestsFive} 15s infinite`
              })}
            >
              LOREM IPSUM.
            </Title>
          </div>
        </div>
        <Text
          className={classes.text}
          size="md"
          sx={() => ({
            marginTop: '30px'
          })}
        >
          Excellent at working well with others while holding myself accountable and can also navigate the dynamics of
          the toughest teams.
        </Text>
        <Group
          sx={() => ({
            padding: '1rem',
            marginTop: '30px'
          })}
        >
          <CustomButton text="Come On In" buttonColor={buttonColor} textColor={textColor} />
          <CustomButton text="About Me" textColor={textColor} />
        </Group>
      </Box>
    </Stack>
  )
}

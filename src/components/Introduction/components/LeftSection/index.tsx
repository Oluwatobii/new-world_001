import { createStyles, keyframes, Stack, Title, Text, Box, Group, useMantineColorScheme } from '@mantine/core'
import { useEffect, useState } from 'react'
import CustomButton from '@/components/Global/Button'

const ROLE_LINE_HEIGHT = 42
const ROLE_TITLES = [
  'SOFTWARE ENGINEER.',
  'FULL-STACK DEVELOPER.',
  'MECHANICAL ENGINEER.',
  'SYSTEMS THINKER.',
  'AUTOMOTIVE ENTHUSIAST.',
  'LIFELONG LEARNER.'
]
const TYPING_SPEED_MS = 75
const DELETING_SPEED_MS = 42
const HOLD_AT_END_MS = 1300
const HOLD_AT_START_MS = 260

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
  interests: {
    color: theme.colorScheme === 'dark' ? theme.colors.brand[0] : theme.colors.brand[1],
    position: 'absolute',
    width: '100%',
    height: `${ROLE_LINE_HEIGHT}px`,
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

const cursorBlink = keyframes({
  '0%, 49%': {
    opacity: 1
  },
  '50%, 100%': {
    opacity: 0
  }
})

export default function LeftSection() {
  const { classes } = useStyles()
  const { colorScheme } = useMantineColorScheme()
  const [roleIndex, setRoleIndex] = useState(0)
  const [typedRole, setTypedRole] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  const buttonColor = colorScheme === 'dark' ? 'brand.0' : 'brand.1'
  const textColor = colorScheme === 'dark' ? 'dark' : 'white.0'
  const activeRole = ROLE_TITLES[roleIndex]

  useEffect(() => {
    let nextDelay = isDeleting ? DELETING_SPEED_MS : TYPING_SPEED_MS

    if (!isDeleting && typedRole === activeRole) {
      nextDelay = HOLD_AT_END_MS
    } else if (isDeleting && typedRole.length === 0) {
      nextDelay = HOLD_AT_START_MS
    }

    const timer = window.setTimeout(() => {
      if (!isDeleting && typedRole === activeRole) {
        setIsDeleting(true)
        return
      }

      if (isDeleting && typedRole.length === 0) {
        setIsDeleting(false)
        setRoleIndex(prev => (prev + 1) % ROLE_TITLES.length)
        return
      }

      const nextLength = typedRole.length + (isDeleting ? -1 : 1)
      setTypedRole(activeRole.slice(0, Math.max(0, nextLength)))
    }, nextDelay)

    return () => window.clearTimeout(timer)
  }, [activeRole, isDeleting, typedRole])

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
          HELLO, I&apos;M
        </Text>
        <div className={classes.bannerText}>
          <Title className={classes.name} order={1}>
            Oluwatobi A. Bello
          </Title>
          <div className={classes.interests}>
            <Box
              sx={theme => ({
                position: 'absolute',
                fontSize: '25px',
                lineHeight: `${ROLE_LINE_HEIGHT}px`,
                display: 'inline-flex',
                alignItems: 'center',
                whiteSpace: 'nowrap',
                left: 0
              })}
            >
              <Text inherit span sx={{ display: 'inline-block', fontWeight: 700, letterSpacing: '0.02em' }}>
                {typedRole}
              </Text>
              <Text
                inherit
                span
                sx={{
                  display: 'inline-block',
                  marginLeft: '2px',
                  animation: `${cursorBlink} 0.95s steps(1, end) infinite`
                }}
              >
                |
              </Text>
            </Box>
          </div>
        </div>
        <Text
          className={classes.text}
          size="md"
          sx={theme => ({
            marginTop: '30px',
            textAlign: 'justify',
            textJustify: 'inter-word',
            width: '85%',
            [theme.fn.smallerThan('sm')]: {
              textAlign: 'left',
              width: '100%'
            }
          })}
        >
          I build reliable web software with an engineer&apos;s habit of mind—from APIs and data layers to interfaces
          people actually use. Collaborative, thorough, and mindful of maintainability.
        </Text>
        <Group
          sx={() => ({
            padding: '1rem',
            marginTop: '30px'
          })}
        >
          <a href="#stats">
            <CustomButton text="View highlights" buttonColor={buttonColor} textColor={textColor} />
          </a>
          <a href="#about">
            <CustomButton text="About" textColor={textColor} />
          </a>
        </Group>
      </Box>
    </Stack>
  )
}

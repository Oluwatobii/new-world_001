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
    textAlign: 'initial',
    [theme.fn.smallerThan('sm')]: {
      paddingLeft: 0,
      paddingRight: 0,
      marginTop: theme.spacing.sm
    }
  },
  bannerText: {
    color: theme.colorScheme === 'dark' ? theme.colors.brand[0] : theme.colors.brand[1],
    position: 'relative',
    transform: 'translateX(-50%)',
    left: '25%',
    marginTop: '15px',
    marginBottom: '10px',
    width: '100%',
    [theme.fn.smallerThan('md')]: {
      marginTop: theme.spacing.xs
    },
    [theme.fn.smallerThan('sm')]: {
      left: 0,
      transform: 'none',
      marginTop: theme.spacing.xs,
      marginBottom: theme.spacing.sm,
      width: '100%'
    }
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
      marginTop: theme.spacing.xs,
      marginLeft: '24.9%'
    },
    [theme.fn.smallerThan('md')]: {
      marginTop: theme.spacing.xs,
      marginLeft: '24.9%'
    },
    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.xs,
      marginLeft: 0,
      paddingLeft: 0,
      paddingRight: 0,
      fontSize: theme.fontSizes.xl
    },
    [theme.fn.smallerThan('xs')]: {
      fontSize: theme.fontSizes.lg
    }
  },
  interests: {
    color: theme.colorScheme === 'dark' ? theme.colors.brand[0] : theme.colors.brand[1],
    position: 'static',
    width: '100%',
    marginTop: theme.spacing.xs,
    marginLeft: '26.5%',
    textAlign: 'initial',
    opacity: 1,
    fontWeight: 'bold',
    boxSizing: 'border-box',
    [theme.fn.smallerThan('xl')]: {
      marginLeft: '26.9%'
    },
    [theme.fn.smallerThan('sm')]: {
      marginLeft: 0,
      paddingLeft: 0,
      paddingRight: 0
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
          marginTop: theme.spacing.xs,
          height: 'auto',
          minHeight: 0,
          justifyContent: 'flex-start'
        },
        [theme.fn.smallerThan('xs')]: {
          marginTop: theme.spacing.xs
        }
      })}
    >
      <Box
        sx={theme => ({
          padding: '3.5rem',
          color: theme.colorScheme === 'dark' ? theme.white : theme.black,
          [theme.fn.smallerThan('sm')]: {
            paddingTop: theme.spacing.md,
            paddingBottom: theme.spacing.sm,
            paddingLeft: theme.spacing.md,
            paddingRight: theme.spacing.md
          },
          [theme.fn.smallerThan('xs')]: {
            paddingTop: theme.spacing.sm,
            paddingBottom: theme.spacing.sm,
            paddingLeft: theme.spacing.sm,
            paddingRight: theme.spacing.sm
          }
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
              marginLeft: 0,
              fontSize: theme.fontSizes.sm
            },
            [theme.fn.smallerThan('xs')]: {
              fontSize: theme.fontSizes.xs
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
                position: 'relative',
                fontSize: 25,
                lineHeight: `${ROLE_LINE_HEIGHT}px`,
                display: 'inline-flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                maxWidth: '100%',
                whiteSpace: 'normal',
                wordBreak: 'break-word',
                [theme.fn.smallerThan('sm')]: {
                  fontSize: theme.fontSizes.md,
                  lineHeight: 1.35,
                  letterSpacing: '0.01em'
                },
                [theme.fn.smallerThan('xs')]: {
                  fontSize: theme.fontSizes.sm,
                  lineHeight: 1.4
                }
              })}
            >
              <Text
                inherit
                span
                sx={theme => ({
                  display: 'inline',
                  fontWeight: 700,
                  letterSpacing: '0.02em',
                  [theme.fn.smallerThan('xs')]: {
                    letterSpacing: '0.01em'
                  }
                })}
              >
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
            marginTop: theme.spacing.md,
            textAlign: 'justify',
            textJustify: 'inter-word',
            width: '85%',
            [theme.fn.largerThan('sm')]: {
              marginTop: theme.spacing.lg
            },
            [theme.fn.smallerThan('sm')]: {
              marginTop: theme.spacing.md,
              textAlign: 'left',
              width: '100%',
              fontSize: theme.fontSizes.sm
            },
            [theme.fn.smallerThan('xs')]: {
              fontSize: theme.fontSizes.xs
            }
          })}
        >
          I build reliable web software with an engineer&apos;s habit of mind—from APIs and data layers to interfaces
          people actually use. Collaborative, thorough, and mindful of maintainability.
        </Text>
        <Group
          sx={theme => ({
            paddingTop: theme.spacing.sm,
            paddingBottom: theme.spacing.sm,
            marginTop: theme.spacing.md,
            [theme.fn.smallerThan('sm')]: {
              paddingTop: theme.spacing.xs,
              paddingBottom: theme.spacing.xs,
              marginTop: theme.spacing.sm
            }
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

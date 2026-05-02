import { createStyles, Stack, Title, Text, Center } from '@mantine/core'

interface StatProps {
  subject: string
  stat: string
}

const useStyles = createStyles(theme => ({
  stat: {
    display: 'flex',
    marginTop: '5rem',
    textAlign: 'center',
    [theme.fn.smallerThan('sm')]: {
      marginTop: 0
    }
  }
}))

export default function StatGraph({ subject, stat }: StatProps) {
  const { classes } = useStyles()

  return (
    <Center
      className={classes.stat}
      sx={theme => ({
        width: 225,
        height: 135,
        borderLeft: theme.colorScheme === 'dark' ? '2pt solid white' : '2pt solid grey',
        borderBottom: theme.colorScheme === 'dark' ? '2pt solid white' : '2pt solid grey',
        color: theme.colorScheme === 'dark' ? theme.colors.white[0] : theme.colors.dark,
        [theme.fn.smallerThan('sm')]: {
          width: 132,
          height: 92
        },
        [theme.fn.smallerThan('xs')]: {
          width: 116,
          height: 82
        }
      })}
    >
      <Stack align="center" spacing={4}>
        <Title
          order={2}
          sx={theme => ({
            [theme.fn.smallerThan('sm')]: {
              fontSize: theme.fontSizes.lg
            },
            [theme.fn.smallerThan('xs')]: {
              fontSize: theme.fontSizes.md
            }
          })}
        >
          {stat}
        </Title>
        <Text
          size="md"
          sx={theme => ({
            [theme.fn.smallerThan('sm')]: {
              fontSize: theme.fontSizes.sm
            },
            [theme.fn.smallerThan('xs')]: {
              fontSize: theme.fontSizes.xs
            }
          })}
        >
          {subject}
        </Text>
      </Stack>
    </Center>
  )
}

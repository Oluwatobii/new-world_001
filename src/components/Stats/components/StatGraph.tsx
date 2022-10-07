import { createStyles, Stack, Title, Text, Center } from '@mantine/core'

interface StatProps {
  subject: string
  stat: string
}

const useStyles = createStyles(theme => ({
  stat: {
    display: 'flex',
    marginTop: '5rem',
    textAlign: 'center'
  }
}))

export default function StatGraph({ subject, stat }: StatProps) {
  const { classes } = useStyles()

  return (
    <Center
      style={{ width: '250px', height: '150px' }}
      className={classes.stat}
      sx={theme => ({
        borderLeft: theme.colorScheme === 'dark' ? '2pt solid white' : '2pt solid grey',
        borderBottom: theme.colorScheme === 'dark' ? '2pt solid white' : '2pt solid grey',
        color: theme.colorScheme === 'dark' ? theme.colors.white[0] : theme.colors.dark,
        [theme.fn.smallerThan('sm')]: {
          width: '50px',
          height: '35px'
        }
      })}
    >
      <Stack align="center">
        <Title>{stat}</Title>
        <Text size="md">{subject}</Text>
      </Stack>
    </Center>
  )
}

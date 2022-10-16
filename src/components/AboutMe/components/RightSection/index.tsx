import { createStyles, Stack, Title, Text, Box, Group, useMantineColorScheme } from '@mantine/core'
import CustomButton from '../../../Global/Button'

const useStyles = createStyles(theme => ({
  title: {
    display: 'flex',
    position: 'relative',
    marginBottom: theme.spacing.xs / 2,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    color: theme.colorScheme === 'dark' ? theme.colors.white : theme.colors.dark,

    '&::before': {
      content: '""',
      position: 'absolute',
      width: '40%',
      height: '4px',
      borderRadius: '4px',
      backgroundColor: theme.colorScheme === 'dark' ? '#39f758' : '#2CA941',
      bottom: 0,
      left: 19,
      [theme.fn.smallerThan('md')]: {
        left: 20
      },
      [theme.fn.smallerThan('sm')]: {
        left: 20
      },
      [theme.fn.smallerThan('xs')]: {
        left: 15
      }
    }
  },

  text: {
    display: 'flex',
    alignItems: 'flex-start',
    marginTop: '20px',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textAlign: 'initial'
  }
}))

export default function RightSection() {
  const { classes } = useStyles()
  const { colorScheme } = useMantineColorScheme()
  const textColor = colorScheme === 'dark' ? 'dark' : 'white.0'

  return (
    <Stack
      spacing="lg"
      sx={theme => ({
        display: 'flex',
        justifyContent: 'flex-end',
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : '#fff'
      })}
    >
      <Box
        sx={theme => ({
          padding: '3.5rem',
          color: theme.colorScheme === 'dark' ? theme.white : theme.black
        })}
      >
        <Title className={classes.title} order={1}>
          Get To Know Me Better
        </Title>

        <Title
          order={5}
          sx={theme => ({
            display: 'flex',
            marginBottom: theme.spacing.xs / 2,
            paddingLeft: theme.spacing.md,
            paddingRight: theme.spacing.md,
            marginTop: '35px'
          })}
        >
          DESIGNING WITH PASSION WHILE EXPLORING THE WORLD.
        </Title>

        <Text
          className={classes.text}
          size="md"
          sx={() => ({
            marginTop: '35px',
            width: '95%'
          })}
        >
          Over the years I’ve been passionate about different things – both professionally and personally. This probably
          isn't surprising considering my background is primarily in areas of mechanical engineering, but i’ve always
          had the curious mind of what web development (programming) entails.
        </Text>
        <Text
          className={classes.text}
          size="md"
          sx={() => ({
            marginTop: '35px',
            width: '95%'
          })}
        >
          And as a result, i found myself further delving into this new world of programming and software development.
        </Text>

        <Group
          sx={() => ({
            padding: '1rem',
            marginTop: '20px'
          })}
        >
          <a href="#contact">
            <CustomButton text="Want To Know More?" textColor={textColor} />
          </a>
        </Group>
      </Box>
    </Stack>
  )
}

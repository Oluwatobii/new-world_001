import { createStyles, Stack, Title, Text, Box, Group, useMantineColorScheme } from '@mantine/core'
import CustomButton from '@/components/Global/Button'

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
    textAlign: 'justify',
    textJustify: 'inter-word',
    [theme.fn.smallerThan('sm')]: {
      textAlign: 'left'
    }
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
          About
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
          FROM MECHANICAL ENGINEERING TO FULL-STACK DEVELOPMENT.
        </Title>

        <Text
          className={classes.text}
          size="md"
          sx={() => ({
            marginTop: '35px',
            width: '95%'
          })}
        >
          My foundation is in mechanical engineering—systems thinking, tolerances, and how things fit together under
          load. That mindset carries into software: clear interfaces between components, maintainable code, and products
          that hold up in production.
        </Text>
        <Text
          className={classes.text}
          size="md"
          sx={() => ({
            marginTop: '35px',
            width: '95%'
          })}
        >
          I moved deliberately into web development to work across the full stack—from databases and APIs to the
          experiences users see in the browser.
        </Text>

        <Group
          sx={() => ({
            padding: '1rem',
            marginTop: '20px'
          })}
        >
          <a href="#contact">
            <CustomButton text="Get in touch" textColor={textColor} />
          </a>
        </Group>
      </Box>
    </Stack>
  )
}

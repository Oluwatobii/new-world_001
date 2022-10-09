import { createStyles, Stack, Title, Text, Box, Group, useMantineColorScheme } from '@mantine/core'
import CustomButton from '../../../Global/Button'

const useStyles = createStyles(theme => ({
  text: {
    display: 'flex',
    alignItems: 'flex-start',
    marginTop: '20px',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textAlign: 'initial'
  }
}))

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
            color: theme.colorScheme === 'dark' ? theme.colors.brand[0] : theme.colors.brand[1]
          })}
        >
          HELLO I'M
        </Text>
        <Title className={classes.text} order={1}>
          Oluwatobi A. Bello
        </Title>
        <Title
          className={classes.text}
          order={2}
          sx={theme => ({
            color: theme.colorScheme === 'dark' ? theme.colors.brand[0] : theme.colors.brand[1]
          })}
        >
          WEB DEVELOPER.
        </Title>
        <Text
          className={classes.text}
          size="md"
          sx={() => ({
            marginTop: '35px'
          })}
        >
          Excellent at working well with others while holding myself accountable and can also navigate the dynamics of
          the toughest teams.
        </Text>
        <Group
          sx={() => ({
            padding: '1rem',
            marginTop: '35px'
          })}
        >
          <CustomButton text="Come On In" buttonColor={buttonColor} textColor={textColor} />
          <CustomButton text="About Me" textColor={textColor} />
        </Group>
      </Box>
    </Stack>
  )
}

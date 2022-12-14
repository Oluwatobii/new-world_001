import { createStyles, SimpleGrid, Stack, Title, Text, Box } from '@mantine/core'
import CustomIcon from '../../../Global/Icon'
import { GoLocation } from 'react-icons/go'
import { AiOutlineMail } from 'react-icons/ai'
import { TbWorld } from 'react-icons/tb'
import { BsTelephone } from 'react-icons/bs'

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

  return (
    <Stack
      spacing="xl"
      sx={theme => ({
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : '#fff',
        height: 400,
        marginTop: '100px',
        [theme.fn.smallerThan('sm')]: {
          marginTop: '-35px'
        }
      })}
    >
      <Box
        sx={theme => ({
          padding: '3.5rem',
          marginTop: '25px',
          color: theme.colorScheme === 'dark' ? theme.white : theme.black
        })}
      >
        <Text
          className={classes.text}
          size="md"
          sx={theme => ({
            fontWeight: 800,
            color: theme.colorScheme === 'dark' ? theme.colors.brand[0] : theme.colors.brand[1]
          })}
        >
          GET IN TOUCH
        </Text>
        <Title className={classes.text} order={1}>
          Stay Connected & Let's Get In Touch
        </Title>

        <SimpleGrid
          cols={2}
          sx={() => ({
            marginTop: '35px',
            textAlign: 'center'
          })}
        >
          <CustomIcon Icon={<GoLocation size={'45px'} />} title="My Location" text="Ontario, Canada" />
          <CustomIcon Icon={<AiOutlineMail size={'45px'} />} title="Email Address" text="tbellodevelopment@gmail.com" />
          <CustomIcon Icon={<TbWorld size={'45px'} />} title="Website" text="https://tbello.dev" />
          <CustomIcon Icon={<BsTelephone size={'45px'} />} title="Telephone" text="+1 (xxx) xxx-xxxx" />
        </SimpleGrid>
      </Box>
    </Stack>
  )
}

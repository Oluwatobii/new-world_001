import {
  createStyles,
  Container,
  Title,
  TextInput,
  Textarea,
  SimpleGrid,
  Group,
  useMantineColorScheme
} from '@mantine/core'
import { useForm } from '@mantine/form'
import { useMediaQuery } from '@mantine/hooks'
import CustomButton from '../../../Global/Button'

interface ValuesProps {
  firstName: string
  lastName: string
  email: string
  subject: string
  message: string
}

const useStyles = createStyles(theme => ({
  wrapper: {
    marginTop: '95px',
    paddingLeft: theme.spacing.lg,
    paddingRight: theme.spacing.lg
  }
}))

export default function RightSection() {
  const { classes } = useStyles()
  const { colorScheme } = useMantineColorScheme()
  const isTabletSize = useMediaQuery('(max-width: 62em)')

  const buttonColor = colorScheme === 'dark' ? 'brand.0' : 'brand.1'
  const textColor = colorScheme === 'dark' ? 'dark' : 'white.0'

  const form = useForm({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: ''
    },
    validate: {
      firstName: value => value.trim().length < 2,
      lastName: value => value.trim().length < 2,
      email: value => !/^\S+@\S+$/.test(value),
      subject: value => value.trim().length === 0,
      message: value => value.trim().length === 0
    }
  })

  const handleSubmit = (values: ValuesProps) => {
    /** Make a Post request to Houston */
    form.reset()
  }

  return (
    <form onSubmit={form.onSubmit(values => handleSubmit(values))}>
      <Container className={classes.wrapper}>
        {isTabletSize ? (
          <Title
            order={1}
            sx={theme => ({
              backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : '#fff',
              marginTop: '5px',
              [theme.fn.smallerThan('sm')]: {
                marginTop: '-90px'
              }
            })}
          >
            Stay Connected & Let's Get In Touch
          </Title>
        ) : null}
        <SimpleGrid cols={2} mt="xl" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
          <TextInput
            label="First Name"
            placeholder="First name"
            name="firstName"
            size="lg"
            variant="filled"
            required
            {...form.getInputProps('firstName')}
          />
          <TextInput
            label="Last Name"
            placeholder="Last name"
            name="lastName"
            size="lg"
            variant="filled"
            required
            {...form.getInputProps('lastName')}
          />
        </SimpleGrid>

        <SimpleGrid cols={2} mt="xl" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
          <TextInput
            label="Email"
            required
            size="lg"
            placeholder="Email Address"
            name="email"
            variant="filled"
            {...form.getInputProps('email')}
          />

          <TextInput
            label="Subject"
            required
            placeholder="Subject"
            name="subject"
            variant="filled"
            size="lg"
            {...form.getInputProps('subject')}
          />
        </SimpleGrid>

        <Textarea
          mt="xl"
          label="Message"
          required
          placeholder="Your Message Here..."
          maxRows={15}
          minRows={9}
          size="lg"
          name="message"
          variant="filled"
          {...form.getInputProps('message')}
        />

        <Group position="left" mt="xl">
          <CustomButton
            text="Send Message"
            size="lg"
            buttonColor={buttonColor}
            textColor={textColor}
            options={{ type: 'submit' }}
          />
        </Group>
      </Container>
    </form>
  )
}

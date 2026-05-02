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
import CustomButton from '@/components/Global/Button'
import { api } from '@/lib/api'

interface ValuesProps {
  firstName: string
  lastName: string
  email: string
  subject: string
  message: string
}

const useStyles = createStyles(theme => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: '95px',
    width: '100%',
    maxWidth: '100%',
    paddingLeft: theme.spacing.sm,
    paddingRight: theme.spacing.sm,
    [theme.fn.largerThan('sm')]: {
      paddingLeft: theme.spacing.md,
      paddingRight: theme.spacing.md
    }
  }
}))

export default function RightSection() {
  const { classes } = useStyles()
  const { colorScheme } = useMantineColorScheme()
  const isMobile = useMediaQuery('(max-width: 48em)')
  const isNarrow = useMediaQuery('(max-width: 48em)')
  const fieldSize = isNarrow ? 'md' : 'lg'

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

  const handleSubmit = async (values: ValuesProps) => {
    const mail = {
      email: values.email,
      fullName: `${values.firstName} ${values.lastName}`,
      bcc: [],
      host: 'new-world_001',
      subject: values.subject,
      message: values.message
    }

    try {
      const res = await fetch(api.sendEmail, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(mail)
      })

      if (res.status >= 200 && res.status < 300) {
        form.reset()
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form onSubmit={form.onSubmit(values => handleSubmit(values))}>
      <Container className={classes.wrapper} fluid size="xl">
        {isMobile ? (
          <Title
            order={1}
            sx={theme => ({
              backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : '#fff',
              marginTop: '5px',
              [theme.fn.smallerThan('sm')]: {
                marginTop: '-90px',
                fontSize: theme.fontSizes.xl
              },
              [theme.fn.smallerThan('xs')]: {
                fontSize: theme.fontSizes.lg
              }
            })}
          >
            I&apos;d love to hear from you
          </Title>
        ) : null}
        <SimpleGrid cols={2} spacing="lg" mt="xl" breakpoints={[{ maxWidth: 'xs', cols: 1, spacing: 'md' }]}>
          <TextInput
            label="First Name"
            placeholder="First name"
            name="firstName"
            size={fieldSize}
            variant="filled"
            required
            {...form.getInputProps('firstName')}
          />
          <TextInput
            label="Last Name"
            placeholder="Last name"
            name="lastName"
            size={fieldSize}
            variant="filled"
            required
            {...form.getInputProps('lastName')}
          />
        </SimpleGrid>

        <SimpleGrid cols={2} spacing="lg" mt="xl" breakpoints={[{ maxWidth: 'xs', cols: 1, spacing: 'md' }]}>
          <TextInput
            label="Email"
            required
            size={fieldSize}
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
            size={fieldSize}
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
          size={fieldSize}
          name="message"
          variant="filled"
          {...form.getInputProps('message')}
        />

        <Group position="left" mt="xl">
          <CustomButton
            text="Send Message"
            size={isNarrow ? 'md' : 'lg'}
            buttonColor={buttonColor}
            textColor={textColor}
            options={{ type: 'submit' }}
          />
        </Group>
      </Container>
    </form>
  )
}

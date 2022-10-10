import {
  createStyles,
  Container,
  SimpleGrid,
  Stack,
  Title,
  Text,
  Box,
  Group,
  useMantineColorScheme
} from '@mantine/core'

interface IconProps {
  Icon: JSX.Element | null
  text: string
  title: string
}

export default function CustomIcon({ Icon, title, text }: IconProps) {
  return (
    <Container>
      <Stack
        sx={() => ({
          marginTop: '10px'
        })}
      >
        <Box
          sx={theme => ({
            color: theme.colorScheme === 'dark' ? theme.colors.brand[0] : theme.colors.brand[1]
          })}
        >
          {Icon}
        </Box>
        <Title
          order={3}
          sx={theme => ({
            color: theme.colorScheme === 'dark' ? 'dark' : 'white.0'
          })}
        >
          {title}
        </Title>
        <Text
          sx={theme => ({
            color: theme.colorScheme === 'dark' ? theme.colors.gray[4] : theme.colors.gray[6]
          })}
        >
          {text}
        </Text>
      </Stack>
    </Container>
  )
}

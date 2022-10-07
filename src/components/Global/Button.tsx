import { createStyles, Button, Text, useMantineColorScheme } from '@mantine/core'

interface ButtonProps {
  text: string
  buttonColor?: string
  textColor?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  options?: object
}

const useStyles = createStyles(theme => ({
  button: {
    display: 'flex',
    alignItems: 'flex-start',
    marginTop: '5px',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    borderBottomLeftRadius: '13px',
    borderTopRightRadius: '13px'
  }
}))

export default function CustomButton({
  text,
  textColor = 'white',
  buttonColor,
  size = 'md',
  options = {}
}: ButtonProps) {
  const { classes } = useStyles()
  const { colorScheme } = useMantineColorScheme()

  const defaultButtonColor = colorScheme === 'dark' ? 'white.0' : 'dark'
  const color = buttonColor ? buttonColor : defaultButtonColor

  return (
    <Button color={color} size={size} className={classes.button} {...options}>
      <Text color={textColor}>{text}</Text>
    </Button>
  )
}

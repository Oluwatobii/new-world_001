import { createStyles, Button, Text, useMantineColorScheme } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

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
    borderTopRightRadius: '13px',
    transition: 'transform .18s ease, box-shadow .18s ease',

    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: theme.shadows.md
    }
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
  const isNarrow = useMediaQuery('(max-width: 48em)')
  const effectiveSize: ButtonProps['size'] = (() => {
    if (!isNarrow) return size
    const down: Record<NonNullable<ButtonProps['size']>, ButtonProps['size']> = {
      xl: 'lg',
      lg: 'md',
      md: 'sm',
      sm: 'xs',
      xs: 'xs'
    }
    return down[size]
  })()

  const defaultButtonColor = colorScheme === 'dark' ? 'white.0' : 'dark'
  const color = buttonColor ? buttonColor : defaultButtonColor

  return (
    <Button color={color} size={effectiveSize} className={classes.button} {...options}>
      <Text color={textColor}>{text}</Text>
    </Button>
  )
}

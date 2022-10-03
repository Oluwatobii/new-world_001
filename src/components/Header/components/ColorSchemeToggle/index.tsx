import {
  useMantineColorScheme,
  SegmentedControl,
  ActionIcon,
  createStyles,
  Box,
  Group,
  Center,
  Text
} from '@mantine/core'
import { IconSun, IconMoon, IconMoonStars } from '@tabler/icons'
import { useMediaQuery } from '@mantine/hooks'

interface ToogleProps {
  IconSize?: number
  TextMargin?: number
  TextSize?: number | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

const useStyles = createStyles(theme => ({
  iconWrapper: {
    color: theme.colorScheme === 'dark' ? '#39f758' : '#2CA941'
  }
}))

export default function ColorSchemeToggle({ IconSize = 16, TextMargin = 10, TextSize = 'md' }: ToogleProps) {
  const { classes } = useStyles()
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const isTabletSize = useMediaQuery('(max-width: 62em)')

  if (isTabletSize) {
    return (
      <Group position="center" my="xl">
        <ActionIcon
          onClick={() => toggleColorScheme()}
          size={IconSize}
          sx={theme => ({
            color: theme.colorScheme === 'dark' ? '#39f758' : '#2CA941'
          })}
        >
          {colorScheme === 'dark' ? <IconSun size={IconSize} /> : <IconMoonStars size={IconSize} />}
        </ActionIcon>
      </Group>
    )
  }

  return (
    <SegmentedControl
      value={colorScheme}
      onChange={(value: 'light' | 'dark') => toggleColorScheme(value)}
      data={[
        {
          value: 'light',
          label: (
            <Center className={classes.iconWrapper}>
              <IconSun size={IconSize} stroke={1.5} />
              <Box ml={TextMargin}>
                <Text size={TextSize}>Light</Text>
              </Box>
            </Center>
          )
        },
        {
          value: 'dark',
          label: (
            <Center className={classes.iconWrapper}>
              <IconMoon size={IconSize} stroke={1.5} />
              <Box ml={TextMargin}>
                <Text size={TextSize}>Dark</Text>
              </Box>
            </Center>
          )
        }
      ]}
    />
  )
}

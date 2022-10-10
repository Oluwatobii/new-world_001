import { createStyles, Header, Group } from '@mantine/core'
import ColorSchemeToggle from '../ColorSchemeToggle'
import Logo from '../../../../assets/svgs/Logo'
import { menuList } from '../../../Global/menuList'

const useStyles = createStyles(theme => ({
  link: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontWeight: 500,
    position: 'relative',
    cursor: 'pointer',

    '&::before': {
      content: '""',
      position: 'absolute',
      width: '40%',
      height: '4px',
      borderRadius: '4px',
      backgroundColor: theme.colorScheme === 'dark' ? '#39f758' : '#2CA941',
      bottom: 0,
      left: 15,
      transformOrigin: 'right',
      transform: 'scaleX(0)',
      transition: 'transform .3s ease-in-out'
    },

    '&:hover::before': {
      transformOrigin: 'left',
      transform: 'scaleX(1)'
    }
  }
}))

export default function Navigation() {
  const { classes } = useStyles()

  return (
    <Header height={60} px="md">
      <Group position="apart" sx={{ height: '100%' }}>
        <Group>
          <Logo />
        </Group>

        <Group sx={{ height: '100%' }} spacing={0}>
          {menuList.menu.map(menu => (
            <a key={menu.href} className={classes.link}>
              {menu.name}
            </a>
          ))}
        </Group>

        <Group>
          <ColorSchemeToggle />
        </Group>
      </Group>
    </Header>
  )
}

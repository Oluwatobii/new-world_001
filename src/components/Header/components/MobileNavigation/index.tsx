import { createStyles, Group, Divider, Burger, Drawer, ScrollArea } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import Logo from '../../../../assets/svgs/Logo'
import ColorSchemeToggle from '../ColorSchemeToggle'
import { menuList } from '../../../Global/menuList'

const useStyles = createStyles(theme => ({
  link: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontWeight: 500,

    [theme.fn.smallerThan('sm')]: {
      height: 42,
      display: 'flex',
      alignItems: 'center',
      width: '100%'
    },

    '&:hover::before': {
      backgroundColor: theme.colorScheme === 'dark' ? '#39f758' : '#2CA941'
    }
  }
}))
export default function MobileNavigation() {
  const { classes, theme } = useStyles()
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false)

  return (
    <>
      <Group position="apart">
        <Group>
          <Burger opened={drawerOpened} onClick={toggleDrawer} />
        </Group>

        <Group>
          <Logo width="80px" height="35px" />
        </Group>

        <Group>
          <ColorSchemeToggle IconSize={30} />
        </Group>
      </Group>

      <Drawer opened={drawerOpened} onClose={closeDrawer} size="100%" padding="md" title="Menu" zIndex={1000}>
        <ScrollArea sx={{ height: 'calc(100vh - 60px)' }} mx="-md">
          <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />

          {menuList.menu.map(menu => (
            <a key={menu.href} className={classes.link}>
              {menu.name}
            </a>
          ))}

          <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />
        </ScrollArea>
      </Drawer>
    </>
  )
}

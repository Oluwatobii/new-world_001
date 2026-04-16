import type { MouseEvent } from 'react'
import { createStyles, Group, Divider, Burger, Drawer, ScrollArea, Box } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import Logo from '@/assets/svgs/Logo'
import ColorSchemeToggle from '../ColorSchemeToggle'
import { menuList } from '@/components/Global/menuList'
import useActiveSection from '@/hooks/useActiveSection'

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
    position: 'relative',
    borderLeft: '4px solid transparent',
    transition: 'background-color .2s ease-in-out, color .2s ease-in-out, border-color .2s ease-in-out',

    [theme.fn.smallerThan('sm')]: {
      height: 42,
      display: 'flex',
      alignItems: 'center',
      width: '100%'
    }
  },
  linkActive: {
    color: theme.colorScheme === 'dark' ? theme.colors.brand[0] : theme.colors.brand[1],
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
    borderLeftColor: theme.colorScheme === 'dark' ? theme.colors.brand[0] : theme.colors.brand[1],
    fontWeight: 600
  }
}))

function scrollToSectionAfterDrawer(hash: string) {
  const id = hash.replace(/^#/, '')
  const el = document.getElementById(id)
  if (!el) return
  const smooth = !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  el.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto', block: 'start' })
  if (window.location.hash !== `#${id}`) {
    window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}#${id}`)
  }
}

export default function MobileNavigation() {
  const { classes, theme } = useStyles()
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false)
  const activeSection = useActiveSection()

  const onNavLinkClick = (e: MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault()
    closeDrawer()
    window.setTimeout(() => scrollToSectionAfterDrawer(hash), 280)
  }

  return (
    <>
      <Group position="apart">
        <Group>
          <Burger opened={drawerOpened} onClick={toggleDrawer} />
        </Group>

        <Group>
          <a href="/">
            <Logo width="80px" height="35px" />
          </a>
        </Group>

        <Group>
          <ColorSchemeToggle IconSize={30} />
        </Group>
      </Group>

      <Drawer opened={drawerOpened} onClose={closeDrawer} size="100%" padding="md" title="Menu" zIndex={1000}>
        <ScrollArea
          mx="-md"
          sx={{
            height: 'calc(100vh - 60px)',
            paddingBottom: 'max(env(safe-area-inset-bottom), 8px)',
            '@supports (height: 100dvh)': {
              height: 'calc(100dvh - 60px)'
            }
          }}
        >
          <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />

          {menuList.menu.map(menu => (
            <Box key={menu.path}>
              <a
                href={menu.path}
                className={`${classes.link} ${activeSection === menu.path ? classes.linkActive : ''}`.trim()}
                onClick={e => onNavLinkClick(e, menu.path)}
              >
                {menu.name}
              </a>
            </Box>
          ))}

          <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />
        </ScrollArea>
      </Drawer>
    </>
  )
}

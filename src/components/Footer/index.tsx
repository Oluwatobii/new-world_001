import { createStyles, Text, ActionIcon, Group, Title } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { IconBrandTwitter, IconBrandFacebook, IconBrandLinkedin, IconBrandGithub } from '@tabler/icons'
import Logo from '../../assets/svgs/Logo'
import { menuList } from '../Global/menuList'

const useStyles = createStyles(theme => ({
  footer: {
    marginTop: 120,
    paddingTop: theme.spacing.xl * 2,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0]
  },

  logo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    textAlign: 'initial',
    maxWidth: 200,

    [theme.fn.smallerThan('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  },

  description: {
    marginTop: 5,

    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.xs,
      textAlign: 'center'
    }
  },

  descriptionText: {
    color: theme.colorScheme === 'dark' ? theme.colors.brand[1] : theme.colors.brand[0],
    textDecoration: 'none',
    display: 'inline-block',
    transition: 'all 0.2s',
    '&:hover': {
      color: theme.colorScheme === 'dark' ? theme.colors.brand[0] : theme.colors.brand[1],
      boxShadow: '0 1rem 2rem rgba(dark, 0.4)',
      transform: 'rotate(5deg) scale(1.3)'
    }
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-evenly',

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
      alignItems: 'center'
    }
  },

  groups: {
    display: 'flex',
    flexWrap: 'wrap',

    [theme.fn.smallerThan('sm')]: {
      display: 'none'
    }
  },

  wrapper: {
    width: 160
  },

  link: {
    display: 'block',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[6],
    fontSize: theme.fontSizes.sm,
    paddingTop: 3,
    paddingBottom: 3,

    '&:hover': {
      textDecoration: 'underline'
    }
  },

  title: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: theme.spacing.xs / 2,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black
  },

  afterFooter: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark : theme.colors.white[0],
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.brand[0] : theme.colors.brand[1],
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing.xl,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column'
    }
  }
}))

export default function Footer() {
  const { classes } = useStyles()
  const isTabletSize = useMediaQuery('(max-width: 62em)')

  const groups = menuList.groups.map(group => {
    const links = group.links.map((link, index) => (
      <Text
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={event => {
          if (link.redirect) {
            event.preventDefault()
            window.open(link.link, '_blank')
          }
        }}
      >
        {link.label}
      </Text>
    ))

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    )
  })

  return (
    <footer className={classes.footer}>
      <div className={classes.inner}>
        <div className={classes.logo}>
          <Logo />

          <Text size="xs" color="dimmed" className={classes.description}>
            Built by{' '}
            <a
              href="https://github.com/Oluwatobii"
              className={classes.descriptionText}
              target="_blank"
              rel="noopener noreferrer"
            >
              Oluwatobi A. Bello
            </a>{' '}
            for his portfolio website. You are not allowed to use this webpage for either personal or commercial use.
            View the source code for this website{' '}
            <a
              href="https://github.com/Oluwatobii/new-world_001"
              className={classes.descriptionText}
              target="_blank"
              rel="noopener noreferrer"
            >
              here.
            </a>{' '}
            <br />
            Administrative Fearures? click{' '}
            <a
              href="https://houston.tbello.dev"
              className={classes.descriptionText}
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>{' '}
          </Text>
        </div>
        {!isTabletSize ? (
          <>
            <div className={classes.groups}>{groups}</div>
            <div>
              <Title
                order={3}
                sx={theme => ({
                  marginRight: '-15px',
                  [theme.fn.smallerThan('sm')]: {
                    marginTop: '-35px'
                  }
                })}
              >
                Social Media
              </Title>
              <Group className={classes.groups} spacing={0} position="right" noWrap>
                <a href="https://www.linkedin.com/in/oluwatobibello/" target="_blank" rel="noopener noreferrer">
                  <ActionIcon size="lg">
                    <IconBrandLinkedin size={18} stroke={1.5} />
                  </ActionIcon>
                </a>
                <a href="https://github.com/Oluwatobii" target="_blank" rel="noopener noreferrer">
                  <ActionIcon size="lg">
                    <IconBrandGithub size={18} stroke={1.5} />
                  </ActionIcon>
                </a>
              </Group>
            </div>
          </>
        ) : null}
      </div>
      <div className={classes.afterFooter}>
        <Text size="sm">© 2022 Oluwatobi A. Bello. All rights reserved.</Text>
      </div>
    </footer>
  )
}

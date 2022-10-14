import { Container, Text, Title, createStyles, SimpleGrid, useMantineColorScheme } from '@mantine/core'
import CustomCard from '../Global/Card'
import { FaPenNib } from 'react-icons/fa'
import { MdEngineering } from 'react-icons/md'
import { BsCodeSlash } from 'react-icons/bs'

const useStyles = createStyles(theme => ({
  wrapper: {
    marginTop: '20px',
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black
  },
  main: {
    marginTop: '20px',
    gridGap: '2rem',
    height: '400px',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center'
  },
  title: {
    marginTop: theme.spacing.sm,
    marginBottom: theme.spacing.xl * 1.5
  },

  text: {
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md
  }
}))

export default function index() {
  const { classes } = useStyles()
  const { colorScheme } = useMantineColorScheme()

  const iconColor = colorScheme === 'dark' ? 'brand.0' : 'brand.1'

  return (
    <Container
      id="competencies"
      size="lg"
      className={classes.wrapper}
      sx={theme => ({
        [theme.fn.smallerThan('md')]: {
          height: '68rem'
        },
        [theme.fn.smallerThan('sm')]: {
          height: '90rem'
        },
        [theme.fn.smallerThan('xs')]: {
          height: '50rem'
        }
      })}
    >
      <Text
        className={classes.text}
        sx={theme => ({
          fontWeight: 800,
          textAlign: 'center',
          color: theme.colorScheme === 'dark' ? theme.colors.brand[0] : theme.colors.brand[1]
        })}
      >
        WHAT I DO
      </Text>
      <Title align="center" className={classes.title}>
        Top Services
      </Title>

      <SimpleGrid
        cols={3}
        spacing="lg"
        className={classes.main}
        breakpoints={[
          { maxWidth: 'md', cols: 2, spacing: 'md' },
          { maxWidth: 'sm', cols: 1, spacing: 'sm' },
          { maxWidth: 'xs', cols: 1, spacing: 'sm' }
        ]}
      >
        <CustomCard
          title="2D/3D Designer"
          hover={true}
          Icon={<FaPenNib size="50px" color={iconColor} />}
          description="I draw cool 2D/3D CAD designs. Should you want to join the Avengers and be the new iron-man, I'll help you with designing the Iron Man suit."
        />
        <CustomCard
          title="Mechanical Engineer"
          hover={true}
          Icon={<MdEngineering size="50px" color={iconColor} />}
          description="Master's in Mechanical Engineering from Concordia University. Designing that internal combustion engine won't be a problem."
        />
        <CustomCard
          title="Full Stack Developer"
          hover={true}
          Icon={<BsCodeSlash size="50px" color={iconColor} />}
          description="I develop for the web, working with various stack technologies such as; React, Node, MongoDB, PostgreSQL, Ruby on Rails, and more. This site is built with React!"
        />
      </SimpleGrid>
    </Container>
  )
}

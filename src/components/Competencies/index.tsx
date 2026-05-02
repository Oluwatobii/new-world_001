import { Container, Text, Title, createStyles, SimpleGrid, useMantineColorScheme } from '@mantine/core'
import CustomCard from '@/components/Global/Card'
import { FaPenNib } from 'react-icons/fa'
import { MdEngineering } from 'react-icons/md'
import { BsCodeSlash } from 'react-icons/bs'

const useStyles = createStyles(theme => ({
  wrapper: {
    marginTop: '20px',
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    [theme.fn.smallerThan('sm')]: {
      paddingTop: theme.spacing.lg,
      paddingBottom: theme.spacing.md
    }
  },
  main: {
    marginTop: '20px',
    gridGap: '2rem',
    height: '400px',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    [theme.fn.smallerThan('md')]: {
      height: 'auto',
      minHeight: 0
    }
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center'
  },
  title: {
    marginTop: theme.spacing.sm,
    marginBottom: theme.spacing.xl * 1.5,
    [theme.fn.smallerThan('sm')]: {
      fontSize: theme.fontSizes.xl
    },
    [theme.fn.smallerThan('xs')]: {
      fontSize: theme.fontSizes.lg
    }
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
      size="lg"
      className={classes.wrapper}
      sx={theme => ({
        [theme.fn.smallerThan('md')]: {
          height: 'auto',
          minHeight: 0,
          paddingBottom: theme.spacing.lg
        },
        [theme.fn.smallerThan('sm')]: {
          paddingBottom: theme.spacing.sm
        }
      })}
    >
      <Text
        className={classes.text}
        sx={theme => ({
          fontWeight: 800,
          textAlign: 'center',
          color: theme.colorScheme === 'dark' ? theme.colors.brand[0] : theme.colors.brand[1],
          [theme.fn.smallerThan('sm')]: {
            fontSize: theme.fontSizes.sm
          },
          [theme.fn.smallerThan('xs')]: {
            fontSize: theme.fontSizes.xs
          }
        })}
      >
        WHAT I DO
      </Text>
      <Title align="center" className={classes.title}>
        Skills & background
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
          title="Full-stack development"
          hover={true}
          Icon={<BsCodeSlash size="50px" color={iconColor} />}
          description="End-to-end web development using React, Node.js, PostgreSQL, MongoDB, Ruby on Rails, and related tooling. This portfolio is built with React."
        />
        <CustomCard
          title="Mechanical engineering"
          hover={true}
          Icon={<MdEngineering size="50px" color={iconColor} />}
          description="Master's degree in Mechanical Engineering (Concordia University). Analysis and CAD—from mechanisms and thermals through detailed part design."
        />
        <CustomCard
          title="CAD & design"
          hover={true}
          Icon={<FaPenNib size="50px" color={iconColor} />}
          description="2D and 3D CAD from early concepts through documentation—layouts, assemblies, and clear design intent for review or manufacturing."
        />
      </SimpleGrid>
    </Container>
  )
}

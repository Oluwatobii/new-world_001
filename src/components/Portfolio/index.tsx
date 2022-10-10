import { Carousel } from '@mantine/carousel'
import { useMediaQuery } from '@mantine/hooks'
import { Container, Title, createStyles, Box, useMantineColorScheme } from '@mantine/core'
import { GrNext } from 'react-icons/gr'
import { GrPrevious } from 'react-icons/gr'
import CustomButton from '../Global/Button'
import CustomCard from '../Global/Card'
import { portfolioData } from './portfolio'

const useStyles = createStyles(theme => ({
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
    display: 'flex',
    position: 'relative',
    justifyContent: 'center',
    marginBottom: theme.spacing.xs / 2,
    textAlign: 'initial',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    color: theme.colorScheme === 'dark' ? theme.colors.white : theme.colors.dark,

    '&::before': {
      content: '""',
      position: 'absolute',
      width: '15%',
      height: '4px',
      borderRadius: '4px',
      backgroundColor: theme.colorScheme === 'dark' ? '#39f758' : '#2CA941',
      bottom: 0,
      left: 470,
      [theme.fn.smallerThan('md')]: {
        left: 290,
        width: '25%'
      },
      [theme.fn.smallerThan('sm')]: {
        left: 220,
        width: '30%'
      },
      [theme.fn.smallerThan('xs')]: {
        left: 80,
        width: '50%'
      }
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
  const isTabletSize = useMediaQuery('(max-width: 62em)')
  const buttonTextColor = colorScheme === 'dark' ? 'dark' : 'white.0'
  const slides = portfolioData.data.map(item => (
    <Carousel.Slide key={item.title}>
      <CustomCard
        title={item.title}
        Button={<CustomButton text="Launch" textColor={buttonTextColor} />}
        image={item.image}
        imageOverLayColor={item.imageOverLayColor}
        height={'400px'}
        titleAlign="initial"
        description={item.description}
      />
    </Carousel.Slide>
  ))
  return (
    <Container size="lg">
      <Title align="center" className={classes.title}>
        Latest Projects
      </Title>

      <Carousel
        withIndicators
        loop
        slideSize="33%"
        breakpoints={[
          { maxWidth: 'md', slideSize: '50%' },
          { maxWidth: 'sm', slideSize: '100%', slideGap: 5 }
        ]}
        slideGap="xl"
        align="start"
        slidesToScroll={isTabletSize ? 1 : 2}
        nextControlIcon={<GrNext size={30} />}
        previousControlIcon={<GrPrevious size={30} />}
      >
        {slides}
      </Carousel>
    </Container>
  )
}

import { Carousel } from '@mantine/carousel'
import { useMediaQuery } from '@mantine/hooks'
import { useEffect, useState } from 'react'
import { Container, Title, createStyles, useMantineColorScheme } from '@mantine/core'
import { GrNext } from 'react-icons/gr'
import { GrPrevious } from 'react-icons/gr'
import CustomButton from '../Global/Button'
import CustomCard from '../Global/Card'
import { portfolioData } from './portfolio'
import axios, { AxiosResponse } from 'axios'

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

interface Props {
  id: string
  title: string
  description: string
  image: string
  color: string
  url: string
  active: boolean
}

export default function index() {
  const { classes } = useStyles()
  const { colorScheme } = useMantineColorScheme()
  const [data, setData] = useState<Props[]>([])
  const isTabletSize = useMediaQuery('(max-width: 62em)')
  const buttonTextColor = colorScheme === 'dark' ? 'dark' : 'white.0'

  const getData = async () => {
    try {
      const response: AxiosResponse = await axios.get(
        `${import.meta.env.VITE_HOUSTON}/api/hub/portfolio/${import.meta.env.VITE_APP_ID}`,
        {
          withCredentials: true
        }
      )
      const data: Props[] = response?.data?.data?.projects
      const activeData = data.filter(({ active }: { active: boolean }) => active)
      setData(activeData)
    } catch (error) {
      setData(portfolioData.data)
    }
  }
  useEffect(() => {
    getData()
  }, [])

  const slides = data.map(item => (
    <Carousel.Slide key={item.id}>
      <CustomCard
        title={item.title}
        Button={
          <CustomButton
            text="Launch"
            textColor={buttonTextColor}
            options={{ onClick: () => window.open(`${item.url ? item.url : '/'}`, '_blank') }}
          />
        }
        image={
          item.image === ''
            ? 'https://res.cloudinary.com/otbi/image/upload/v1668442081/otbi/houston/portfolio/coming-soon_nuh1xf.jpg'
            : item.image
        }
        imageOverLayColor={item.color}
        height={'400px'}
        titleAlign="initial"
        description={item.description}
      />
    </Carousel.Slide>
  ))
  return (
    <Container size="lg" id="portfolio">
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
        styles={{ viewport: { overflow: 'unset', overflowX: 'clip' } }}
      >
        {data.length ? slides : <Carousel.Slide>{null}</Carousel.Slide>}
      </Carousel>
    </Container>
  )
}

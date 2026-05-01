import { Carousel } from '@mantine/carousel'
import { useMediaQuery } from '@mantine/hooks'
import { useEffect, useState } from 'react'
import { Container, Title, createStyles, useMantineColorScheme } from '@mantine/core'
import { GrNext } from 'react-icons/gr'
import { GrPrevious } from 'react-icons/gr'
import CustomButton from '@/components/Global/Button'
import CustomCard from '@/components/Global/Card'
import { getPortfolioData, PortfolioProject } from '@/lib/portfolio'
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
  },

  carouselWrapper: {
    position: 'relative',
    paddingBottom: '6rem'
  }
}))

export default function index() {
  const { classes } = useStyles()
  const { colorScheme } = useMantineColorScheme()
  const [data, setData] = useState<PortfolioProject[]>([])
  const isTabletSize = useMediaQuery('(max-width: 62em)')
  const isMobileSize = useMediaQuery('(max-width: 48em)')
  const buttonTextColor = colorScheme === 'dark' ? 'dark' : 'white.0'

  const getData = async () => {
    try {
      const payload = await getPortfolioData()
      setData(payload.projects ?? [])
    } catch (error) {
      setData(portfolioData.data)
    }
  }
  useEffect(() => {
    getData()
  }, [])

  const slides = data.map((item: PortfolioProject) => (
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
    <Container size="lg">
      <Title align="center" className={classes.title}>
        Latest Projects
      </Title>

      <div className={classes.carouselWrapper}>
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
          nextControlIcon={<GrNext size={22} />}
          previousControlIcon={<GrPrevious size={22} />}
          styles={theme => ({
            viewport: { overflow: 'unset', overflowX: 'clip' },
            controls: {
              insetInline: isTabletSize ? 8 : -18,
              ...(isMobileSize
                ? {
                    insetInline: 0,
                    bottom: -58,
                    top: 'auto',
                    justifyContent: 'center',
                    gap: theme.spacing.sm
                  }
                : {})
            },
            control: {
              width: 42,
              height: 42,
              border: 0,
              boxShadow: theme.shadows.md,
              backgroundColor: theme.colorScheme === 'dark' ? theme.colors.brand[0] : theme.white,
              color: theme.colorScheme === 'dark' ? theme.black : theme.black,
              opacity: 0.96,
              '&[data-inactive]': {
                opacity: 0,
                cursor: 'default'
              }
            },
            indicators: {
              bottom: isMobileSize ? -78 : -28
            },
            indicator: {
              width: 10,
              height: 10,
              backgroundColor: theme.colorScheme === 'dark' ? theme.colors.gray[5] : theme.colors.gray[5],
              transition: 'width 150ms ease, opacity 150ms ease',
              '&[data-active]': {
                width: 26,
                backgroundColor: theme.colorScheme === 'dark' ? theme.colors.brand[0] : theme.colors.brand[1]
              }
            }
          })}
        >
          {data.length ? slides : <Carousel.Slide>{null}</Carousel.Slide>}
        </Carousel>
      </div>
    </Container>
  )
}

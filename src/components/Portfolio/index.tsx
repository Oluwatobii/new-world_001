import { Carousel } from '@mantine/carousel'
import { useMediaQuery } from '@mantine/hooks'
import { useEffect, useState } from 'react'
import {
  Badge,
  Box,
  Container,
  Group,
  Paper,
  Stack,
  Text,
  Title,
  createStyles,
  useMantineColorScheme
} from '@mantine/core'
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
    [theme.fn.smallerThan('sm')]: {
      fontSize: theme.fontSizes.xl
    },
    [theme.fn.smallerThan('xs')]: {
      fontSize: theme.fontSizes.lg
    },

    '&::before': {
      content: '""',
      position: 'absolute',
      width: '15%',
      height: '4px',
      borderRadius: '4px',
      backgroundColor: theme.colorScheme === 'dark' ? '#39f758' : '#2CA941',
      bottom: 0,
      left: '50%',
      transform: 'translateX(-50%)',
      [theme.fn.smallerThan('md')]: {
        width: '22%',
        maxWidth: 180
      },
      [theme.fn.smallerThan('sm')]: {
        width: '32%',
        maxWidth: 140
      },
      [theme.fn.smallerThan('xs')]: {
        width: '36%',
        maxWidth: 120
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
  },
  flipCardRoot: {
    position: 'relative',
    perspective: 1000,
    transformStyle: 'preserve-3d',
    WebkitTransformStyle: 'preserve-3d'
  },
  flipCardInner: {
    position: 'relative',
    height: 450,
    transition: 'transform 420ms ease',
    transformStyle: 'preserve-3d',
    WebkitTransformStyle: 'preserve-3d',
    willChange: 'transform'
  },
  face: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backfaceVisibility: 'hidden',
    WebkitBackfaceVisibility: 'hidden',
    height: '100%',
    transform: 'translateZ(0)'
  },
  faceFront: {
    transform: 'rotateY(0deg) translateZ(0)'
  },
  faceBack: {
    transform: 'rotateY(180deg) translateZ(0)'
  },
  stackPanel: {
    height: 400,
    marginTop: 35,
    borderRadius: theme.radius.md,
    border: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]}`,
    padding: theme.spacing.lg,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    boxShadow: theme.shadows.lg,
    overflow: 'hidden'
  },
  stackHeader: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between'
  },
  stackLabel: {
    letterSpacing: 1.2,
    textTransform: 'uppercase'
  },
  stackCount: {
    fontWeight: 600
  },
  stackBadges: {
    gap: theme.spacing.xs
  },
  stackFooter: {
    marginTop: -28,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}))

export default function index() {
  const { classes } = useStyles()
  const { colorScheme } = useMantineColorScheme()
  const [data, setData] = useState<PortfolioProject[]>([])
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({})
  const isTabletSize = useMediaQuery('(max-width: 62em)')
  const isMobileSize = useMediaQuery('(max-width: 48em)')
  const buttonTextColor = colorScheme === 'dark' ? 'dark' : 'white.0'

  const toggleCard = (id: string) => {
    setFlippedCards(prev => ({ ...prev, [id]: !prev[id] }))
  }

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

  const slides = data.map((item: PortfolioProject) => {
    const stack = Array.isArray(item.stack) ? item.stack.filter(Boolean) : []
    const hasStack = stack.length > 0
    const isFlipped = hasStack && Boolean(flippedCards[item.id])

    return (
      <Carousel.Slide key={item.id}>
        <Box
          className={classes.flipCardRoot}
          onMouseEnter={() => hasStack && !isMobileSize && setFlippedCards(prev => ({ ...prev, [item.id]: true }))}
          onMouseLeave={() => hasStack && !isMobileSize && setFlippedCards(prev => ({ ...prev, [item.id]: false }))}
        >
          <Box
            className={classes.flipCardInner}
            sx={{
              transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
            }}
          >
            <Box className={`${classes.face} ${classes.faceFront}`} sx={{ pointerEvents: isFlipped ? 'none' : 'auto' }}>
              <CustomCard
                title={item.title}
                Button={
                  isMobileSize ? (
                    <Group spacing="xs">
                      <CustomButton
                        text="Launch"
                        textColor={buttonTextColor}
                        options={{ onClick: () => window.open(`${item.url ? item.url : '/'}`, '_blank') }}
                      />
                      {hasStack ? (
                        <CustomButton
                          text="Stack"
                          textColor={buttonTextColor}
                          options={{ onClick: () => toggleCard(item.id) }}
                        />
                      ) : null}
                    </Group>
                  ) : (
                    <CustomButton
                      text="Launch"
                      textColor={buttonTextColor}
                      options={{ onClick: () => window.open(`${item.url ? item.url : '/'}`, '_blank') }}
                    />
                  )
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
            </Box>

            {hasStack ? (
              <Box
                className={`${classes.face} ${classes.faceBack}`}
                sx={{ pointerEvents: isFlipped ? 'auto' : 'none' }}
              >
                <Paper
                  className={classes.stackPanel}
                  bg={colorScheme === 'dark' ? 'dark.7' : 'white'}
                  sx={{
                    backgroundImage: `linear-gradient(170deg, ${item.color}24 0%, transparent 55%)`
                  }}
                >
                  <Stack spacing="md">
                    <Box className={classes.stackHeader}>
                      <Box>
                        <Text size="xs" color="dimmed" className={classes.stackLabel}>
                          Technology
                        </Text>
                        <Title order={3}>{item.title} Stack</Title>
                      </Box>
                      <Text size="sm" color="dimmed" className={classes.stackCount}>
                        {stack.length} tools
                      </Text>
                    </Box>
                    <Group className={classes.stackBadges}>
                      {stack.map(tech => (
                        <Badge
                          key={`${item.id}-${tech}`}
                          variant="filled"
                          sx={{
                            backgroundColor: `${item.color}22`,
                            color: colorScheme === 'dark' ? '#fff' : '#1f2937',
                            border: `1px solid ${item.color}66`
                          }}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </Group>
                  </Stack>
                </Paper>
                <Box className={classes.stackFooter}>
                  <Group spacing="xs">
                    <CustomButton
                      text="Launch"
                      textColor={buttonTextColor}
                      options={{ onClick: () => window.open(`${item.url ? item.url : '/'}`, '_blank') }}
                    />
                    {isMobileSize ? (
                      <CustomButton
                        text="Overview"
                        textColor={buttonTextColor}
                        options={{ onClick: () => toggleCard(item.id) }}
                      />
                    ) : null}
                  </Group>
                </Box>
              </Box>
            ) : null}
          </Box>
        </Box>
      </Carousel.Slide>
    )
  })
  return (
    <Container size="lg">
      <Title align="center" className={classes.title}>
        Selected work
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

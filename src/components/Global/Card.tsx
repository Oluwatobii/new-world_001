import { Card, Text, createStyles, Box, Title, useMantineColorScheme } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

const useStyles = createStyles(theme => ({
  card: {
    display: 'flex',
    position: 'relative',
    marginTop: '35px',
    color: theme.colorScheme === 'dark' ? theme.colors.white : theme.colors.dark,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    transition: 'transform .22s ease, box-shadow .22s ease',
    overflow: 'hidden',
    backfaceVisibility: 'hidden',
    WebkitBackfaceVisibility: 'hidden',
    transform: 'translateZ(0)',
    width: '100%'
  },

  imageText: {
    fontSize: '1.8rem',
    fontWeight: 200,
    textTransform: 'uppercase',
    textAlign: 'center',
    position: 'absolute',
    top: '7rem',
    zIndex: 60,
    right: '0px',
    width: '55%',
    [theme.fn.smallerThan('sm')]: {
      fontSize: '1.15rem',
      top: '5.5rem'
    },
    [theme.fn.smallerThan('xs')]: {
      fontSize: '1rem',
      top: '5rem'
    }
  },

  text: {
    display: 'flex',
    alignItems: 'flex-start',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textAlign: 'initial',
    color: theme.colorScheme === 'dark' ? theme.colors.white : theme.colors.dark
  },

  title: {
    display: 'block',

    marginBottom: theme.spacing.xs / 2,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    color: theme.colorScheme === 'dark' ? theme.colors.white : theme.colors.dark,
    width: '100%',
    minHeight: 56,
    [theme.fn.smallerThan('sm')]: {
      minHeight: 44,
      fontSize: theme.fontSizes.lg
    },
    [theme.fn.smallerThan('xs')]: {
      minHeight: 40,
      fontSize: theme.fontSizes.md
    }
  },

  footer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '-28px'
  }
}))

interface CustomCardProps {
  Icon?: JSX.Element | null
  image?: string | null
  imageOverLayColor?: string
  title?: string
  titleAlign?: 'initial' | 'center'
  description?: string
  height?: string
  width?: string
  Button?: JSX.Element | null
  hover?: boolean
  others?: object
}

export default function CustomCard({
  Icon,
  image,
  imageOverLayColor,
  title,
  height = '350px',
  titleAlign = 'center',
  Button,
  hover = false,
  description,
  others = {}
}: CustomCardProps) {
  const { classes } = useStyles()
  const { colorScheme } = useMantineColorScheme()
  const textColor = colorScheme === 'dark' ? 'dark' : 'white.0'
  const isNarrow = useMediaQuery('(max-width: 48em)')
  const cardHeight =
    isNarrow && height ? `min(${height}, calc(100vw - 1.5rem))` : height

  return (
    <>
      <Card
        withBorder
        radius="md"
        shadow="xl"
        p={0}
        className={classes.card}
        {...others}
        sx={theme => {
          if (hover) {
            return {
              height: cardHeight,
              ...theme.fn.hover({
                transform: 'translateY(-4px)',
                boxShadow: theme.shadows.xl,
                color: theme.colorScheme === 'dark' ? theme.colors.white : theme.colors.dark,
                backgroundColor: theme.colorScheme === 'dark' ? theme.colors.brand[0] : theme.colors.brand[1]
              })
            }
          }
          return {
            height: cardHeight
          }
        }}
      >
        <Card.Section>
          <Box
            sx={() => {
              if (image) {
                return {
                  position: 'relative',
                  width: '100%',
                  '::before': {
                    content: '""',
                    position: 'absolute',
                    left: '0',
                    top: '0',
                    background: imageOverLayColor,
                    zIndex: 50,
                    width: '100%',
                    height: '100%',
                    opacity: 0.5,
                    pointerEvents: 'none'
                  }
                }
              }
              return {
                marginTop: Icon ? '55px' : '0px',
                textAlign: 'center'
              }
            }}
          >
            {image ? (
              <Text
                className={classes.imageText}
                sx={() => ({
                  background: imageOverLayColor,
                  color: textColor
                })}
              >
                {title}
              </Text>
            ) : null}
            {image ? (
              <Box
                component="img"
                src={image}
                alt={title || 'project image'}
                sx={theme => ({
                  width: '100%',
                  height: '180px',
                  display: 'block',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  [theme.fn.smallerThan('sm')]: {
                    height: 150
                  },
                  [theme.fn.smallerThan('xs')]: {
                    height: 132
                  }
                })}
              />
            ) : null}
            {Icon ? Icon : null}
          </Box>

          <Title
            className={classes.title}
            order={2}
            sx={theme => ({
              marginTop: image ? theme.spacing.xl : theme.spacing.md,
              textAlign: titleAlign
            })}
          >
            {title}
          </Title>

          <Text
            size="sm"
            color="dimmed"
            className={classes.text}
            lineClamp={4}
            sx={theme => ({
              marginTop: Icon ? '20px' : '0px',
              textAlign: 'left',
              lineHeight: 1.6,
              width: '100%',
              minHeight: 102,
              [theme.fn.smallerThan('sm')]: {
                minHeight: 76,
                fontSize: theme.fontSizes.xs
              },
              [theme.fn.smallerThan('xs')]: {
                minHeight: 68
              }
            })}
          >
            {description}
          </Text>
        </Card.Section>
      </Card>
      {Button ? <Box className={classes.footer}>{Button}</Box> : null}
    </>
  )
}

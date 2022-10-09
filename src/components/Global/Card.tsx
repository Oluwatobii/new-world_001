import { Card, Image, Text, createStyles, Box, Title, useMantineColorScheme } from '@mantine/core'

const useStyles = createStyles(theme => ({
  card: {
    display: 'flex',
    position: 'relative',
    marginTop: '35px',
    color: theme.colorScheme === 'dark' ? theme.colors.white : theme.colors.dark,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
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
    width: '55%'
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
    color: theme.colorScheme === 'dark' ? theme.colors.white : theme.colors.dark
  },

  footer: {
    position: 'absolute',
    top: '370px',
    left: '105px',
    zIndex: 100
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

  return (
    <Box>
      <Card
        withBorder
        radius="md"
        shadow="xl"
        className={classes.card}
        {...others}
        sx={theme => {
          if (hover) {
            return {
              height: height,
              ...theme.fn.hover({
                color: theme.colorScheme === 'dark' ? theme.colors.white : theme.colors.dark,
                backgroundColor: theme.colorScheme === 'dark' ? theme.colors.brand[0] : theme.colors.brand[1]
              })
            }
          }
          return {
            height: height
          }
        }}
      >
        <Card.Section>
          <Box
            sx={() => {
              if (image) {
                return {
                  '::before': {
                    content: '""',
                    position: 'absolute',
                    left: '0',
                    top: '0',
                    background: imageOverLayColor,
                    zIndex: 50,
                    width: '100%',
                    height: '45%',
                    opacity: 0.5
                  }
                }
              }
              return {
                marginTop: Icon ? '55px' : '0px'
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
            {image ? <Image src={image} height={180} /> : null}
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
            sx={() => ({
              marginTop: Icon ? '20px' : '0px'
            })}
          >
            {description}
          </Text>
        </Card.Section>
        {Button ? <Box className={classes.footer}>{Button}</Box> : null}
      </Card>
    </Box>
  )
}

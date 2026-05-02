import { BackgroundImage, createStyles, Box, Container, Title, useMantineColorScheme } from '@mantine/core'
import CustomButton from '@/components/Global/Button'
import resumePath from '@/assets/images/resume-backgnd.png'
import { api } from '@/lib/api'

const useStyles = createStyles(theme => ({
  wrapper: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: '20px',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2
  },
  image: {
    position: 'relative',
    marginTop: '3rem',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,
    overflow: 'hidden',
    '::before': {
      content: '""',
      position: 'absolute',
      inset: 0,
      zIndex: 0,
      background: theme.colorScheme === 'dark' ? theme.colors.brand[0] : theme.colors.brand[1],
      opacity: 0.59,
      pointerEvents: 'none'
    }
  },
  imageContent: {
    position: 'relative',
    zIndex: 1
  }
}))

export default function index() {
  const { classes } = useStyles()
  const { colorScheme } = useMantineColorScheme()
  const buttonTextColor = colorScheme === 'dark' ? 'dark' : 'white.0'

  return (
    <Box className={classes.wrapper}>
      <BackgroundImage src={resumePath} radius="xs" className={classes.image}>
        <Container
          className={classes.imageContent}
          size="sm"
          sx={theme => ({
            marginTop: '3rem',
            paddingLeft: theme.spacing.md,
            paddingRight: theme.spacing.md,
            paddingTop: theme.spacing.xl * 2,
            paddingBottom: theme.spacing.xl * 2
          })}
        >
          <Title
            align="center"
            sx={() => ({
              marginTop: '3rem',
              color: 'black',
              fontWeight: 700
            })}
          >
            Download résumé
          </Title>

          <Box
            sx={theme => ({
              marginTop: '4.5rem',
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
              cursor: 'pointer',
              [theme.fn.smallerThan('sm')]: {
                marginTop: theme.spacing.xl
              }
            })}
          >
            <CustomButton
              text="Download"
              textColor={buttonTextColor}
              options={{
                component: 'a',
                href: api.resume,
                target: '_blank',
                rel: 'noopener noreferrer',
                sx: { width: 'fit-content' }
              }}
            />
          </Box>
        </Container>
      </BackgroundImage>
    </Box>
  )
}

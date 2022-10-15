import React, { useEffect, useRef, Suspense } from 'react'
import { Text, Box, Image, useMantineColorScheme } from '@mantine/core'
import lottie from 'lottie-web'
import LightModeRobotAnimationData from './LightModeRobot.json'
import DarkModeRobotAnimationData from './DarkModeRobot.json'
import lightModeFallBackImage from '../../images/light-mode-robot.png'
import darkModeFallBackImage from '../../images/dark-mode-robot.png'

const DefautImage: React.FC = () => {
  const { colorScheme } = useMantineColorScheme()
  const source = colorScheme === 'dark' ? darkModeFallBackImage : lightModeFallBackImage

  return (
    <Box style={{ height: '150px', width: '250px', marginTop: '-200px' }}>
      <Image
        src={source}
        alt="With custom placeholder"
        withPlaceholder
        placeholder={<Text align="center">This Section contains a Robot Animation using Lottie</Text>}
      />
    </Box>
  )
}

const LightModeAnimation = () => {
  const rendered = useRef<Boolean>(true)
  const container = useRef<HTMLDivElement>(null)

  const light = JSON.parse(JSON.stringify(LightModeRobotAnimationData))

  useEffect(() => {
    if (rendered.current) {
      rendered.current = false
      lottie.loadAnimation({
        name: 'robot-light',
        container: container.current as HTMLDivElement,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: light
      })
    }
  }, [])

  return <Box ref={container} style={{ height: '400px', width: '400px', marginTop: '-60px' }}></Box>
}

const DarkModeAnimation = () => {
  const rendered = useRef<Boolean>(true)
  const container = useRef<HTMLDivElement>(null)

  const dark = JSON.parse(JSON.stringify(DarkModeRobotAnimationData))

  useEffect(() => {
    if (rendered.current) {
      rendered.current = false
      lottie.loadAnimation({
        name: 'robot-dark',
        container: container.current as HTMLDivElement,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: dark
      })
    }
  }, [])

  return <Box ref={container} style={{ height: '400px', width: '400px', marginTop: '-60px' }}></Box>
}

const RobotAnimation: React.FC = () => {
  const { colorScheme } = useMantineColorScheme()

  return (
    <Box component="section">
      <Suspense fallback={<DefautImage />}>
        {colorScheme === 'dark' ? <DarkModeAnimation /> : <LightModeAnimation />}
        {/* <DefautImage /> */}
      </Suspense>
    </Box>
  )
}

export default RobotAnimation

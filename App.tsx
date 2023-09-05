import 'react-native-gesture-handler'
import { useEffect } from 'react'
import { useColorScheme } from 'react-native'
import { useFonts } from 'expo-font'
import { TamaguiProvider, Text, Theme, YStack } from 'tamagui'
import * as SplashScreen from 'expo-splash-screen'

import Routes from './src/routes'
import config from './tamagui.config'
import Login from './src/screens/Login'

export default function App() {

  const colorScheme = useColorScheme()

  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  })

  useEffect(() => {
    const prepare = async () => {
      await SplashScreen.preventAutoHideAsync()
    }
    prepare()
  }, []);
  
  if (!loaded) {
    return null
  } else {
    SplashScreen.hideAsync()
  }

  return (
    <TamaguiProvider config={config}>
      <Theme name={colorScheme !== 'dark' ? 'dark' : 'light'}>
          <Routes/>
      </Theme>
    </TamaguiProvider>
  )
}

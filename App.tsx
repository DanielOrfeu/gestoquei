import 'react-native-gesture-handler'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react'
import { Text, View, useColorScheme } from 'react-native'
import { 
  useFonts, 
  Poppins_300Light, 
  Poppins_400Regular, 
  Poppins_500Medium, 
  Poppins_600SemiBold, 
  Poppins_700Bold
} from '@expo-google-fonts/poppins'
import Routes from './src/routes'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import UserService from './src/services/User'

export default function App() {

  // const colorScheme = useColorScheme()

  const [loaded] = useFonts({
    Poppins_300Light, 
    Poppins_400Regular, 
    Poppins_500Medium, 
    Poppins_600SemiBold, 
    Poppins_700Bold
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
    <SafeAreaProvider className='bg-slate-200 flex flex-1 w-full'>
      <Routes/>
    </SafeAreaProvider>
  )
}

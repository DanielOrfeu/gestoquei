import 'react-native-gesture-handler';
import { ThemeProvider } from 'styled-components';
import { 
  useFonts, 
  Poppins_300Light,
  Poppins_400Regular, 
  Poppins_500Medium, 
  Poppins_700Bold 
} from '@expo-google-fonts/poppins';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

import Login from './src/screens/Login';
import light from './src/theme/light';
import Routes from './src/routes';

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  useEffect(() => {
    const prepare = async () => {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);
  
  if (!fontsLoaded) {
    return null
  } else {
    SplashScreen.hideAsync();
  }

  return (
    <ThemeProvider theme={light}>
        <Routes/>
    </ThemeProvider>
  );
}



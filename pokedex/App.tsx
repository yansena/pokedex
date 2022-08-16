import React from 'react';
import { NativeBaseProvider, StatusBar } from 'native-base';
import { useFonts, Roboto_400Regular, Roboto_700Bold, Roboto_900Black } from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';

import { THEME } from './src/styles/theme';
import { Home } from './src/views/Home';

export default function App() {

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    Roboto_900Black
  });

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar barStyle='dark-content' backgroundColor="transparent" translucent/>
      { fontsLoaded ? <Home/> : <AppLoading/>}
    </NativeBaseProvider>
  );
}


import 'react-native-gesture-handler';

import React from 'react';

import { AppLoading } from 'expo';
import { StatusBar } from 'expo-status-bar';
import {
  useFonts,
  Cairo_300Light,
  Cairo_400Regular,
  Cairo_600SemiBold,
  Cairo_700Bold,
} from '@expo-google-fonts/cairo';

import Routes from './src/routes';

export default function App() {
  let [fontsLoaded] = useFonts({
    Cairo_300Light,
    Cairo_400Regular,
    Cairo_600SemiBold,
    Cairo_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar style="light" translucent={false} backgroundColor='#416CD9'/>
      <Routes />
    </>
  );
}

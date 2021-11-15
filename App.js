import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AppNavigation from './src/config/navigation';
import { useFonts } from 'expo-font';

export default function App() {
  const [loaded] = useFonts({
    Lato: require('./src/assets/fonts/Lato-Regular.ttf'),
    LatoLight: require('./src/assets/fonts/Lato-Light.ttf'),
    LatoBold: require('./src/assets/fonts/Lato-Bold.ttf'),
  });
  
  if (!loaded) {
    return null;
  }
  return (
    <AppNavigation />
  );
}
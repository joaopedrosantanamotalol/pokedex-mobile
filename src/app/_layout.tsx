import { Stack } from 'expo-router';
import { useFonts } from 'expo-font';

import { AuthProvider } from './authContext';

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Pokemon: require('../assets/fonts/PixelifySans-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <AuthProvider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{ title: 'Início', headerShown: false }}
        />

        <Stack.Screen
          name="pokedex"
          options={{ title: 'PokePoke', headerShown: false }}
        />

        <Stack.Screen
          name="login"
          options={{ title: 'Login', headerShown: false }}
        />

        <Stack.Screen
          name="team"
          options={{ title: 'Time', headerShown: false }}
        />
      </Stack>
    </AuthProvider>
  );
}
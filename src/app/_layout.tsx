import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Início', headerShown:false }} />
<<<<<<< HEAD
      <Stack.Screen name="Pokedex" options={{ title: 'PokePoke', headerShown:false }} />
      <Stack.Screen name="login" options={{title: 'Login', headerShown:false }} />
=======
      <Stack.Screen name="pokedex" options={{ title: 'PokePoke', headerShown:false }} />
>>>>>>> 1077b693a2ff44556bab57b5e2f2dac0a4fd74f3
    </Stack>
  );
}
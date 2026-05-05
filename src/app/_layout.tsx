import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Início', headerShown:false }} />
      <Stack.Screen name="Pokedex" options={{ title: 'PokePoke', headerShown:false }} />
    </Stack>
  );
}
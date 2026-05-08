import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import Navbar from '../components/navbar/Navbar';
import { Redirect } from 'expo-router';
import { useAuth } from './authContext';

import CardPokemonGiratina from '../components/cards/CardPokemonGiratina';
import CardPokemonPalkia from '../components/cards/CardPokemonPalkia';
import CardPokemonDialga from '../components/cards/CardPokemonDialga';
import CardPokemonMewTwo from '../components/cards/CardPokemonMewTwo';
import CardPokemonZekrom from '../components/cards/CardPokemonZekrom';

import {
  ScrollView,
  View,
  StyleSheet,
  ImageBackground,
} from 'react-native';

export default function Pokedex() {

  const { authenticated } = useAuth();

if (!authenticated) {
  return <Redirect href="/login" />;
}

  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <ImageBackground
        source={require('../assets/images/background.jpg')}
        style={styles.background}
        resizeMode="cover"
      >
        <Navbar />

        <SafeAreaView style={styles.safeArea}>
          {/* overlay transparente */}
          <View style={styles.overlay} />

          <ScrollView contentContainerStyle={styles.scrollContent}>
            <View style={styles.container}>
              <CardPokemonGiratina />
              <CardPokemonPalkia />
              <CardPokemonDialga />
              <CardPokemonMewTwo />
              <CardPokemonZekrom />
            </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },

  safeArea: {
    flex: 1,
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255,255,255,0.45)',
  },

  scrollContent: {
    paddingVertical: 20,
  },

  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',

    gap: 50,
    padding: 20,
  },
});
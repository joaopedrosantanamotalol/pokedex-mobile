import { useState, useEffect } from 'react';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import Navbar from '../components/navbar/Navbar';
import { Redirect } from 'expo-router';
import { useAuth } from './authContext';
import { getPokemons } from '../integration/pokemonIntregation';
import { Pokemon } from '../@types/pokemon';

import CardPokemon from '../components/cards/CardComponent';
import {
  ScrollView,
  View,
  StyleSheet,
  ImageBackground,
  ActivityIndicator,
  Text,
} from 'react-native';

// Cores por tipo — mesma paleta usada em jogos oficiais
const TIPO_CORES: Record<string, string> = {
  fire: '#F08030',
  water: '#6890F0',
  grass: '#78C850',
  electric: '#F8D030',
  psychic: '#F85888',
  ice: '#98D8D8',
  dragon: '#7038F8',
  dark: '#705848',
  fairy: '#EE99AC',
  fighting: '#C03028',
  flying: '#A890F0',
  poison: '#A040A0',
  ground: '#E0C068',
  rock: '#B8A038',
  bug: '#A8B820',
  ghost: '#705898',
  steel: '#B8B8D0',
  normal: '#A8A878',
};

const corDoPokemon = (tipos: string[]): string =>
  TIPO_CORES[tipos[0]] ?? '#A8A878';

export default function Pokedex() {
  const { authenticated } = useAuth();

  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState<string | null>(null);

  useEffect(() => {
    getPokemons(151)
      .then(setPokemons)
      .catch(() => setErro('Falha ao carregar os Pokémons. Tente novamente.'))
      .finally(() => setCarregando(false));
  }, []);

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
          <View style={styles.overlay} />

          <ScrollView contentContainerStyle={styles.scrollContent}>
            {carregando && (
              <ActivityIndicator size="large" color="#B22222" style={{ marginTop: 40 }} />
            )}

            {erro && (
              <Text style={styles.erro}>{erro}</Text>
            )}

            {!carregando && !erro && (
              <View style={styles.container}>
                {pokemons.map((pokemon) => (
                  <CardPokemon
                    key={pokemon.index}
                    pokemon={pokemon}
                    corCard={corDoPokemon(pokemon.tipos)}
                  />
                ))}
              </View>
            )}
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

  erro: {
    textAlign: 'center',
    marginTop: 40,
    color: '#B22222',
    fontSize: 16,
    fontFamily: 'Pokemon',
  },
});

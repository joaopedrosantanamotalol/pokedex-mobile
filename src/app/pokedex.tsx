import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import Navbar from '../components/navbar/Navbar';
import { Redirect } from 'expo-router';
import { useAuth } from './authContext';

import CardPokemon from '../components/cards/CardComponent';
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


const pokemons = [
  {
    index: "150",
    nome: "Mewtwo",
    imagem:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png",
    tipos: ["Psíquico"],
    stats: {
      hp: 106,
      atk: 110,
      def: 90,
      spd: 130,
      spa: 154,
      spdDef: 90,
    },
    descricao: "Seu DNA é quase idêntico ao de Mew.",
  },

  {
    index: "483",
    nome: "Dialga",
    imagem:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/483.png",
    tipos: ["Aço", "Dragão"],
    stats: {
      hp: 100,
      atk: 120,
      def: 120,
      spd: 90,
      spa: 150,
      spdDef: 100,
    },
    descricao: "Possui incríveis habilidades de controle temporal.",
  },

  {
    index: "487",
    nome: "Giratina",
    imagem:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/487.png",
    tipos: ["Fantasma", "Dragão"],
    stats: {
      hp: 150,
      atk: 100,
      def: 120,
      spd: 90,
      spa: 100,
      spdDef: 120,
    },
    descricao:
      "Diz-se que este Pokémon vive em um mundo inverso ao nosso.",
  },
];

            <View style={styles.container}>
  {pokemons.map((pokemon) => (
    <CardPokemon
      key={pokemon.index}
      pokemon={pokemon}
      corCard="#B22222"
      descricao={pokemon.descricao}
    />
  ))}
</View>

              <CardPokemon
  corCard="#B22222"
  pokemon={{
    index: "150",
    nome: "Mewtwo",
    imagem:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png",
    tipos: ["Psíquico"],
    poderes: [
      {
        nome: "Confusão",
        forca: 50,
      },
      {
        nome: "Psíquico",
        forca: 90,
      },
      {
        nome: "Aura Sphere",
        forca: 80,
      },
    ],
  }}
/>


              <CardPokemon
  corCard="#B22222"
  pokemon={{
    index: "150",
    nome: "Mewtwo",
    imagem:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png",
    tipos: ["Psíquico"],
    poderes: [
      {
        nome: "Confusão",
        forca: 50,
      },
      {
        nome: "Psíquico",
        forca: 90,
      },
      {
        nome: "Aura Sphere",
        forca: 80,
      },
    ],
  }}
/>

            <CardPokemon
  corCard="#B22222"
  pokemon={{
    index: "150",
    nome: "Mewtwo",
    imagem:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png",
    tipos: ["Psíquico"],
    poderes: [
      {
        nome: "Confusão",
        forca: 50,
      },
      {
        nome: "Psíquico",
        forca: 90,
      },
      {
        nome: "Aura Sphere",
        forca: 80,
      },
    ],
  }}
/>

  <CardPokemon
  pokemon={pokemon}
  corCard="#B22222"
  descricao="Possui incríveis habilidades de controle temporal."
/>

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
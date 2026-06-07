import { useState, useEffect } from 'react';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Platform,
} from 'react-native';
import Navbar from '../components/navbar/Navbar';
import { Pokemon } from '../@types/pokemon';

const fetchPokemon = async (id: number): Promise<Pokemon> => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await res.json();

  const getStat = (nome: string) =>
    data.stats.find((s: any) => s.stat.name === nome)?.base_stat ?? 0;

  return {
    index: data.id.toString().padStart(3, '0'),
    nome: data.name,
    imagem: data.sprites.front_default,
    tipos: data.types.map((t: any) => t.type.name),
    stats: {
      hp:     getStat('hp'),
      atk:    getStat('attack'),
      def:    getStat('defense'),
      spd:    getStat('speed'),
      spa:    getStat('special-attack'),
      spdDef: getStat('special-defense'),
    },
  };
};

const sortearIds = (quantidade: number, excluir: number[] = []): number[] => {
  const ids: number[] = [];
  while (ids.length < quantidade) {
    const id = Math.floor(Math.random() * 151) + 1;
    if (!ids.includes(id) && !excluir.includes(id)) ids.push(id);
  }
  return ids;
};

const TIPOS_PT: Record<string, string> = {
  normal: 'Normal', fire: 'Fogo', water: 'Água', electric: 'Elétrico',
  grass: 'Planta', ice: 'Gelo', fighting: 'Lutador', poison: 'Veneno',
  ground: 'Terra', flying: 'Voador', psychic: 'Psíquico', bug: 'Inseto',
  rock: 'Pedra', ghost: 'Fantasma', dragon: 'Dragão', dark: 'Sombrio',
  steel: 'Aço', fairy: 'Fada',
};

const TIPO_CORES: Record<string, string> = {
  normal: '#A8A878', fire: '#F08030', water: '#6890F0', electric: '#F8D030',
  grass: '#78C850', ice: '#98D8D8', fighting: '#C03028', poison: '#A040A0',
  ground: '#E0C068', flying: '#A890F0', psychic: '#F85888', bug: '#A8B820',
  rock: '#B8A038', ghost: '#705898', dragon: '#7038F8', dark: '#705848',
  steel: '#B8B8D0', fairy: '#EE99AC',
};

function MiniCard({
  pokemon,
  onPress,
  rotulo,
}: {
  pokemon: Pokemon;
  onPress?: () => void;
  rotulo?: string;
}) {
  const cor = TIPO_CORES[pokemon.tipos[0]] ?? '#A8A878';

  return (
    <TouchableOpacity
      style={[styles.miniCard, { borderColor: cor }]}
      onPress={onPress}
      activeOpacity={onPress ? 0.7 : 1}
    >
      {rotulo ? <Text style={[styles.rotulo, { color: cor }]}>{rotulo}</Text> : null}

      <Image source={{ uri: pokemon.imagem }} style={styles.miniImagem} />

      <Text style={styles.miniNome} numberOfLines={1}>
        {pokemon.nome.toUpperCase()}
      </Text>

      <View style={styles.miniTipos}>
        {pokemon.tipos.map((tipo, i) => (
          <View key={i} style={[styles.miniTipo, { backgroundColor: cor }]}>
            <Text style={styles.miniTipoTexto}>{TIPOS_PT[tipo] ?? tipo}</Text>
          </View>
        ))}
      </View>
    </TouchableOpacity>
  );
}

export default function Team() {
  const [time, setTime] = useState<Pokemon[]>([]);
  const [opcoes, setOpcoes] = useState<Pokemon[]>([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const carregar = async () => {
      setCarregando(true);

      const idsTime = sortearIds(5);
      const idsOpcoes = sortearIds(25, idsTime);

      const [pokemonsTime, pokemonsOpcoes] = await Promise.all([
        Promise.all(idsTime.map(fetchPokemon)),
        Promise.all(idsOpcoes.map(fetchPokemon)),
      ]);

      setTime(pokemonsTime);
      setOpcoes(pokemonsOpcoes);
      setCarregando(false);
    };

    carregar();
  }, []);

  const adicionarAoTime = (pokemon: Pokemon) => {
  if (time.length >= 5) {
    const removido = time[0];

    const novoTime = [...time.slice(1), pokemon];

    const novasOpcoes = opcoes.map((p) =>
      p.index === pokemon.index ? removido : p
    );

    setTime(novoTime);
    setOpcoes(novasOpcoes);
  }
};

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

          <ScrollView contentContainerStyle={styles.scroll}>

            <Text style={styles.secaoTitulo}>Meu Time</Text>

            {carregando ? (
              <ActivityIndicator color="#A82223" size="large" style={{ marginVertical: 20 }} />
            ) : (
              <View style={styles.grade}>
                {time.map((pokemon) => (
                  <MiniCard key={pokemon.index} pokemon={pokemon} />
                ))}
              </View>
            )}

            <Text style={styles.secaoTitulo}>Disponíveis</Text>

            {carregando ? (
              <ActivityIndicator color="#A82223" size="large" style={{ marginVertical: 20 }} />
            ) : (
              <View style={styles.grade}>
                {opcoes.map((pokemon) => (
                  <MiniCard
                    key={pokemon.index}
                    pokemon={pokemon}
                    onPress={() => adicionarAoTime(pokemon)}
                    rotulo="+ Time"
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

  scroll: {
    padding: 20,
    paddingBottom: 40,
  },

  secaoTitulo: {
    fontFamily: 'Pokemon',
    fontSize: Platform.select({ web: 25, default: 18 }),
    color: '#A82223',
    marginTop: 24,
    marginBottom: 8,
    textAlign: 'center',
  },


  grade: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 12,
  },

  miniCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    borderWidth: 2,
    alignItems: 'center',
    padding: 10,
    width: Platform.select({ web: 130, default: 105 }),

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
    elevation: 4,
  },

  rotulo: {
    fontFamily: 'Pokemon',
    fontSize: 9,
    marginBottom: 2,
  },

  miniImagem: {
    width: 72,
    height: 72,
    resizeMode: 'contain',
  },

  miniNome: {
    fontFamily: 'Pokemon',
    fontSize: Platform.select({ web: 11, default: 9 }),
    color: '#333',
    marginTop: 4,
    textAlign: 'center',
  },

  miniTipos: {
    flexDirection: 'row',
    gap: 4,
    marginTop: 6,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },

  miniTipo: {
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },

  miniTipoTexto: {
    color: 'white',
    fontSize: 8,
    fontFamily: 'Pokemon',
  },
});
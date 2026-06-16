import { useState, useEffect } from 'react';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import CardPokemon from '@/components/cards/CardComponent';

import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Image,
  ActivityIndicator,
  Platform,
} from 'react-native';

import Navbar from '../components/navbar/Navbar';
import { useAuth } from './authContext';
import { getTeam } from '../services/teamService';
import { TeamPokemon } from '@/@types/pokemon';

type Pokemon = {
  index: string;
  name: string;
  image: string;
  types: string[];
};

function montarStats(abilities: any[]) {
  return {
    hp: abilities.find(a => a.name === 'hp')?.strength ?? 0,
    atk: abilities.find(a => a.name === 'attack')?.strength ?? 0,
    def: abilities.find(a => a.name === 'defense')?.strength ?? 0,
    spa: abilities.find(a => a.name === 'special-attack')?.strength ?? 0,
    spdDef: abilities.find(a => a.name === 'special-defense')?.strength ?? 0,
    spd: abilities.find(a => a.name === 'speed')?.strength ?? 0,
  };
}

export default function Team() {
  const { userId } = useAuth();

  const [team, setTeam] = useState<TeamPokemon[]>([]);
  const [captured, setCaptured] = useState<TeamPokemon[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      if (!userId) return;

      try {
        setLoading(true);

        const res = await getTeam(userId);
        console.log(JSON.stringify(res, null, 2));
        console.log('API DATA:', res);

        setTeam(res?.team ?? []);
        setCaptured(res?.capture ?? []);

      } catch (err) {
        console.log('Erro:', err);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [userId]);

  if (loading) {
    return (
      <ActivityIndicator
        size="large"
        color="#A82223"
        style={{ marginTop: 40 }}
      />
    );
  }

  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <ImageBackground
        source={require('../assets/images/background.jpg')}
        style={styles.bg}
        resizeMode="cover"
      >
        <Navbar />

        <SafeAreaView style={styles.safe}>
          <View style={styles.overlay} />

          <ScrollView contentContainerStyle={styles.container}>

            <Text style={styles.title}>Team</Text>

             <View style={styles.grid}>
              {
                team.length > 0
                  ? team.map((p) => (
                      <CardPokemon
                        key={p.index}
                        corCard="darkred"
                        pokemon={{
                          index: p.index,
                          nome: p.name,
                          imagem: p.image,
                          tipos: p.types,
                          descricao: '',
                          stats: 
                            montarStats(p.abilities),
                        }}
                      />
                    ))
                  : <Text>Nenhum Pokémon no time</Text>
              }
            </View>

          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    width: '100%',
    height: '100%',
  },

  safe: {
    flex: 1,
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255,255,255,0.45)',
  },

  container: {
    padding: 20,
    paddingBottom: 40,
  },

  title: {
    fontFamily: 'Pokemon',
    fontSize: Platform.select({ web: 26, default: 18 }),
    color: '#A82223',
    textAlign: 'center',
    marginVertical: 20,
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 12,
  },

  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    borderWidth: 2,
    alignItems: 'center',
    padding: 10,
    width: Platform.select({ web: 130, default: 110 }),
    elevation: 4,
  },

  image: {
    width: 72,
    height: 72,
    resizeMode: 'contain',
  },

  name: {
    fontFamily: 'Pokemon',
    fontSize: 10,
    marginTop: 6,
    color: '#333',
  },

  types: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 6,
    gap: 4,
  },

  type: {
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },

  typeText: {
    fontSize: 8,
    color: 'white',
    fontFamily: 'Pokemon',
  },
});
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  Platform,
} from 'react-native';
import Navbar from '../components/navbar/Navbar';

const vitorias = 8;
const derrotas = 2;
const total = vitorias + derrotas;

export default function Perfil() {
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

          <View style={styles.container}>
            <View style={styles.card}>

              <Image
                source={require('../assets/images/Avatar.png')} 
                style={styles.avatar}
              />


              <Text style={styles.nome}>Ash</Text>
              <Text style={styles.subtitulo}>TREINADOR POKÉMON</Text>

            
              <View style={styles.statsBox}>

                <View style={styles.statRow}>
                  <Text style={styles.statLabel}> Vitórias</Text>
                  <Text style={[styles.statValor, styles.verde]}>{vitorias}</Text>
                </View>

                <View style={styles.divisor} />

                <View style={styles.statRow}>
                  <Text style={styles.statLabel}> Derrotas</Text>
                  <Text style={[styles.statValor, styles.vermelho]}>{derrotas}</Text>
                </View>

                <View style={styles.divisor} />

                <View style={styles.statRow}>
                  <Text style={styles.statLabel}> Batalhas</Text>
                  <Text style={styles.statValor}>{total}</Text>
                </View>

              </View>
            </View>
          </View>
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

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  card: {
    backgroundColor: 'rgba(119, 4, 4, 0.77)',
    borderRadius: 20,
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 30,
    width: Platform.select({ web: 420, default: 300 }),

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 10,
    elevation: 10,
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 3,
    borderColor: '#A82223',
    marginBottom: 14,
  },

  nome: {
    fontFamily: 'Pokemon',
    fontSize: Platform.select({ web: 28, default: 22 }),
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 4,
  },

  subtitulo: {
    fontFamily: 'Pokemon',
    fontSize: Platform.select({ web: 13, default: 11 }),
    color: '#c4c4c4',
    letterSpacing: 2,
    marginBottom: 24,
  },

  statsBox: {
    backgroundColor: 'rgba(255,255,255,0.07)',
    borderRadius: 12,
    width: '100%',
    paddingVertical: 6,
    paddingHorizontal: 16,
  },

  statRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },

  statLabel: {
    fontFamily: 'Pokemon',
    fontSize: Platform.select({ web: 15, default: 13 }),
    color: '#ffffffc4',
  },

  statValor: {
    fontFamily: 'Pokemon',
    fontSize: Platform.select({ web: 16, default: 14 }),
    color: 'white',
    fontWeight: 'bold',
  },

  verde: {
    color: '#4ac04e',
  },

  vermelho: {
    color: '#fa483c',
  },

  divisor: {
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
});
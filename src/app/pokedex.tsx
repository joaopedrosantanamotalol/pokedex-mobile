import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import Navbar from '../components/navbar/Navbar';
import { Redirect } from 'expo-router';
import { useAuth } from './authContext';

import Card from '../components/cards/CardComponent';
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

              <Card

              nome="DIALGA"
              imagem={require('../assets/images/Dialga.png')}
              descricao="Possui incríveis habilidades de controle temporal."
              corCard="#A82223"
              tipos={[
              { nome: 'AÇO', cor: 'gray' },
              { nome: 'DRAGÃO', cor: 'orange' },
              ]}
              />

              <Card

              nome="MEWTWO"
              imagem={require('../assets/images/MewTwo.png')}
              descricao="Seu DNA é quase idêntico ao de Mew. No entanto, seu tamanho e temperamento são muito diferentes."
              corCard="#A82223"
              tipos={[
              { nome: 'PSÍQUICO', cor: 'pink' },
              ]}
              />


              <Card

              nome="GIRATINA"
              imagem={require('../assets/images/giratina.png')}
              descricao="Diz-se que este Pokémon vive em um mundo inverso ao nosso, onde o conhecimento comum é distorcido e estranho."
              corCard="#A82223"
              tipos={[
              { nome: 'FANTASMA', cor: 'purple' },
              { nome: 'DRAGÃO', cor: 'orange' },
              ]}
              />

              <Card

              nome="PALKIA"
              imagem={require('../assets/images/palkia.png')}
              descricao="Possui a capacidade de distorcer o espaço. É descrito como uma divindade na mitologia da região de Sinnoh."
              corCard="#A82223"
              tipos={[
              { nome: 'AGUA', cor: 'light_blue' },
              { nome: 'DRAGÃO', cor: 'orange' },
              ]}
              />

              <Card

              nome="ZEKROM"
              imagem={require('../assets/images/zekrom.png')}
              descricao="Este Pokémon lendário pode incendiar o mundo com raios. Ele auxilia aqueles que desejam construir um mundo ideal."
              corCard="#A82223"
              tipos={[
              { nome: 'DRAGÃO', cor: 'orange' },
              { nome: 'ELÉTRICO', cor: 'yellow' },
              ]}
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
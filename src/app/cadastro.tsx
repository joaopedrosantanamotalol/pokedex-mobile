import { useState } from 'react';

import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { useAuth } from './authContext';

import {
  Text,
  StyleSheet,
  View,
  Platform,
  ImageBackground,
  Alert,
} from 'react-native';

import Input from '../components/input';
import Button from '../components/button';

import { useRouter } from 'expo-router';

import Navbar from '../components/navbar/Navbar';
import { Card } from '../components/card/index';

export default function Cadastro() {
  const router = useRouter();
  const { login } = useAuth();

  const [nome, setNome] = useState('');
  const [senha2, setSenha2] = useState('');
  const [senha, setSenha] = useState('');

async function validateRegister() {
  if (
    senha === senha2 &&
    senha !== null &&
    senha.trim() !== ""
  ) {
    await login();
    router.replace('/login');
  } else {
    if (Platform.OS === 'web') {
      window.alert('As senhas são inválidas.');
    } else {
      Alert.alert('Erro', 'As senhas são inválidas.');
    }
  }
}

  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <ImageBackground
        source={require('../assets/images/background.jpg')}
        style={styles.background}
        resizeMode="cover"
      >
        <Navbar />

        <SafeAreaView style={styles.container}>
          <View style={styles.overlay} />

          <View style={styles.cardWrapper}>
            <Card>
              <Text style={styles.title}>Comece a sua jornada !</Text>

              <Input
                nome={nome}
                senha={senha}
                senha2={senha2}
                setSenha2={setSenha2}
                setNome={setNome}
                setSenha={setSenha}
              />

              <Button
                onPress={validateRegister}
                title="ENTRAR"
                style={{ marginTop: 10 }}
              />
            </Card>
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

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    padding: Platform.select({
      web: 40,
      default: 20,
    }),
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255,255,255,0.65)',
  },
cardWrapper: {
  width: '100%',
  maxWidth: 420,
},

  title: {
    fontSize: Platform.select({
      web: 26,
      default: 22,
    }),

    fontFamily: 'Pokemon',
    fontWeight: 'bold',
    textAlign: 'center',

    marginBottom: Platform.select({
      web: 20,
      default: 12,
    }),

    color: '#A82223',
  },
});
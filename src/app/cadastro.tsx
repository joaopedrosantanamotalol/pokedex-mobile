import { useState } from 'react';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { useAuth } from './authContext';
import { register } from '../services/authService';
import {
  Text, StyleSheet, View, Platform, ImageBackground, Alert, TouchableOpacity,
} from 'react-native';
import Input from '../components/input';
import Button from '../components/button';
import { useRouter } from 'expo-router';
import Navbar from '../components/navbar/Navbar';
import { Card } from '../components/card/index';

export default function Cadastro() {
  const router    = useRouter();
  const { login } = useAuth();

  const [nome, setNome]       = useState('');
  const [senha, setSenha]     = useState('');
  const [senha2, setSenha2]   = useState('');
  const [loading, setLoading] = useState(false);

  async function handleRegister() {
    if (!nome.trim()) {
      const msg = 'Informe um nome de treinador.';
      Platform.OS === 'web' ? window.alert(msg) : Alert.alert('Erro', msg);
      return;
    }
    if (!senha.trim() || senha !== senha2) {
      const msg = 'As senhas não coincidem ou estão vazias.';
      Platform.OS === 'web' ? window.alert(msg) : Alert.alert('Erro', msg);
      return;
    }

    setLoading(true);
    try {
      const { userId, token, username } = await register(nome.trim(), senha);
      login(userId, token, username);
      router.replace('/pokedex');
    } catch (err: any) {
      const msg = err.message ?? 'Erro ao registrar.';
      Platform.OS === 'web' ? window.alert(msg) : Alert.alert('Erro', msg);
    } finally {
      setLoading(false);
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
              <View style={styles.faixaTopo} />
              <Text style={styles.title}>Comece a sua jornada!</Text>
              <Text style={styles.subtitulo}>Crie sua conta de treinador</Text>

              <Input
                nome={nome}
                senha={senha}
                senha2={senha2}
                setNome={setNome}
                setSenha={setSenha}
                setSenha2={setSenha2}
              />

              <Button
                onPress={handleRegister}
                title={loading ? 'Registrando...' : 'REGISTRAR'}
                style={{ marginTop: 10 }}
              />

              <TouchableOpacity
                style={styles.linkContainer}
                onPress={() => router.push('/login')}
                activeOpacity={0.7}
              >
                <Text style={styles.linkTexto}>Já sou treinador — Entrar</Text>
              </TouchableOpacity>
            </Card>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  background:   {
    flex: 1, 
    width: '100%', 
    height: '100%' 
  },

  container:    { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: Platform.select({ web: 40, default: 20 }) 
  },

  overlay:  { 
    ...StyleSheet.absoluteFillObject, 
    backgroundColor: 'rgba(255,255,255,0.65)' 
  },

  cardWrapper:  {
    width: '100%', 
    maxWidth: 420 
  },

  faixaTopo:    {
    height: 6,
    backgroundColor: '#A82223', 
    borderRadius: 4, 
    marginBottom: 16 
  },

  title:  { 
    fontSize: Platform.select({ web: 26, default: 22 }), 
    fontFamily: 'Pokemon', 
    fontWeight: 'bold', 
    textAlign: 'center', 
    marginBottom: 4, 
    color: '#A82223' 
  },

  subtitulo:    {
    fontFamily: 'Pokemon', 
    fontSize: Platform.select({ web: 13, default: 11 }),
    color: '#888', 
    textAlign: 'center', 
    letterSpacing: 1, 
    marginBottom: Platform.select({ web: 20, default: 12 }) 
  },

  linkContainer: { 
    marginTop: 16, 
    alignItems: 'center' 
  },

  linkTexto: {
    fontFamily: 'Pokemon', 
    fontSize: Platform.select({ web: 14, default: 12 }), 
    color: '#555', 
    textDecorationLine: 'underline', 
    letterSpacing: 1 
  },
});
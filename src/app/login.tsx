import { useState } from 'react';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { useAuth } from './authContext';
import { loginApi } from '../services/authService'; 
import {
  Text, StyleSheet, View, Platform, ImageBackground, Alert, TouchableOpacity,
} from 'react-native';
import Input from '../components/input';
import Button from '../components/button';
import { useRouter } from 'expo-router';
import Navbar from '../components/navbar/Navbar';
import { Card } from '../components/card/index';

export default function Login() {
  const router      = useRouter();
  const { login }   = useAuth();

  const [nome, setNome]       = useState('');
  const [senha, setSenha]     = useState('');
  const [loading, setLoading] = useState(false);

  async function handleLogin() {
    if (!nome.trim() || !senha.trim()) {
      const msg = 'Preencha o nome e a senha.';
      Platform.OS === 'web' ? window.alert(msg) : Alert.alert('Erro', msg);
      return;
    }

    setLoading(true);
    try {
      const { userId, token, username } = await loginApi(nome.trim(), senha);
      login(userId, token, username);
      router.replace('/pokedex');
    } catch (err: any) {
      const msg = err.message ?? 'Erro ao fazer login.';
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
              <Text style={styles.title}>Acessar Pokédex</Text>

              <Input
                nome={nome}
                senha={senha}
                setNome={setNome}
                setSenha={setSenha}
              />

              <Button
                onPress={handleLogin}
                title={loading ? 'Entrando...' : 'ENTRAR'}
                style={{ marginTop: 10 }}
              />

              <TouchableOpacity
                style={styles.linkContainer}
                onPress={() => router.push('/cadastro')}
                activeOpacity={0.7}
              >
                <Text style={styles.linkTexto}>Registrar Treinador</Text>
              </TouchableOpacity>
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
    height: '100%' 
  },

  container: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center', 
    padding: Platform.select({ web: 40, default: 20 })
  },

  overlay: {
    ...StyleSheet.absoluteFillObject, 
    backgroundColor: 'rgba(255,255,255,0.65)'
  },

  cardWrapper: {
    width: '100%', 
    maxWidth: 420 
  },

  title: {
    fontSize: Platform.select({ web: 26, default: 22 }), 
    fontFamily: 'Pokemon',
    fontWeight: 'bold', 
    textAlign: 'center', 
    marginBottom: Platform.select({ web: 20, default: 12 }), 
    color: '#A82223' 
  },

  linkContainer: {
    marginTop: 16, 
    alignItems: 'center' 
  },
  
  linkTexto: { 
    fontFamily: 'Pokemon', 
    fontSize: Platform.select({ web: 14, default: 12 }), 
    color: '#A82223', 
    textDecorationLine: 'underline', 
    letterSpacing: 1 
  },
  
});
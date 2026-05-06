import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context'; 
import Input from '../components/input';
import { Text, StyleSheet } from 'react-native'; // Import do Input, Dos Estilos e do Texto Diretamente do React
import Button from '../components/button';
import { useRouter } from 'expo-router';


export default function Login () {
     const router = useRouter();

    return(
        <SafeAreaProvider>
            <SafeAreaView>
                <Text style = {styles.title}>Acesse Sua Conta!</Text>
                <Input />
                <Button
                onPress={() => router.push('/pokedex')}
                title="ENTRAR" 
                style={{marginTop: 10 }} 
                />

            </SafeAreaView>
        </SafeAreaProvider>

    )
}

    const styles = StyleSheet.create({
        title: {
            fontSize: 28, // O Tamanho do Texto
            fontFamily: 'Arial', // Fonte Que o Texto Terá
            fontWeight: 'bold', // O Quão Forte é o Traço do Texto
            textAlign: 'center', // O Alinhamento do Texto
            marginBottom: 30, // A Distância do Texto em Relação a Parte de Baixo da Tela
            color: '#900f25', // A Cor do Texto
        }
    });
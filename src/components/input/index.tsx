import { TextInput, StyleSheet } from 'react-native'; // Import do Input, Dos Estilos e do Texto Diretamente do React
import { useState } from 'react'; // Import do Gerenciador de Estados Nativo do React
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function Input() {

    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');

    return(
        <SafeAreaProvider>
            <SafeAreaView style = {styles.container}>
                <TextInput
                    style= {styles.input}
                    value={nome}
                    onChangeText={setNome}
                    placeholder="Nome"
                />

                <TextInput
                    style= {styles.input}
                    value={senha}
                    onChangeText={setSenha}
                    placeholder="Senha"
                />

            </SafeAreaView>
        </SafeAreaProvider>
    )

}

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            padding: 20,
        },

        input: { // Estilização Dos Campos Para Dados na Tela
            width: '100%', // Quanto Horizontalmente o Input Vai Ocupar
            borderWidth: 1, // A Espessura da Borda
            borderColor: '#960018', // A Cor da Borda
            borderRadius: 15, // O Quão Arredondado Serão as Bordas
            color: '#424141c4', // A Cor do Texto Dentro do Input
            padding: 12, // A Distância do Centro em Relação as 4 Bordas
            marginBottom: 15, // A Distância Vertical Entre os 2 Inputs e o Botão
        },
    });
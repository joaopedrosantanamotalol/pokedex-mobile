import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
    button: {
        width: '80%', // O Quão Largo o Botão é Horizontalmente
        height: 60, // O Quão Largo o Botão é Verticalmente
        backgroundColor: '#960018', // A Cor Primária do Botão
        marginLeft: Platform.select({
            web: 150,
            default: 0
        }),
        borderRadius: 15, // O Quão Arredondado o Botão Será
        justifyContent: 'center', // O Alinhamento do Texto Interno do Botão
        alignItems: 'center', // O Posicionamento do Botão
    },
    title: {
        color: '#e9e9e9', // A Cor do Título
        fontSize: 16, // O Tamanho do Título
        fontWeight: 'bold', // O Quão Forte é o Traço do Texto
    }
})
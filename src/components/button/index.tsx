import { TouchableOpacity, Text, TouchableOpacityProps, StyleProp, ViewStyle } from 'react-native';
import { styles } from './button'; // Importando os Estilos do Botão de um Arquivo Externo

// Type Props Estende as Propriedades Que o Botão Pode Ter
type Props = TouchableOpacityProps & {
    title?: string;  // Título Opcional
    style?: StyleProp<ViewStyle>; // Propriedade Para Permitir Estilos
}

export default function Button({ title, style, ...rest}: Props) {
    return (
        <TouchableOpacity // Recebe Esse Nome Para Indicar Que o Botão é Tocável em Aparelhos Móveis
            activeOpacity={0.5} // Opacidade Que o Botão Assume ao Ser Acionado
            style={[styles.button, style]} // Estilos Internos do Botão + Estilos do Arquivo Externo
            {...rest}> {/* Permite Usar Todas as Propriedades de um Elemento em Outro*/} 
                <Text style={styles.title}>{title}</Text> {/* Estilizando o Texto Dentro do Botão*/}
        </TouchableOpacity>
    )
}
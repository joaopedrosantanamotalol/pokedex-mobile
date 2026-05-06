import { TouchableOpacity, Text, TouchableOpacityProps, StyleProp, ViewStyle } from 'react-native';
import { styles } from './button'; // Importando os Estilos do Botão de um Arquivo Externo

// Type Props Estende as Propriedades Que o Botão Pode Ter
type Props = TouchableOpacityProps & {
    title?: string;  // Título Opcional
    style?: StyleProp<ViewStyle>; // Propriedade Para Permitir Estilos
}

export default function Button({ title, style, ...rest}: Props) {
    return (
        
        <TouchableOpacity
            activeOpacity={0.5} 
            style={[styles.button, style]}
            {...rest}>
                <Text style={styles.title}>{title}</Text> 
        </TouchableOpacity>
    )
}
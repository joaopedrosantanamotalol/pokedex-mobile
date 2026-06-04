  import { TextInput, StyleSheet, View, Platform } from 'react-native';

  type Props = {
    nome: string;
    senha: string;
    senha2?: string;
    setNome: (text: string) => void;
    setSenha: (text: string) => void;
    setSenha2?: (text: string) => void;
  };

  export default function Input({
    nome,
    senha,
    senha2,
    setNome,
    setSenha,
    setSenha2
  }: Props) {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          value={nome}
          onChangeText={setNome}
          placeholder="Treinador"
          placeholderTextColor="#aaa"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          value={senha}
          onChangeText={setSenha}
          placeholder="Senha"
          placeholderTextColor="#aaa"
          secureTextEntry
          autoCapitalize="none"
        />

        {senha2 !== undefined && setSenha2 && (
        <TextInput
          style={styles.input}
          value={senha2}
          onChangeText={setSenha2}
          placeholder="Confirmar senha"
          placeholderTextColor="#aaa"
          secureTextEntry
          autoCapitalize="none"
        />
      )}
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      gap: Platform.select({
        web: 12,
        default: 8,
      }),
    },

    input: {
      width: '100%',
      borderWidth: 1.5,
      borderColor: '#A82223',
      borderRadius: 12,

      color: '#333',

      padding: Platform.select({
        web: 12,
        default: 10,
      }),

      fontSize: Platform.select({
        web: 15,
        default: 14,
      }),

      backgroundColor: '#fff',
      fontFamily: 'Pokemon',
    },
  });
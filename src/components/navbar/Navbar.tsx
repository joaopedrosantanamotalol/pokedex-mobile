import { View, Text, StyleSheet, Platform } from 'react-native';

export default function Navbar() {
  return (
    <View style={styles.card}>
      <Text style={styles.nome}>POKEDEX</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "red",
    minHeight:'5%',
     height: Platform.select({
    web: 120,
    default: 110,
  }),
    justifyContent:"center",
    alignItems:'center'
  },
  nome: { 
    fontSize: 20,
    fontWeight: 'bold',
    color:'white',
     textShadowColor: 'black', // cor da “borda”
     textShadowOffset: { width: 1, height: 1 },
     textShadowRadius: 1,
  },
});
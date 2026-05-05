import { View, Text, StyleSheet } from 'react-native';

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
    minWidth:120,
    maxWidth:250,
    justifyContent:"center",
    alignItems:'center',
    borderColor:'red'
  },
  nome: {
    marginTop:'10%',
    marginBottom:'5%',
    fontSize: 20,
    fontWeight: 'bold',
    color:'white',
     textShadowColor: 'black', // cor da “borda”
     textShadowOffset: { width: 1, height: 1 },
     textShadowRadius: 1,
  },
});
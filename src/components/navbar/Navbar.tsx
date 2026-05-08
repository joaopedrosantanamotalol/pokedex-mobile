import { View, Text, StyleSheet, Platform } from 'react-native';

export default function Navbar() {
  return (
    <View style={styles.navbar}>
      {/* Faixa preta decorativa */}
      <View style={styles.strip} />

      {/* Círculo ao redor do nome */}
      <View style={styles.circle}>
        <Text style={styles.title}>POKÉDEX</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: '#A82223',
    height: Platform.select({
      web: 120,
      default: 100,
    }),
    justifyContent: 'center',
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 6,
  },

  strip: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 4,
    backgroundColor: '#900',
  },

  title: {
    fontSize: Platform.select({
      web: 24,
      default: 20,
    }),
    fontWeight: 'bold',
    color: '#fff',
    letterSpacing: 3,
    fontFamily:'Pokemon',

    textShadowColor: 'rgba(0,0,0,0.8)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
  },
  circle: {
    width: "40%",
    height: 40,
    borderRadius: 20,
    backgroundColor: 'white',
    justifyContent:'center',
    alignItems:"center"
},
});
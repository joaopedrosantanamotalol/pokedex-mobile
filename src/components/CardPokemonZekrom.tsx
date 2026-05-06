import { View, Text, StyleSheet, Image, Platform } from 'react-native';

export default function CardPokemonZekrom() {
  return (
    
    <View style={styles.container}>
      <View style={styles.card}>
        
        <Text style={styles.nome}>ZEKROM</Text>

        <View style={styles.conteudo}>
          
          <Image
            source={require('../assets/images/zekrom.png')}
            style={styles.imagem}
          />

            <Text style={styles.descricao2}>
              This legendary Pokémon can scorch the world with lightning. It assists those who want to build an ideal world. 
            </Text>
            <View style={styles.tipos}>
                <View style={styles.tipo}>
                    <Text style={styles.tipoTexto2} numberOfLines={1} adjustsFontSizeToFit>
                    ELÉTRICO
                    </Text>
                </View>

                <View style={styles.tipo2}>
                    <Text style={styles.tipoTexto} numberOfLines={1} adjustsFontSizeToFit>
                    DRAGÃO
                    </Text>
                </View>
                </View>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 50,
    gap:20
  },

 card: {
  backgroundColor: "red",
  width: Platform.select({
    web: 500,
    default: 300,
  }),
  borderRadius: 15,
  alignItems: 'center',
  paddingBottom: 15,
},

  nome: {
    marginVertical: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },

conteudo: {
  backgroundColor: "white",
  width: '90%',
  height: Platform.select({
    web: 500,
    default: 340,
  }),
  borderRadius: 15,
  alignItems: 'center',
  padding: 10,
  position: "relative",
},

  imagem: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
 tipos: {
  position: 'absolute',
  bottom: 10,
  right: 10,
  flexDirection: 'row',
  gap: 5,
},

tipo: {
  width: 80,
  height: 30,
  backgroundColor: "yellow",
  borderRadius: 15,
  justifyContent: "center",
  alignItems: "center",
},
tipo2: {
  width: 80,
  height: 30,
  backgroundColor: "orange",
  borderRadius: 15,
  justifyContent: "center",
  alignItems: "center",
},
tipoTexto: {
  color: 'white',
  fontSize: 12,
  textAlign: 'center',
},
tipoTexto2: {
  color: 'black',
  fontSize: 12,
  textAlign: 'center',
},
  descricao: {
    color: 'white',
    textAlign: 'center',
    flexWrap:"wrap"
  },
 descricao2: {
    color: 'black',
    textAlign: 'justify',
    flexWrap:"wrap",
    padding:10,
    fontSize: Platform.select({
      web:25
    }),
  },
});
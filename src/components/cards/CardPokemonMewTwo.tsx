import { View, Text, StyleSheet, Image, Platform } from 'react-native';

export default function CardPokemonMewTwo() {
  return (
    
    <View style={styles.container}>
      <View style={styles.card}>
        
        <Text style={styles.nome}>MEWTWO</Text>

        <View style={styles.conteudo}>
          
          <View style={styles.fundoimagem}>
                    <Image
                      source={require('../../assets/images/MewTwo.png')}
                      style={styles.imagem}
                    />
            </View>
            <Text style={styles.descricao2}>
              Its DNA is almost the same as Mew’s. However, its size and disposition are vastly different. 
            </Text>
            <View style={styles.tipos}>

                <View style={styles.tipo2}>
                    <Text style={styles.tipoTexto} numberOfLines={1} adjustsFontSizeToFit>
                    PSIQUICO
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
  borderWidth:10,
  borderColor:'gray',
},

  nome: {
    marginVertical: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
        fontFamily:'Pokemon'
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
 tipos: {
  position: 'absolute',
  bottom: 10,
  right: 10,
  flexDirection: 'row',
  gap: 5,
},

tipo2: {
  width: 80,
  height: 30,
  backgroundColor: "pink",
  borderRadius: 15,
  justifyContent: "center",
  alignItems: "center",
},
tipoTexto: {
  color: 'white',
  fontSize: 12,
  textAlign: 'center',
      fontFamily:'Pokemon'
},
fundoimagem:{
  width:"100%",
  height:180,
},
  imagem: {
  width: "100%",
  height: "100%",
  resizeMode: 'contain',
  borderWidth:3,
  borderColor:"lightgray"
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
        fontFamily:'Pokemon'
  },
});
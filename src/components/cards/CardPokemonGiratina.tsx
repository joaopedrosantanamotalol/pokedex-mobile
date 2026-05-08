import { View, Text, StyleSheet, Image, Platform } from 'react-native';

export default function CardPokemon() {
  return (
    
    <View style={styles.container}>
      <View style={styles.card}>
        
        <Text style={styles.nome}>GIRATINA</Text>

        <View style={styles.conteudo}>

          <View style={styles.fundoimagem}>
          <Image
            source={require('../../assets/images/giratina.png')}
            style={styles.imagem}
          />
          </View>
          
            <Text style={styles.descricao2}>
              Banido do Mundo Antigo por sua excessiva violência.
            </Text>
            <View style={styles.tipos}>
                <View style={styles.tipo}>
                    <Text style={styles.tipoTexto} numberOfLines={1} adjustsFontSizeToFit>
                    FANTASMA
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
  backgroundColor: "#A82223",
  width: Platform.select({
    web: 500,
    default: 300,
  }),
  borderRadius: 15,
  alignItems: 'center',
  paddingBottom: 15,
  borderWidth:10,
  borderColor:'gray',
  height:"auto"
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
  minHeight: Platform.select({
    web: 500,
    default: 340,
  }),
  borderRadius: 15,
  alignItems: 'center',
  padding: 10,
  position: "relative",
  justifyContent: 'space-between',
},
 tipos: {
  flexDirection: 'row',
  gap: 5,
  marginTop: 'auto',
  alignSelf: 'flex-end',
},

tipo: {
  width: 80,
  height: 30,
  backgroundColor: "purple",
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
    flexWrap:"wrap",
        fontFamily:'Pokemon'
  },
 descricao2: {
    color: 'black',
    flexWrap:"wrap",
    fontSize: Platform.select({
      web:25
    }),
    textAlign: 'justify',
    padding: 10,
    fontFamily:'Pokemon',
    marginTop: 10,
  },
});
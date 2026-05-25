import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 50,
  },

  card: {
    width: Platform.select({
      web: 500,
      default: 300,
    }),
    borderRadius: 15,
    alignItems: 'center',
    paddingBottom: 15,
    borderWidth: 10,
    borderColor: 'gray',
  },

  nome: {
    marginVertical: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'Pokemon',
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
  },

  fundoimagem: {
    width: "100%",
    height: 180,
  },

  imagem: {
    width: "100%",
    height: "100%",
    resizeMode: 'contain',
    borderWidth: 3,
    borderColor: "lightgray",
  },

  descricao: {
    color: 'black',
    textAlign: 'justify',
    padding: 10,
    fontSize: Platform.select({
      web: 25,
      default: 16,
    }),
    fontFamily: 'Pokemon',
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
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },

  tipoTexto: {
    color: 'white',
    fontSize: 12,
    textAlign: 'center',
    fontFamily: 'Pokemon',
  },
});
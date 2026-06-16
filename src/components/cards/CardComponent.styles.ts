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
    backgroundColor: 'white',
    width: '90%',
    borderRadius: 15,
    alignItems: 'center',
    padding: 10,
  },

  fundoimagem: {
    width: '100%',
    height: 180,
  },

  imagem: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    borderWidth: 3,
    borderColor: 'lightgray',
  },

  descricao: {
    color: 'black',
    textAlign: 'justify',
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 4,
    fontSize: Platform.select({
      web: 16,
      default: 13,
    }),
    fontFamily: 'Pokemon',
  },

  statsContainer: {
    width: '100%',
    marginTop: 8,
    paddingHorizontal: 6,
    gap: 6,
  },

  statRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  statLabel: {
    fontFamily: 'Pokemon',
    fontSize: Platform.select({ web: 13, default: 11 }),
    color: '#555',
    width: Platform.select({ web: 42, default: 36 }),
    textAlign: 'right',
  },

  statValue: {
    fontFamily: 'Pokemon',
    fontSize: Platform.select({ web: 14, default: 12 }),
    color: '#222',
    width: Platform.select({ web: 32, default: 26 }),
    textAlign: 'right',
    fontWeight: 'bold',
  },

  barraFundo: {
    flex: 1,
    height: Platform.select({ web: 12, default: 9 }),
    backgroundColor: '#E8E8E8',
    borderRadius: 6,
    overflow: 'hidden',
  },

  barraPreenchimento: {
    height: '100%',
    borderRadius: 6,
  },

  tipos: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    gap: 5,
    marginTop: 12,
    marginBottom: 4,
    width: '100%',
    paddingHorizontal: 6,
  },

  tipo: {
    paddingHorizontal: 14,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },

  tipoTexto: {
    color: 'white',
    fontSize: 12,
    textAlign: 'center',
    fontFamily: 'Pokemon',
  },
});
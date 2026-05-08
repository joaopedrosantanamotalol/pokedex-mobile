import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    borderRadius: 16,
    padding: Platform.select({
      web: 40,      // padding generoso no browser
      default: 28,  // menor no celular para não comprimir o conteúdo
    }),
    gap: Platform.select({
      web: 16,
      default: 10,
    }),

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 8,

    elevation: 6,
  },
});
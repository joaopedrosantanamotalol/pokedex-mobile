import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { useAuth } from '../../app/authContext';

const MENU_ITEMS = [
  { label: 'Perfil',   route: '/profile'   },
  { label: 'Time',     route: '/team'     },
  { label: 'Pokédex',  route: '/pokedex'  },
  { label: 'Batalha',  route: '/battle'  },
  { label: 'Cadastro', route: '/cadastro'}
];

export default function Navbar() {
  const [aberto, setAberto] = useState(false);
  const router = useRouter();
  const { logout } = useAuth();

  const navegar = (route: string) => {
    setAberto(false);
    router.push(route as any);
  };

  const sair = async () => {
    await logout();
    router.replace('/login' as any);
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.navbar}>
        <TouchableOpacity
          style={styles.menuBtn}
          onPress={() => setAberto((v) => !v)}
          activeOpacity={0.7}
          accessibilityLabel="Abrir menu de navegação"
          accessibilityRole="button"
        >
          <View style={[styles.linha, aberto && styles.linhaAberta1]} />
          <View style={[styles.linha, aberto && styles.linhaAberta2]} />
          <View style={[styles.linha, aberto && styles.linhaAberta3]} />
        </TouchableOpacity>

        <View style={styles.circle}>
          <Text style={styles.title}>POKÉDEX</Text>
        </View>

        <TouchableOpacity
          style={styles.logoutBtn}
          onPress={sair}
          activeOpacity={0.7}
          accessibilityLabel="Sair e voltar para o login"
          accessibilityRole="button"
        >
          <Text style={styles.logoutText}>SAIR</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.strip} />

      {aberto && (
        <>
          <Pressable style={styles.overlay} onPress={() => setAberto(false)} />

          <View style={styles.dropdown}>
            {MENU_ITEMS.map((item, i) => (
              <TouchableOpacity
                key={item.route}
                style={[
                  styles.dropdownItem,
                  i < MENU_ITEMS.length - 1 && styles.dropdownItemBorder,
                ]}
                onPress={() => navegar(item.route)}
                activeOpacity={0.7}
              >
                <Text style={styles.dropdownLabel}>{item.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    zIndex: 100,
    ...Platform.select({ web: { position: 'relative' as const } }),
  },

  navbar: {
    backgroundColor: '#A82223',
    height: Platform.select({ web: 120, default: 100 }),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 6,
  },

  strip: {
    height: 4,
    backgroundColor: '#900',
  },

  title: {
    fontSize: Platform.select({ web: 24, default: 20 }),
    fontWeight: 'bold',
    color: '#000',
    letterSpacing: 3,
    fontFamily: 'Pokemon',
    textShadowColor: 'rgba(0,0,0,0.8)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
  },

  circle: {
    width: '40%',
    height: 40,
    borderRadius: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },

  menuBtn: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
  },

  linha: {
    width: 26,
    height: 3,
    backgroundColor: 'white',
    borderRadius: 2,
  },

  linhaAberta1: {
    transform: [{ rotate: '45deg' }, { translateY: 9 }],
  },
  linhaAberta2: {
    opacity: 0,
  },
  linhaAberta3: {
    transform: [{ rotate: '-45deg' }, { translateY: -9 }],
  },

  overlay: {
    position: 'absolute',
    top: Platform.select({ web: 124, default: 104 }),
    left: 0,
    right: 0,
    bottom: -9999,
  },

  dropdown: {
    position: 'absolute',
    top: Platform.select({ web: 124, default: 104 }),
    left: 12,
    width: Platform.select({ web: 200, default: 180 }),
    backgroundColor: 'white',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 10,
    overflow: 'hidden',
  },

  dropdownItem: {
    paddingVertical: 14,
    paddingHorizontal: 20,
  },

  dropdownItemBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },

  dropdownLabel: {
    fontFamily: 'Pokemon',
    fontSize: Platform.select({ web: 16, default: 14 }),
    color: '#333',
    letterSpacing: 1,
  },

  logoutBtn: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  logoutText: {
    fontFamily: 'Pokemon',
    fontSize: Platform.select({ web: 14, default: 12 }),
    color: '#A82223',
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});
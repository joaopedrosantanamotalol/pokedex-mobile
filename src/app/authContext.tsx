import { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type AuthContextType = {
  authenticated: boolean;
  login: () => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType>({
  authenticated: false,
  login: async () => {},
  logout: async () => {},
});

export function AuthProvider({ children }: any) {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    loadAuth();
  }, []);

  async function loadAuth() {
    const token = await AsyncStorage.getItem('@auth');

    if (token) {
      setAuthenticated(true);
    }
  }

  async function login() {
    await AsyncStorage.setItem('@auth', 'true');
    setAuthenticated(true);
  }

  async function logout() {
    await AsyncStorage.removeItem('@auth');
    setAuthenticated(false);
  }

  return (
    <AuthContext.Provider
      value={{
        authenticated,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
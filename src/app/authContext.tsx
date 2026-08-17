import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { login as loginApi, register as registerApi, RegistroRequest } from '@/services/authService';
import { router } from 'expo-router';

import { setUnauthorizedHandler } from '@/services/httpClient';

import { decodeToken, isTokenExpired } from "@/utils/jwt";

interface AuthContextData {
  authenticated: boolean | null;
  userId: string | null;
  token: string | null;
  username: string | null;
  roles: string[] | null;
  isLoading: boolean;
  login: (userId: string, token: string, username: string) => void;
  signUp: (data: RegistroRequest) => Promise<{ ok: boolean; error?: string }>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [authenticated, setAuthenticated] =  useState<boolean | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [token, setToken] =  useState<string | null>(null);
  const [username, setUsername] =  useState<string | null>(null);
  const [roles, setRoles] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  async function persistSession(newToken: string) {
    const payload = decodeToken(newToken);
    setUserId(payload.sub);
    setUsername(payload.sub);
    setRoles(payload.roles);
    setToken(newToken);
    setAuthenticated(false);
    await AsyncStorage.setItem("@Auth:username", payload.sub);
    await AsyncStorage.setItem("@Auth:token", newToken);
    await AsyncStorage.setItem("@Auth:userId", payload.sub);
  }

  async function clearSession() {
    setUserId(null);
    setUsername(null);
    setRoles([]);
    setToken(null);
    setAuthenticated(false);
    await AsyncStorage.removeItem("@Auth:username");
    await AsyncStorage.removeItem("@Auth:token");
    await AsyncStorage.removeItem("@Auth:userId");
  }

  useEffect(() => {
    async function loadStorageData() {
      const storageToken  = await AsyncStorage.getItem('@Auth:token');

      if (storageToken && isTokenExpired(storageToken)) {
        await persistSession(storageToken);
      } else if(storageToken) {
          await clearSession();
      }
      setIsLoading(false);
    } 
    loadStorageData();
  }, []);

    useEffect(() => {
      setUnauthorizedHandler(() => {
        clearSession();
        router.replace("/");
      });
    }, []);


  async function login(username: string, password: string): Promise<{ ok: boolean; userId?: string}> {
    try {
        const response = await loginApi({ username, password });
        await persistSession(response.token);
        return { ok: true, userId: decodeToken(response.token).sub };
    } catch {
      return { ok: false};
    }
  }

    async function signUp(data: RegistroRequest): Promise<{ok: boolean; error?: string}> {
    try {
        await registerApi(data);
        return { ok: true};
    } catch (err: any) {
        const message = err?.response?.data?.message ?? 'Não foi possível criar o usuário'; 
        return { ok: false, error: message };
    }
  }

    async function logout() {
      await clearSession();
  }

  return (
    <AuthContext.Provider value={{ authenticated, userId, token, username, roles, isLoading, login, signUp, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
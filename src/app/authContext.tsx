import { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextData {
  authenticated: boolean;
  userId: string;
  token: string;
  username: string;
  login: (userId: string, token: string, username: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [userId, setUserId]               = useState('');
  const [token, setToken]                 = useState('');
  const [username, setUsername]           = useState('');

  const login = (id: string, tok: string, name: string) => {
    setUserId(id);
    setToken(tok);
    setUsername(name);
    setAuthenticated(true);
  };

  const logout = () => {
    setUserId('');
    setToken('');
    setUsername('');
    setAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ authenticated, userId, token, username, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
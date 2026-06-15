
const BASE = 'https://lnh1dhp1mj.execute-api.us-east-1.amazonaws.com/api-pokemon/auth/v1';

export interface AuthResponse {
  userId: string;
  token: string;
  username: string;
}

export const register = async (username: string, password: string): Promise<AuthResponse> => {
  const res = await fetch(`${BASE}/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });

  if (!res.ok) throw new Error('Erro ao registrar. Tente outro nome de treinador.');
  return res.json();
};

export const loginApi = async (username: string, password: string): Promise<AuthResponse> => {
  const res = await fetch(`${BASE}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });

  if (!res.ok) throw new Error('Usuário ou senha incorretos.');
  return res.json();
};
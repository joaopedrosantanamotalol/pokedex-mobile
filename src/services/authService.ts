import axios from 'axios';
import { createApi } from './httpClient';

// API Nova
const authApi = createApi(`${process.env.EXPO_PUBLIC_LOCAL_API_URL}/fatec/login/v1`);

// API Antiga
const api = axios.create({
  baseURL: `${process.env.EXPO_PUBLIC_LOCAL_API_URL}/api-pokemon/auth/v1`,
});

export type TokenResponse = {
  token: string;
};

export type RegistroRequest = {
  username: string;
  password: string;
  email: string;
  cep: string;
  roles: string[];
};

export type AuthRequest = {
  username: string;
  password: string;
};

export type AuthResponse = {
  token: string;
  userId: string;
};

export type StatsResponse = {
  userId: string;
  username: string;
  level: number;
  vitorias: number;
  derrotas: number;
};

export const register = async (data: RegistroRequest): Promise<void> => {
  await authApi.post('/register', data);
};

export const login = async (data: AuthRequest): Promise<TokenResponse> => {
  const response = await authApi.post('/auth', data);
  return response.data;
};

export const getStats = async (userId: string): Promise<StatsResponse> => {
  const response = await api.get<StatsResponse>(`/stats/${userId}`);
  return response.data;
};

const BASE = 'https://lnh1dhp1mj.execute-api.us-east-1.amazonaws.com/api-pokemon/auth/v1';

export interface Stats {
  level: number;
  vitorias: number;
  derrotas: number;
}

export const getStats = async (userId: string, token: string): Promise<Stats> => {
  const res = await fetch(`${BASE}/stats/${userId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!res.ok) throw new Error('Não foi possível carregar o perfil.');
  return res.json();
};

export const updateStats = async (
  userId: string,
  token: string,
  stats: Stats
): Promise<void> => {
  await fetch(`${BASE}/stats/${userId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      level: String(stats.level),
      vitorias: String(stats.vitorias),
      derrotas: String(stats.derrotas),
    }),
  });
};
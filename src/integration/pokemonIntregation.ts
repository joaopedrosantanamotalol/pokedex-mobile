import axios from 'axios';
import { Pokemon } from '../@types/pokemon';

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
});

const getStat = (stats: any[], nome: string): number =>
  stats.find((s: any) => s.stat.name === nome)?.base_stat ?? 0;

const getTextoDescricao = (entries: any[]): string => {
  const pt = entries.find(
    (e: any) => e.language.name === 'pt-BR' || e.language.name === 'pt'
  );

  const en = entries.find((e: any) => e.language.name === 'en');

  return (
    pt?.flavor_text?.replace(/[\n\f\r]/g, ' ').trim() ??
    en?.flavor_text?.replace(/[\n\f\r]/g, ' ').trim() ??
    ''
  );
};

export const getPokemons = async (limit = 151): Promise<Pokemon[]> => {
  const response = await api.get(`/pokemon?limit=${limit}`);
  const list = response.data.results;

  const detailedList = await Promise.all(
    list.map(async (pokemon: { url: string }) => {
      const detailRes = await axios.get(pokemon.url);
      const data = detailRes.data;

      const speciesRes = await axios.get(data.species.url);

      const descricao = getTextoDescricao(
        speciesRes.data.flavor_text_entries
      );

      return {
        nome: data.name,
        index: data.id.toString().padStart(3, '0'),
        tipos: data.types.map((t: any) => t.type.name),
        imagem: data.sprites.front_default,
        descricao,
        stats: {
          hp: getStat(data.stats, 'hp'),
          atk: getStat(data.stats, 'attack'),
          def: getStat(data.stats, 'defense'),
          spd: getStat(data.stats, 'speed'),
          spa: getStat(data.stats, 'special-attack'),
          spdDef: getStat(data.stats, 'special-defense'),
        },
      } satisfies Pokemon;
    })
  );

  return detailedList;
};
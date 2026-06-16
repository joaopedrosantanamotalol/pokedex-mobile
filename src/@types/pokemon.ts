export interface Stats {
  hp: number;
  atk: number;
  def: number;
  spd: number;
  spa: number;
  spdDef: number;
}

export interface Pokemon {
  index: string;
  nome: string;
  imagem: string;
  tipos: string[];
  stats: Stats;
  descricao?: string;
}
export type TeamPokemon = {
  index: string;
  name: string;
  image: string;
  types: string[];
  abilities: {
    name: string;
    strength: number;
  }[];
};
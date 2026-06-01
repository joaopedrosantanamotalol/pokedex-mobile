import { View, Text, Image } from 'react-native';
import { styles } from './CardComponent.styles';
import { Pokemon } from '../@types/pokemon';

type Props = {
  pokemon: Pokemon;
  corCard: string;
};

const STAT_MAX = 255;

const corDaBarra = (valor: number): string => {
  if (valor >= 100) return '#4CAF50';
  if (valor >= 60)  return '#FFC107';
  return '#F44336';
};

export const TIPOS_PT: Record<string, string> = {
  normal:   'Normal',
  fire:     'Fogo',
  water:    'Água',
  electric: 'Elétrico',
  grass:    'Planta',
  ice:      'Gelo',
  fighting: 'Lutador',
  poison:   'Veneno',
  ground:   'Terra',
  flying:   'Voador',
  psychic:  'Psíquico',
  bug:      'Inseto',
  rock:     'Pedra',
  ghost:    'Fantasma',
  dragon:   'Dragão',
  dark:     'Sombrio',
  steel:    'Aço',
  fairy:    'Fada',
};

type StatRowProps = { label: string; valor: number };

function StatRow({ label, valor }: StatRowProps) {
  const largura = `${Math.min((valor / STAT_MAX) * 100, 100)}%` as const;
  return (
    <View style={styles.statRow}>
      <Text style={styles.statLabel}>{label}</Text>
      <Text style={styles.statValue}>{valor}</Text>
      <View style={styles.barraFundo}>
        <View
          style={[
            styles.barraPreenchimento,
            { width: largura, backgroundColor: corDaBarra(valor) },
          ]}
        />
      </View>
    </View>
  );
}

export default function CardPokemon({ pokemon, corCard }: Props) {
  return (
    <View style={styles.container}>
      <View style={[styles.card, { backgroundColor: corCard }]}>

        <Text style={styles.nome}>
          {pokemon.nome.toUpperCase()}
        </Text>

        <View style={styles.conteudo}>

          <View style={styles.fundoimagem}>
            <Image
              source={{ uri: pokemon.imagem }}
              style={styles.imagem}
            />
          </View>

          {pokemon.descricao ? (
            <Text style={styles.descricao} numberOfLines={3} ellipsizeMode="tail">
              {pokemon.descricao}
            </Text>
          ) : null}

          <View style={styles.statsContainer}>
            <StatRow label="HP"   valor={pokemon.stats.hp} />
            <StatRow label="ATK"  valor={pokemon.stats.atk} />
            <StatRow label="DEF"  valor={pokemon.stats.def} />
            <StatRow label="SPD"  valor={pokemon.stats.spd} />
            <StatRow label="SP.A" valor={pokemon.stats.spa} />
            <StatRow label="SP.D" valor={pokemon.stats.spdDef} />
          </View>

          <View style={styles.tipos}>
            {pokemon.tipos.map((tipo, index) => (
              <View key={index} style={[styles.tipo, { backgroundColor: corCard }]}>
                <Text style={styles.tipoTexto}>
                  {TIPOS_PT[tipo] ?? tipo}
                </Text>
              </View>
            ))}
          </View>

        </View>
      </View>
    </View>
  );
}
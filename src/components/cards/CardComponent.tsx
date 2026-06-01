import { View, Text, Image } from 'react-native';
import { styles } from './CardComponent.styles';
import { Pokemon } from '../@types/pokemon';


type Props = {
  pokemon: Pokemon;
  corCard: string;
  descricao?: string;
};

export default function CardPokemon({
  pokemon,
  corCard,
  descricao = "Um Pokémon misterioso encontrado em regiões distantes.",
}: Props) {
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

          <Text style={styles.descricao}>
            {descricao}
          </Text>

          <View style={styles.statsContainer}>
            <View style={styles.stat}>
              <Text style={styles.statLabel}>HP</Text>
              <Text style={styles.statValue}>{pokemon.stats.hp}</Text>
            </View>

            <View style={styles.stat}>
              <Text style={styles.statLabel}>ATK</Text>
              <Text style={styles.statValue}>{pokemon.stats.atk}</Text>
            </View>

            <View style={styles.stat}>
              <Text style={styles.statLabel}>DEF</Text>
              <Text style={styles.statValue}>{pokemon.stats.def}</Text>
            </View>

            <View style={styles.stat}>
              <Text style={styles.statLabel}>SPD</Text>
              <Text style={styles.statValue}>{pokemon.stats.spd}</Text>
            </View>

            <View style={styles.stat}>
              <Text style={styles.statLabel}>SP.A</Text>
              <Text style={styles.statValue}>{pokemon.stats.spa}</Text>
            </View>

            <View style={styles.stat}>
              <Text style={styles.statLabel}>SP.D</Text>
              <Text style={styles.statValue}>{pokemon.stats.spdDef}</Text>
            </View>
          </View>

          <View style={styles.tipos}>
            {pokemon.tipos.map((tipo, index) => (
              <View
                key={index}
                style={styles.tipo}
              >
                <Text style={styles.tipoTexto}>
                  {tipo}
                </Text>
              </View>
            ))}
          </View>

        </View>
      </View>
    </View>
  );
}
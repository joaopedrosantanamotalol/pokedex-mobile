import { View, Text, Image } from 'react-native';
import { styles } from './CardComponent.styles'
type TipoPokemon = {
  nome: string;
  cor: string;
};

type Props = {
  nome: string;
  imagem: any;
  descricao: string;
  corCard: string;
  tipos: TipoPokemon[];
};

export default function CardPokemon({
  nome,
  imagem,
  descricao,
  corCard,
  tipos,
}: Props) {
  return (
    <View style={styles.container}>
      <View style={[styles.card, { backgroundColor: corCard }]}>
        
        <Text style={styles.nome}>{nome}</Text>

        <View style={styles.conteudo}>

          <View style={styles.fundoimagem}>
            <Image
              source={imagem}
              style={styles.imagem}
            />
          </View>

          <Text style={styles.descricao}>
            {descricao}
          </Text>

          <View style={styles.tipos}>
            {tipos.map((tipo, index) => (
              <View
                key={index}
                style={[styles.tipo, { backgroundColor: tipo.cor }]}
              >
                <Text
                  style={styles.tipoTexto}
                  numberOfLines={1}
                  adjustsFontSizeToFit
                >
                  {tipo.nome}
                </Text>
              </View>
            ))}
          </View>

        </View>
      </View>
    </View>
  );
}
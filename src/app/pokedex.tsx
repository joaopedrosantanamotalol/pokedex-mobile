import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context'; 
import Navbar from '../components/navbar/Navbar';
import CardPokemonGiratina from '../components/cards/CardPokemonGiratina';
import { ScrollView, View, StyleSheet } from 'react-native';
import CardPokemonPalkia from '../components/cards/CardPokemonPalkia';
import CardPokemonDialga from '../components/cards/CardPokemonDialga';
import CardPokemonMewTwo from '../components/cards/CardPokemonMewTwo';
import CardPokemonZekrom from '../components/cards/CardPokemonZekrom';

export default function Pokedex () {
    return(
        <>
        <Navbar></Navbar>
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView>
                    <View style ={styles.container}>
                    <CardPokemonGiratina></CardPokemonGiratina>
                    <CardPokemonPalkia></CardPokemonPalkia>
                    <CardPokemonDialga></CardPokemonDialga>
                    <CardPokemonMewTwo></CardPokemonMewTwo>
                    <CardPokemonZekrom></CardPokemonZekrom>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
        </>
    )
} 

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 50,
        padding: 20,
    },
});

import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context'; 
import Navbar from '../components/navbar/Navbar';
import CardPokemonGiratina from '../components/cards/CardPokemonGiratina';
import { ScrollView, Text } from 'react-native';
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
                    <CardPokemonGiratina></CardPokemonGiratina>
                    <CardPokemonPalkia></CardPokemonPalkia>
                    <CardPokemonDialga></CardPokemonDialga>
                    <CardPokemonMewTwo></CardPokemonMewTwo>
                    <CardPokemonZekrom></CardPokemonZekrom>
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
        </>
    )
} 

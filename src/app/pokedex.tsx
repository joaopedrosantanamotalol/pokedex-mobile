import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context'; 
import Navbar from '../components/navbar/Navbar';
import CardPokemonGiratina from '../components/CardPokemonGiratina';
import { ScrollView, Text } from 'react-native';
import CardPokemonPalkia from '../components/CardPokemonPalkia';
import CardPokemonDialga from '../components/CardPokemonDialga';
import CardPokemonMewTwo from '../components/CardPokemonMewTwo';
import CardPokemonZekrom from '../components/CardPokemonZekrom';

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

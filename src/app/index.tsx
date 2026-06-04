import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context'; 
import Navbar from '../components/navbar/Navbar';
import { Redirect } from 'expo-router';

export default function Index () {
    return(
        <>
        <Navbar></Navbar>
        <SafeAreaProvider>
            <SafeAreaView>
                <Redirect href="/cadastro"></Redirect>
            </SafeAreaView>
        </SafeAreaProvider>

                
        </>
    )
} 
 
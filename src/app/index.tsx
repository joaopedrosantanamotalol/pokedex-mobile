import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context'; 
import Navbar from '../components/navbar/Navbar';

export default function Index () {
    return(
        <>
        <Navbar></Navbar>
        <SafeAreaProvider>
            <SafeAreaView>

            </SafeAreaView>
        </SafeAreaProvider>
        </>
    )
} 
 
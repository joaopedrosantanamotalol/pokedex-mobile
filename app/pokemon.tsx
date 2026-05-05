import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet,Text } from "react-native";
import Navbar from "@/components/Navbar";

export default function pokemon(){
return(
    <>
    <Navbar></Navbar>
    <SafeAreaView style={styles.container}>
    </SafeAreaView>
    </>
);
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  texto: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

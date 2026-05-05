import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet,Text } from "react-native";

export default function pokemon(){
return(
    <SafeAreaView style={styles.container}>
        <Text>Pokemon</Text>
    </SafeAreaView>
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

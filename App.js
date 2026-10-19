import { View, Text, StyleSheet } from "react-native";
import ProductScreen from "./src/screens/ProductScreen";

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenue dans ma boutique</Text>
      <ProductScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
});

export default App;

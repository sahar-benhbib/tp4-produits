import { View, Text } from 'react-native';
import ProductScreen from './src/screens/ProductScreen';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text>Bienvenue dans ma boutique</Text>
      <ProductScreen />
    </View>
  );
};

export default App;
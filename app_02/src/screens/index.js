import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={estilo.container}>
      <View>
        <Text style={estilo.texto}>Hello World</Text>
        <Image
          source={require('../../assets/pixelart.gif')}
          style={estilo.imagem}
        />
      </View>
    </SafeAreaView>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
  },
  texto: {
    color: 'red',
    fontWeight: '900',
    fontSize: 50,
  },
  imagem: {
    width: 200,
    height: 200,
  }
});
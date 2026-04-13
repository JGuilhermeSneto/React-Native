import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";

export default function App() {
  return (
    <SafeAreaView>
      <Text style={estilo.texto}>Hello World</Text>
      <Image source={require('./assets/pixelart.gif')} />
    </SafeAreaView>
  );
}

const estilo = StyleSheet.create({
  texto: {
    color: 'red',
    fontWeight: '900', 
    fontSize: 50
  }
});
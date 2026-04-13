import { View, Text, StyleSheet, Image, SafeAreaView, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Link } from "@react-navigation/native";

export default function App() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={estilo.container}>
      <View>
        <Text style={estilo.texto}>Hello World</Text>

        <Button
          title="Ir para o Instituto"
          onPress={() => navigation.navigate("Instituto")}
        />
        <Button title="Ir para noticia"
        onPress={() => navigation.navigate("Noticia")}
        />

        <Button
          title="Ir para disciplina"
          onPress={() =>
            navigation.navigate('Disciplina'
            {
              nome: 'Desenvolvimento',
              ch: 4
            }),
          }
          />
        
        <Image
          source={require("../../assets/pixelart.gif")}
          style={estilo.imagem}
        />

        <Link screen={"Instituto"}> Ir para instituto</Link>

      </View>
    </SafeAreaView>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
  },
  texto: {
    color: "red",
    fontWeight: "900",
    fontSize: 50,
  },
  imagem: {
    width: 200,
    height: 200,
  },
});
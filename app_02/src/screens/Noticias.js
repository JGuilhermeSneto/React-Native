import { View, Text, StyleSheet } from "react-native";
import { Titulos } from "../components/Titulos";
import estilo from "../styles/Estilo";


export default () => {
  return (
    <View style={styles.container}>
      <Titulos
        titulo="texto de titulo"
        subtitulo="Subtitulo do texto"
      />

      <Text style={estilo.Noticia}>Noticia</Text>
    </View>
  );
}

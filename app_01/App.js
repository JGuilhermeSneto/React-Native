import { View, Text, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.titulo}>Bom dia ☀️</Text>
        <Text style={styles.subtitulo}>Oi 👋</Text>
        <Text style={styles.ifrn}>IFRN</Text>
        <Text style={styles.curso}>TSI</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a", // fundo escuro elegante
    justifyContent: "center",
    alignItems: "center",
  },

  card: {
    backgroundColor: "#1e293b",
    padding: 24,
    borderRadius: 16,
    width: "80%",
    alignItems: "center",
    elevation: 6, // sombra Android
  },

  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#38bdf8",
    marginBottom: 8,
  },

  subtitulo: {
    fontSize: 18,
    color: "#e5e7eb",
    marginBottom: 16,
  },

  ifrn: {
    fontSize: 42,
    fontWeight: "bold",
    color: "#22c55e",
  },

  curso: {
    fontSize: 20,
    color: "#f472b6",
    marginTop: 4,
  },
});
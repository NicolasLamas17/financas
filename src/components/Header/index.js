import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

const alturaDaBarra = StatusBar.currentHeight
  ? StatusBar.currentHeight + 22
  : 64;

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.conteudo}>
        <Text style={styles.nome}>Nicuda Lamas</Text>

        <TouchableOpacity style={styles.botao}>
          <Feather name="user" size={27} color={"#"} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffff3a", // Cor de fundo
    flexDirection: "row", // Alinhar na mesma linha
    paddingStart: 16, // Gordurinha no inicio
    paddingEnd: 16, // Gordurinha no final
    paddingBottom: 44, // Gordurinha na parte debaixo
    paddingTop: alturaDaBarra, // Gorturinha no topo
  },

  conteudo: {
    flex: 1, // Ocupar toda a caixa
    alignItems: "center", //Alinha no centro
    flexDirection: "row", // Alinhar na mesma linha
    justifyContent: "space-between", // Dar espoço
  },

  nome: {
    fontSize: 18, //
    color: "#ff", //
    fontWeight: "bold", //
  },

  botao: {
    width: 44, //
    height: 44, //
    backgroundColor: "rgba(135, 133, 152, 0.88)", //
    justifyContent:"center", //
    alignItems: "center", //
    borderRadius: "50%", //
  }
});

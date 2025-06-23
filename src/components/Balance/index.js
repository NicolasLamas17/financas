import { StyleSheet, View } from "react-native";

export default function Balance({saldo, gastos}) {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.tituloItem}>Saldo</Text>
        <View style={styles.conteudo}>
          <Text style={styles.saldo}>{saldo}</Text>
        </View>
      </View>

      <View style={styles.item}>
        <Text style={styles.tituloItem}>Gastos</Text>
        <View style={styles.conteudo}>
          <Text style={styles.saldo}>{gastos}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff", // Cor de fundo
    flexDirection: "row", // Alinhar na mesma linha
    justifyContent: "space-between", // Dar um espaço entre os itens

    paddingStart: 18,
    paddingEnd: 18,
    marginTop: -24,
    marginStart: 14,
    marginEnd: 14,
    borderRadius: 4,
    paddingTop: 22,
    paddingBottom: 22,
    zIndex: 99,
  },

  tituloItem: {
    fontSize: 20,
    color: "#7c4dfc",
  },

  conteudo: {
    flexDirection: "row",
    alignItems: "center",
  },

  saldo: {
    fontSize: 22,
    color: "#2ecc71",
  },

  gastos: {
    fontSize: 22,
    color: "#e74c3c",
  },
});

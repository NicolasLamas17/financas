import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Moviments({ dados }) {
  const [mostrarValor, setMostraValor] = useState(false);

  function visualizarValor() {
    setMostraValor(!mostrarValor);
  }

  // CRIANDO UMA FUNÇÂO PRA TRANSFORMAR EM MOEDA
  function transformarEmMoeda(dinheiro) {
    return dinheiro.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  return (
    <TouchableOpacity onPress={visualizarValor} style={styles.container}>
      <Text style={styles.data}>{dados.data}</Text>

      <View style={styles.conteudo}>
        {dados.titulo}

        {mostrarValor ? (
          <Text style={styles.tipo === 1 ? styles.valor : styles.despesas}>
            {dados.tipo === 1
              ? `${transformarEmMoeda(dados.valor)}`
              : `-${transformarEmMoeda(dados.valor)}`}
          </Text>
        ) : (
          <View style={styles.borrao}></View>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 24,
    borderBottomWidth: 0.5,
    borderBottomColor: "#dadada",
  },

  conteudo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 2,
    marginBottom: 8,
  },

  data: {
    color: "#a6a787",
    fontWeight: "bold",
  },

  valor: {
    fontSize: 17,
    color: "#be3a26",
    fontWeight: "bold",
  },

  despesar: {
    fontSize: 16,
    color: "#e74c3c",
    fontWeight: "bold",
  },

  borrao: {
    marginTop: 6,
    width: 80,
    height: 10,
    backgroundColor: "#dfe0b3",
    borderRadius: 8,
  },
});

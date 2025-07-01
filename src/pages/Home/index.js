import Header from "../../components/Header";
import Balance from "../../components/Balance";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Actions from "../../components/Actions";
import Moviments from "../../components/Moviments";

const lista = [
  {
    id: 1,
    titulo: "Boleto de luz",
    valor: 230,
    data: "23/06/2025",
    tipo: 0,
  },

  {
    id: 2,
    titulo: "Boleto de carro",
    valor: 850,
    data: "23/06/2025",
    tipo: 0,
  },

  {
    id: 3,
    titulo: "Boleto de casa",
    valor: 600,
    data: "23/06/2025",
    tipo: 0,
  },

  {
    id: 4,
    titulo: "Boleto de água",
    valor: 90,
    data: "23/06/2025",
    tipo: 0,
  },

  {
    id: 5,
    titulo: "Boleto de barco",
    valor: 1100,
    data: "23/06/2025",
    tipo: 0,
  },

  {
    id: 6,
    titulo: "Pix da Anna",
    valor: 6000,
    data: "23/06/2025",
    tipo: 1,
  },

  {
    id: 7,
    titulo: "Pix venda da BMX",
    valor: 2210,
    data: "23/06/2025",
    tipo: 1,
  },

  {
    id: 8,
    titulo: "Pix venda da blusa",
    valor: 590,
    data: "23/06/2025",
    tipo: 1,
  },

  {
    id: 9,
    titulo: "Pix venda do cachorro",
    valor: 4000,
    data: "23/06/2025",
    tipo: 1,
  },

  {
    id: 10,
    titulo: "Pix venda do celular",
    valor: 7400,
    data: "23/06/2025",
    tipo: 1,
  },
];

function transformarEmDinheiro(valor) {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

function calcularRecebimentos(recebimentos) {
  let soma = 0;

  for (let i = 0; i < recebimentos.length; i++) {
    if (recebimentos[i].tipo === 1) {
      soma += recebimentos[i].valor;
    }
  }

  return soma;
}

const saldo = calcularRecebimentos(lista);
const gasto = calcularGastos(lista);
const calculo = saldo - gasto;

function calcularGastos(gastos) {
  let soma = 0;

  for (let i = 0; i < gastos.length; i++) {
    if (gastos[i].tipo === 0) {
      soma += gastos[i].valor;
    }
  }

  return soma;
}

export default function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <Balance
        saldo={transformarEmDinheiro(calculo)}
        gastos={transformarEmDinheiro(gasto)}
      />
      <Actions />

      <Text style={styles.titulo}>Últimas movimentações</Text>

      <FlatList
        style={styles.lista}
        data={lista}
        keyExtractor={(item) => String(item.id)}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <Moviments dados={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: "#fafafa",
 },

 titulo: {
  fontSize: 18,
  fontWeignt: "bold",
  marginLeft: 14,
  marginRight: 14,
  marginTop: 14,
  marginBottom: 14,
 },

 lista: {
  marginStart: 14,
  marginEnd: 14,
 },

});

import { ScrollView, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function actions() {
  return (
    <View>
      <ScrollView
        style={style.container}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <TouchableOpacity style={styles.botaoAcao}>
          <View style={styles.area}>
            <AntDesign name="addfolder" size={26} color={"#000"} />
          </View>
          <Text style={styles.tituloBotao}>Entradas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoAcao}>
          <View style={styles.area}>
            <AntDesign name="tagso" size={26} color={"#000"} />
          </View>
          <Text style={styles.tituloBotao}>Compras</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoAcao}>
          <View style={styles.area}>
            <AntDesign name="creditcard" size={26} color={"#000"} />
          </View>
          <Text style={styles.tituloBotao}>Carteira</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoAcao}>
          <View style={styles.area}>
            <AntDesign name="barcode" size={26} color={"#000"} />
          </View>
          <Text style={styles.tituloBotao}>Boleto</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoAcao}>
          <View style={styles.area}>
            <AntDesign name="setting" size={26} color={"#000"} />
          </View>
          <Text style={styles.tituloBotao}>Conta</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    maxHeight: 95,
    marginBottom: 14,
    marginTop: 18,
    paddingEnd: 20,
    paddingStart: 20,
  },

  botaoAcao: {
    alignItems: "center",
    marginRight: 32,
  },

area: {
backgroundColor: "#ecf0f1",
height:60,
width: 60,
borderRadius: 30, 
justifyContent: 'center',
alignItems: 'center'
},

tituloBotao: {
  marginTop: 4,
  textAlign: "center",
  fontWeight: "bold",
}

});

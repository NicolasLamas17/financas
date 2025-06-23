import { View } from "react-native-web";
import Header from "../../components/Header";
import Balance from "../../components/Balance";

export default function Home () {
    return (
        <View>
            <Header />
            <Balance saldo={"R$ 1200,00"} gastos={"R$ 600,00"}/>

            <Action />
        </View>
    )
}
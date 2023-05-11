import { FlatList, StyleSheet, Text, View } from "react-native"
import Header from "../../components/Header/Header";
import Balance from "../../components/balance/Balance";
import Movements from "../../components/movements/Movements";
import Actions from "../../components/Actions/Actions";
import { MotiView, MotiText } from "moti";

const list = [
    {
        id: 1,
        label: 'Salário',
        value: '15.000',
        data: '17/08/2023',
        type: 1
    },
    {
        id: 2,
        label: 'Água',
        value: '2.000',
        data: '17/08/2023',
        type: 0
    },
    {
        id: 3,
        label: 'Pix para Erika',
        value: '3.000',
        data: '17/08/2023',
        type: 0
    },
]

const Home = () => {
    return (
        <View style={styles.container}>
            <Header name="Enuch Santos" />
            <Balance saldo='20.567,98' gastos='-789' />
            <Actions />
            <View style={styles.content}>
                <Text style={styles.title}>Últimas movimentações</Text>
            </View>
            <FlatList
                style={styles.list}
                data={list}
                keyExtractor={(item) => String(item.id)}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => <Movements data={item} />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D3D3D3',
    },
    content: {
        alignItems: 'center',
        marginTop: 6,
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        marginStart: 16,
    },
    list: {
        marginStart: 14,
        marginEnd: 14,
    },
})

export default Home;
import { StyleSheet, Text, View } from "react-native"
import Header from "../../components/Header/Header";

const Home = () => {
    return (
        <View>
            <Header name="Enuch Santos" />
            <Text>Home to my app</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
})

export default Home;
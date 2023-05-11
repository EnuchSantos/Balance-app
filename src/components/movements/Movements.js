import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

const Movements = ({ data }) => {
    const [showValue, setShowValue] = useState(false)
    return (
        <TouchableOpacity style={styles.container} onPress={() => setShowValue(!showValue)}>
            <Text style={styles.data}>{data.data}</Text>
            <View style={styles.content}>
                <Text style={styles.label}>{data.label}</Text>
                {
                    showValue ?
                        <Text
                            style={data.type == 1 ? styles.value : styles.expenses}>
                            {data.type == 1 ? `R$ ${data.value}` : `-R$ ${data.value}`}
                        </Text> :
                        <Text style={styles.skeleton} />
                }

            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginBottom: 12,
        marginTop: 5,
        padding: 10,
        borderRadius: 10,
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 2,
    },
    data: {
        color: 'gray',
    },
    label: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    value: {
        color: '#3ecc71',
        fontSize: 18,
    },
    expenses: {
        color: '#e74c3c',
        fontSize: 18,
    },
    skeleton: {
        backgroundColor: '#DADADA',
        marginTop: 6,
        width: 80,
        height: 10,
        borderRadius: 8,
    }
})

export default Movements;
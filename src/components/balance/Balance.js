import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Balance = ({ saldo, gastos }) => {
    return (
        <View style={styles.container}>
            <View style={styles.item}>
                <Text style={styles.itemTitle}>Saldo</Text>
                <View style={styles.content}>
                    <Text style={styles.currencySymbol}>R$</Text>
                    <Text style={styles.balance}>{saldo}</Text>
                </View>
            </View>
            <View style={styles.item}>
                <Text style={styles.itemTitle}>Gasto</Text>
                <View style={styles.content}>
                    <Text style={styles.currencySymbol}>R$</Text>
                    <Text style={styles.expenses}>{gastos}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingStart: 18,
        paddingEnd: 18,
        paddingTop: 22,
        paddingBottom: 22,
        marginTop: -24,
        marginStart: 14,
        marginEnd: 14,
        borderRadius: 6,
    },
    itemTitle: {
        fontSize: 20,
        color: '#556B2F'
    },
    item: {

    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    currencySymbol: {
        color: '#556B2F',
        marginRight: 6,
    },
    balance: {
        fontSize: 18,
        color: '#3ecc71'
    },
    expenses: {
        fontSize: 18,
        color: '#e74c3c'
    },
})

export default Balance;
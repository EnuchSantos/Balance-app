import { MotiView } from 'moti'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Balance = ({ saldo, gastos }) => {
    return (
        <MotiView
            style={styles.container}
            from={{
                rotateX: '-100deg',
                opacity: 0
            }}
            animate={{
                rotateX: '0deg',
                opacity: 1,
            }}
            transition={{
                type: 'timing',
                delay: 300,
                duration: 900,
            }}>
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
        </MotiView>
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
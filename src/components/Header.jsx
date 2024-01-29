import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderBtn from './HeaderBtn'

const Header = () => {
    return (
        <View style={styles.container}>
            <HeaderBtn name="chevron-left" />
            <HeaderBtn name="dots-three-horizontal" />
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        // marginTop: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        padding: 15
    }
})
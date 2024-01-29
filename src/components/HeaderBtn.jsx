import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
const HeaderBtn = (props) => {
    return (
        <TouchableOpacity style={styles.btn}>
            <Entypo name={props.name} size={30} color="white" />
        </TouchableOpacity>
    )
}

export default HeaderBtn

const styles = StyleSheet.create({
    btn: {
        height: 45,
        width: 45,
        borderRadius: 15,
        backgroundColor: "#414754",
        justifyContent: "center",
        alignItems: "center"
    }
})
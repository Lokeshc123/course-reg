import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign } from '@expo/vector-icons';
import { UserType } from '../context/UserContext';
import { Dropdown } from 'react-native-element-dropdown';
import { useNavigation } from '@react-navigation/native';
const Enrol = () => {

    const data = [
        { label: 'Yes', value: true },
        { label: 'No', value: false },


    ];
    const [value, setValue] = useState(null);

    const navigation = useNavigation();
    const { selectedCourse } = useContext(UserType);
    const [name, setName] = useState("");
    const [regNum, setRegNum] = useState("");
    const [email, setEmail] = useState("");
    const [dob, setDob] = useState("");
    const [mob, setMob] = useState("");
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <AntDesign name="caretleft" size={24} color="black" onPress={() => navigation.goBack()} />
                <Text style={styles.headertxt}>Enroll</Text>
            </View>
            <Text style={{ fontSize: 25, fontWeight: "bold" }}>Fill out the following form</Text>
            <View style={styles.data}>
                <ScrollView style={{ width: "100%" }}>
                    <TextInput placeholder="Name" style={styles.input} value={name} onChangeText={(text) => setName(text)} />
                    <TextInput placeholder="Registration Number" style={styles.input} value={regNum} onChangeText={(text) => setRegNum(text)} keyboardType='numeric' />
                    <TextInput placeholder='Email' style={styles.input} value={email} onChangeText={(text) => setEmail(text)} />
                    <TextInput placeholder={`Course : ${selectedCourse}`} style={styles.input} editable={false} />

                    <TextInput placeholder='Mobile Number' style={styles.input} value={mob} onChangeText={(text) => setMob(text)} keyboardType='numeric' />
                    <TextInput placeholder='Date of Birth' style={styles.input} value={dob} onChangeText={(text) => setDob(text)} />
                    <Dropdown
                        style={styles.input}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={data}

                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder="Want to make payment"
                        searchPlaceholder="Search..."
                        value={value}
                        onChange={item => {
                            setValue(item.value);
                        }}


                    />
                </ScrollView>
            </View>
            <TouchableOpacity style={styles.btn}>
                <Text style={{ fontSize: 18, color: "white" }}>Submit</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Enrol

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    header: {
        flexDirection: "row",

        alignItems: "center",
        width: "100%",
        padding: 10,


    },
    headertxt: {
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 10,
        alignSelf: "center"
    },
    data: {
        width: "100%",
        padding: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    input: {
        width: "90%",
        height: 50,
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 10,
        padding: 10,
        fontSize: 20,
        fontWeight: "bold",
        margin: 10,
        alignSelf: "center"
    },
    btn: {
        width: "90%",
        height: 50,
        backgroundColor: "lightblue",
        borderRadius: 16,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10
    },
    dropdown: {
        margin: 16,
        height: 50,

        borderRadius: 12,
        padding: 12,

    },
    icon: {
        marginRight: 5,
    },
    item: {
        padding: 17,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textItem: {
        flex: 1,
        fontSize: 16,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
})
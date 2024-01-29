import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/Header'
import { data, data2 } from '../data/Data'
import Course from '../components/Course'
import ExtraCourses from '../components/ExtraCourses'


const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <View style={styles.courses}>
                <Text style={styles.courseTxt}>Trending Course</Text>
                <FlatList
                    data={data}
                    renderItem={({ item }) => <Course item={item} />}
                    keyExtractor={item => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            <View style={styles.extracourses}>
                <Text style={styles.courseTxt}>You might also like</Text>
                <FlatList
                    data={data2}
                    renderItem={({ item }) => <ExtraCourses item={item} />}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}

                />
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    courses: {
        width: "100%",
        height: "32%",

    },
    courseTxt: {
        fontSize: 22,
        fontWeight: 'bold',
        margin: 10
    },
    extracourses: {
        width: "100%",
        height: "60%",


    }
})
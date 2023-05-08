import React, {useState} from 'react';
import {Button, FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {globalStyle} from "../style/style";

const Main = ({navigation}) => {
    const openPage = (item) => {
        navigation.navigate("About Ass", item)
    }
    const [news, setNews] = useState([
        {
            id: Math.random().toString(),
            name: "google",
            anons: "info!!",
            full: "google!!!"
        },
        {
            id: Math.random().toString(),
            name: "apple",
            anons: "apple!!",
            full: "apple!!!"
        },
        {
            id: Math.random().toString(),
            name: "amason",
            anons: "amason!!",
            full: "amason!!!"
        },
        {
            id: Math.random().toString(),
            name: "gpt",
            anons: "gpt!!",
            full: "gpt!!!"
        },
    ])
    return (
        <View style={globalStyle.main}>
            <Text style={globalStyle.title}>Головная сторінка</Text>
            <FlatList
                data={news}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => openPage(item)}>
                        <Text style={styles.text}>{item.name}</Text>
                        <Text style={styles.text}>{item.anons}</Text>
                    </TouchableOpacity>
                )}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {},
});

export default Main;

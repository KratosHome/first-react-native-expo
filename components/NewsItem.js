import React from 'react';
import {Button, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {globalStyle} from "../style/style";

const NewsItem = ({navigation, route}) => {
    const openPage = () => {
        navigation.navigate("Головна")
    }
    return (
        <View style={globalStyle.main}>
            <Image source={{
                width: "100%",
                height: 200,
                url: route.params.img
            }} />
            <Text style={globalStyle.title}>{route.params.name}</Text>
            <Text style={styles.title}>{route.params.anons}</Text>
            <Text style={styles.anons}>{route.params.full}</Text>
            <Button title={"відкрити сторінку"} onPress={openPage}/>
        </View>
    );
}

const styles = StyleSheet.create({

    title: {
        fontFamily: "mt-blold",
        fontSize: 22,
        textAlign: "center",
        marginTop: 20,
        color: "#474747"
    },
    anons: {
        fontSize: 16,
        textAlign: "center",
        marginTop: 5,
        color: "#474747"
    }
});

export default NewsItem;

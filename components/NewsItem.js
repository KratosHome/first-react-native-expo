import React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {globalStyle} from "../style/style";

const NewsItem = ({navigation, route}) => {
    const openPage = () => {
        navigation.navigate("Головна")
    }
    return (
        <View style={globalStyle.main}>
            <Text style={globalStyle.title}>{route.params.name}</Text>
            <Text style={globalStyle.title}>{route.params.anons}</Text>
            <Text style={globalStyle.title}>{route.params.full}</Text>
            <Button title={"відкрити сторінку"} onPress={openPage}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {},
});

export default NewsItem;

import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Header = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>справи</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        height: 100,
        backgroundColor: "silver"
    },
    text: {
        fontSize: 18,
        color: "red",
        textAlign: "center"
    }
});

export default Header;

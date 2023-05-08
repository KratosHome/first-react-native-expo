import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const ListItem = ({text, id, deleteHandler}) => {
    return (
        <TouchableOpacity onPress={() => deleteHandler(id)}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    text: {
        padding: 20,
        textAlign: "center",
        borderRadius: 5,
        backgroundColor: "#fafafa",
        borderWidth: 1,
        marginTop: 20,
        width: "60%",
        marginLeft: "20%"
    }
});

export default ListItem;

import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';

const Form = ({addHandler}) => {

    const [value, setValue] = useState()
    const onChange = (text) => {
        setValue(text)
    }
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={onChange}
                placeholder="нова таска"
            />
            <Button
                title="Додати задачу"
                onPress={() => addHandler(value)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        borderColor: "#000",
        padding: 10,
        marginVertical: 20,
        marginHorizontal: "20%",
        width: "60%"
    },
});

export default Form;

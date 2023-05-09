import React from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';
import {Formik} from "formik";

const Form = ({addArtical}) => {
    return (
        <View style={styles.container}>
            <Formik initialValues={{
                name: "",
                anons: "",
                full: "",
                img: ""
            }} onSubmit={(values, action) => {
                addArtical(values);
                action.resetForm()
            }}
            >
                {
                    (props) => (
                        <View>
                            <TextInput
                                onChangeText={props.handleChange('name')}
                                value={props.values.name}
                                placeholder="name"
                            />
                            <TextInput
                                onChangeText={props.handleChange('anons')}
                                value={props.values.anons}
                                placeholder="anons"
                                multiline
                            />
                            <Button title="add" onPress={props.handleSubmit} />
                        </View>
                    )
                }
            </Formik>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {},
});

export default Form;

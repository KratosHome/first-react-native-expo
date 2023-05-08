import {StatusBar} from 'expo-status-bar';
import {Alert, Button, Image, SafeAreaView, StyleSheet, Text, TouchableHighlight, View} from 'react-native';

export default function App() {

    const openModal = () => {
        Alert.alert("first modal", "main masseg", [
            {
                text: "yesy",
                onPress: () => console.log("yes")
            },
            {
                text: "yesy"
            }
        ])
    }
    const openModalNext = () => {
        Alert.prompt("first modal", "main masseg", text => console.log(text))
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text>Доровенькі були</Text>
            <Button title={"кнопdка"} onPress={openModal}/>
            <Button title={"кнопка два "} onPress={openModalNext}/>
            <TouchableHighlight onPress={openModalNext}>
                <Image source={require("./assets/adaptive-icon.png")}/>
            </TouchableHighlight>
            <StatusBar style="auto"/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "red",
    },
});

import {FlatList, StyleSheet, Text, View} from 'react-native';
import Header from "./components/Header";
import {useState} from "react";

export default function App() {
    const [list, setList] = useState([
        {
            id: Math.random(),
            text: "прибрати"
        },
        {
            id: Math.random(),
            text: "помити машгину"
        },
        {
            id: Math.random(),
            text: "погуляти"
        },
    ])

    return (
        <View>
            <Header/>
            <View>
                <FlatList data={list} renderItem={({item})=> (
                    <Text>
                        {item.text}
                    </Text>
                )} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {},
});

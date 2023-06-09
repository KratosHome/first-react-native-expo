import {FlatList, StyleSheet, Text, View} from 'react-native';
import {globalStyle} from "./style/style";
import * as Font from "expo-font"
import {useState} from "react";
import AppLoading from 'expo-app-loading';
import Route from "./route";

const fonts = () => Font.loadAsync({
    "mt-bold": require("./assets/fonts/AbhayaLibre-Bold.ttf")
})

export default function App() {
    const [font, setFont] = useState(false)
    if (font) {
        return (
            <View style={globalStyle.main}>
                <Route/>
            </View>
        );
    } else {
        return (
            <AppLoading
                startAsync={fonts}
                onFinish={() => setFont(true)}
                onError={console.warn}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {},
});


/*


import {FlatList, StyleSheet, Text, View} from 'react-native';
import Header from "./components/Header";
import {useState} from "react";
import ListItem from "./components/ListItem";
import Form from "./components/Form";

export default function App() {
    const [list, setList] = useState([
        {
            id: Math.random().toString(),
            text: "прибрати"
        },
        {
            id: Math.random().toString(),
            text: "помити машгину"
        },
        {
            id: Math.random().toString(),
            text: "погуляти"
        },
    ])

    const addHandler = (text) => {
        setList((list) => {
            return [
                {
                    id: Math.random().toString(),
                    text: text,
                },
                ...list
            ]
        })
    }

    const deleteHandler = (key) => {
        setList((prevList) => {
            return prevList.filter(list => list.id != key)
        })
    }
    return (
        <View>
            <Header/>
            <Form addHandler={addHandler}/>
            <View>
                <FlatList
                    data={list}
                    renderItem={({item}) => (
                        <ListItem
                            id={item.id}
                            text={item.text}
                            deleteHandler={deleteHandler}
                        />
                    )}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {},
});


 */

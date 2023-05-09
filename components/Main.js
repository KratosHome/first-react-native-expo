import React, {useState} from 'react';
import {Button, FlatList, Image, Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {globalStyle} from "../style/style";
import {AntDesign} from '@expo/vector-icons';
import Form from "./Form";

const Main = ({navigation}) => {
    const openPage = (item) => {
        navigation.navigate("About Ass", item)
    }
    const [news, setNews] = useState([
        {
            id: Math.random().toString(),
            name: "google",
            anons: "info!!",
            full: "google!!!",
            img: "https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/1272556/react-context-api-4929b3703a1a7082d99b53eb1bbfc31f.png"
        },
        {
            id: Math.random().toString(),
            name: "apple",
            anons: "apple!!",
            full: "apple!!!",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdCQKjYZW0ZBllrabjIk-oUpoYKzh6GQD_fDs5C8nZ_6MH7FXxxfMzZn6epbgnHWb4ryk&usqp=CAU"
        },
        {
            id: Math.random().toString(),
            name: "amason",
            anons: "amason!!",
            full: "amason!!!",
            img: "data:image/jpeg;base64,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"
        },
        {
            id: Math.random().toString(),
            name: "gpt",
            anons: "gpt!!",
            full: "gpt!!!",
            img: ""
        },
    ])

    const [modalOpen, setMoadlOpen] = useState(false)

    const addArtical = (arctical) => {
        setNews((prevList) => {
            arctical.id = Math.random().toString();
            return [
                arctical,
                ...prevList
            ]
        })
        setMoadlOpen(false)
    }
    return (
        <View style={globalStyle.main}>
            <AntDesign
                onPress={() => setMoadlOpen(true)}
                name="pluscircle"
                size={34} color="black"
                style={styles.title}
            />
            <Modal visible={modalOpen}>
                <AntDesign
                    name="close"
                    size={24}
                    color="red"
                    style={styles.iconModal}
                    onPress={() => setMoadlOpen(false)}
                />
                <View>
                    <Text style={globalStyle.title}>Додати статью</Text>
                </View>
                <Form addArtical={addArtical}/>
            </Modal>
            <Text style={[globalStyle.title, styles.header]}>Головная сторінка</Text>
            <FlatList
                keyExtractor={(item) => item.id}
                data={news}
                renderItem={({item}) => (
                    <TouchableOpacity
                        style={styles.item}
                        onPress={() => openPage(item)}
                    >
                        <Image source={{
                            width: "100%",
                            height: 200,
                            url: item.img
                        }}/>
                        <Text style={styles.title}>{item.name}</Text>
                        <Text style={styles.anons}>{item.anons}</Text>
                    </TouchableOpacity>
                )}/>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        marginBottom: 30
    },
    item: {
        width: "100%",
        marginBottom: 30,
    },
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
    },
    iconModal: {
        marginTop: 100,
        marginRight: 30,
        textAlign: "right"
    }
});

export default Main;

import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import Main from "./components/Main";
import NewsItem from "./components/NewsItem";
import {StatusBar} from "react-native";

const Stack = createStackNavigator()

export default function Route() {
    return (
        <>
            <StatusBar barStyle="red"/>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name={"Main"}
                        component={Main}
                        options={{
                            title: "Головна",
                            headerStyle: {
                                backgroundColor: "#ed5d3d",
                                height: 100,
                            },
                        }}
                    />
                    <Stack.Screen
                        name={"About Ass"}
                        component={NewsItem}
                        options={{title: "О нас"}}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

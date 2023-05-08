import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import Main from "./components/Main";
import NewsItem from "./components/NewsItem";

const Stack = createStackNavigator()

export default function Route() {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name={"Main"}
                component={Main}
                options={{title: "Головна"}}
            />
            <Stack.Screen
                name={"About Ass"}
                component={NewsItem}
                options={{title: "О нас"}}
            />
        </Stack.Navigator>
    </NavigationContainer>
}

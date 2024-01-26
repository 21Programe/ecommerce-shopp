import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Feather } from '@expo/vector-icons';
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import { Text, TouchableOpacity } from "react-native";

const stack = createNativeStackNavigator();
function Routes() {
    return (
        <NavigationContainer>
            <stack.Navigator>

                <stack.Screen
                    name="home"
                    component={Home}
                    options={{
                        title: 'Alugue', headerTitleStyle: { fontFamily: 'Montserrat_700Bold' }, headerRight: () => (
                            <TouchableOpacity style={{ marginRight: 15 }}>
                                <Feather
                                    name="shopping-bag"
                                    size={24}
                                    color="#000" />
                            </TouchableOpacity>





                        )
                    }}
                />
                <stack.Screen
                    name="detail"
                    component={Detail}
                    options={{
                        title: 'Detalhe', headerTitleStyle: { fontFamily: 'Montserrat_700Bold' }, headerRight: () => (
                            <TouchableOpacity style={{ marginRight: 15 }}>
                                <Feather
                                    name="shopping-bag"
                                    size={24}
                                    color="#000" />
                            </TouchableOpacity>
                        )
                    }}
                />
            </stack.Navigator>
        </NavigationContainer>


    );



}
export default Routes;
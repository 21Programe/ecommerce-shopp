import React from "react";
import { Text, StyleSheet, View, TouchableOpacity, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default function New(props) {
    return (

        <TouchableOpacity onPress={props.onPress} style={style.container} >
            <Image
                source={props.cover}
                style={style.cover}

            />



            <View style={style.content}>

                <Text style={style.title}>
                    {props.name}

                </Text>

                <View style={style.dot}>

                </View>
                <Text style={style.badge}>Novo</Text>
            </View>

            <Text style={style.description}>{props.description}</Text>
            <View style={style.footer}>
                <View style={{ width: '80%', }}>
                    <Text style={style.price}>
                        R$ 1.204,90
                    </Text>
                </View>
                <View style={{ width: '20%', }}>
                    <Ionicons
                        name="ios-add-circle"
                        size={24}
                        color="black"
                    />


                </View>
            </View>

        </TouchableOpacity >






    );




}
const style = StyleSheet.create({
    container: {
        marginTop: 20,
        backgroundColor: '#fff',
        height: 250,
        width: 200,
        elevation: 2,
        borderRadius: 10,
        padding: 15,
        marginRight: 30,
        marginLeft: 2,
        marginBottom: 5,



    },

    cover: {
        width: 170,
        height: 110,
        borderRadius: 10,

    },
    content: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10,


    },
    title: {
        fontFamily: 'Montserrat_700Bold',
        fontSize: 12,
        color: '#4f4a4a',

    },
    dot: {
        width: 4,
        height: 4,
        borderRadius: 4,
        backgroundColor: 'red',
        marginHorizontal: 4,
    },
    badge: {
        color: 'red',
        fontSize: 9,
        fontFamily: 'Montserrat_700Bold',



    },
    description: {
        fontFamily: 'Montserrat_400Regular',
        fontSize: 9,
        color: '#4f4a4a',



    },
    footer: {
        flexDirection: 'row',
        marginTop: 5,
        alignItems: 'center',
        width: '100%',


    },
    price: {
        fontSize: 15,
        fontFamily: 'Montserrat_700Bold',


    },


})
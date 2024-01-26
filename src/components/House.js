import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";



export default function House({ cover, price  }) {
    return (


        <View style={style.container}>
            <View>
                <Image
                    source={cover}
                    style={style.cover}

                />


            </View>

            <View style={style.content}>
                <Text style={style.description}>
                    Descrição da casas para alugar
                </Text>
                <Text style={style.price}>{price}</Text>

            </View>
        </View>




    );

}
const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: 260,
        height: 70,
        backgroundColor: '#fff',
        elevation: 2,
        padding: 6,
        marginVertical: 5,
        marginRight: 2,
        marginLeft: 2,
        borderRadius: 10,






    },
    cover: {
        borderRadius: 10,
        width: 60,
        height: 60,

    },
    content: {
        width: '65%',
        justifyContent: 'flex-end',
        paddingHorizontal: 10,
        height: '100%',




    },
    description: {
        fontSize: 9,
        fontFamily: 'Montserrat_500Medium',



    },
    price: {
fontSize:12,
fontFamily: 'Montserrat_700Bold',


    },






})
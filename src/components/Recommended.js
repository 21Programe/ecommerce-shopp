import React from "react";
import { Text, StyleSheet, View, ImageBackground } from "react-native";

export default function Recommended({ cover, house, offer }) {
    return (


        <ImageBackground
            source={cover}
            style={style.container}
           blurRadius={5}
          
        >
            <Text style={[style.house, style.shadow]}>{house}</Text>
            <Text style={[style.description,  style.shadow]}>{offer}</Text>
        </ImageBackground>


    );


}

const style = StyleSheet.create({
    container: {
        height: 130,
        width: 230,
        marginRight: 20,
        borderRadius: 10,
        marginBottom: 40,
        opacity: 0.8,
        backgroundColor: '#000',
        marginLeft: 3,
        padding: 12,
        marginTop: 20,



    },
    house: {
        fontFamily: 'Montserrat_700Bold',
        color: '#fff',
        fontSize: 15,


    },
    description: {
        fontFamily: 'Montserrat_700Bold',
        color: '#fff',
        fontSize: 12,


    },
    shadow: {
        textShadowColor: '#000',
        textShadowRadius: 3,
        textShadowOffset: { width: 1, height: 2 },



    },

});

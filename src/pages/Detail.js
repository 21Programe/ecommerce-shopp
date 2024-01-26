import React from "react";

import { Text, StyleSheet, View, Image, TouchableOpacity, ScrollView, ImageComponent } from "react-native";
import { Feather, Ionicons } from '@expo/vector-icons';
import Stars from 'react-native-stars';
import SwiperComponent from '../components/Swipe';

export default function Detail() {
    return (

        <View style={style.container}>

            <View style={style.swipercontent}>
                <SwiperComponent />

            </View>

            <View style={style.headerContent}>
                <View style={{ width: '65%' }}>

                    <Text style={style.house}>Casa Na Praia </Text>

                </View>
            </View>

            <View style={style.headerContent}>
                <View style={{ width: '35%' }}>

                    <Text style={style.rating}>Avaliações </Text>
                    <View style={{ alignItems: 'center', flexDirection: 'row'}}>
                        <Stars
                            default={4}
                            count={5}
                            half={true}
                            starSize={20}
                            fullStar={<Ionicons name="md-star" size={24} style={style.myStarStyle}/>}
                            emptyStar={<Ionicons name="md-star-outline" size={24} style={style.myStarStyle}/>}
                            halfStar={<Ionicons name="md-star-half" size={24} style={style.myStarStyle}/>}
                            size={24}

                        />
                    </View>
                </View>
            </View>



        </View>



    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',


    },
    swipercontent: {

        flexDirection: 'row',
        height: 340,
        width: '100%',




    },
    headerContent: {
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginTop: 20,




    },
    house: {
        fontFamily: 'Montserrat_700Bold',
        fontSize: 18,
        color: '#4f4a4a',




    },
    rating: {
        fontFamily: 'Montserrat_700Bold',
        color: '#4f4a4a',



    },
    myStarStyle: {
        color: '#e7a74e',
        backgroundColor: 'trasparent',



    }


});
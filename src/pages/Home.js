import React from "react";
import { Text, StyleSheet, View, ScrollView, TextInput } from "react-native";
import { Feather } from '@expo/vector-icons';
import New from "../components/New";
import House from "../components/House";
import { useNavigation } from '@react-navigation/native';
import Recommended from "../components/Recommended";

export default function Home() {

    const navigation = useNavigation();




    return (


        <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: '#fff' }}>
            <View style={style.header}>
                <View style={style.inputArea}>
                    <Feather
                        name='search' size={24} color={'black'} />
                    <TextInput
                        placeholder="O que está procurando?"
                        style={style.input}
                    />

                </View>
            </View>




            <View style={style.contentNew}>

                <Text style={style.title}>
                    Novidades
                </Text>

            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingHorizontal: 15, }}>

                <New
                    cover={require('../assets/house1.jpg')}
                    name='Casa de Praia'
                    description='Casa nova ema quadra do mar, lugar seguro e monitorado 24horas.'
                    onPress={() => navigation.navigate('detail')}
                />
                <New
                    cover={require('../assets/house2.jpg')}
                    name='Casa de floripa'
                    description='Casa nova ema quadra do mar, lugar seguro e monitorado 24horas.'
                    onPress={() => { }}
                />
                <New
                    cover={require('../assets/house3.jpg')}
                    name='Rancho SP'
                    description='Casa nova ema quadra do mar, lugar seguro e monitorado 24horas.'
                    onPress={() => { }}
                />
            </ScrollView>
            <View style={{ flexDirection: 'row', marginBottom: 10, alignItems: 'center' }}>
                <Text style={[style.title, { marginTop: 20 }]}>Próximo de você</Text>

            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingHorizontal: 15, }}>


                <House
                    cover={require('../assets/house4.jpg')}
                    price='R$ 1.000,00'
                />
                <House
                    cover={require('../assets/house6.jpg')}
                    price='R$ 2.500,00'
                />
                <House
                    cover={require('../assets/house1.jpg')}
                    price='R$ 3.900,90'
                />

            </ScrollView>

            <Text style={[style.title, { marginTop: 20 }]}>
                Dica do dia

            </Text>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingHorizontal: 15, }}>

                <Recommended
                    cover={require('../assets/house5.jpg')}
                    house="Casa Floripa"
                    offer="20%"


                />
                <Recommended
                    cover={require('../assets/house3.jpg')}
                    house="casa São-Paulo"
                    offer="15%"


                />
                <Recommended
                    cover={require('../assets/house2.jpg')}
                    house="Rancho Praia"
                    offer="100%"


                />
            </ScrollView>

        </ScrollView>




    );
}

const style = StyleSheet.create({
    header: {
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginVertical: 20,


    },
    inputArea: {
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        width: '98%',
        backgroundColor: '#fff',
        elevation: 2,
        paddingHorizontal: 10,
        height: 37,
        borderRadius: 10,

    },
    input: {
        fontFamily: 'Montserrat_500Medium',
        paddingHorizontal: 10,
        fontSize: 13,
        width: '90%',
    },
    contentNew: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
    },
    title: {
        paddingHorizontal: 15,
        fontFamily: 'Montserrat_700Bold',
        fontSize: 18,
        color: '#4f4a4a',

    },


});
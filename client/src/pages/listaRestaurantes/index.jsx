import React from "react";
import { globalStyles } from "../../components/atoms";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import ContainerRestaurant from "../../components/molecules/ContainerRestaurant"
import Restaurantes from '../../db/restaurante.json'
import { useEffect } from "react";
import { useState } from "react";

export default function ListaRestaurantes({ navigation }) {
    const [estabelecimento, setEstabelecimento] = useState([]);

    const getRestaurante = async () => {
        try {
            const response = await fetch('http://10.0.0.12:5000/estabelecimento', {
                method: 'GET'
            });

            const parseRes = await response.json();
            setEstabelecimento(parseRes);

        } catch (err) {
            console.error(err.message)
        }
    }

    useEffect(() => {
        getRestaurante()
    }, [])


    return (
        <View style={globalStyles.container}>
            <View style={{ marginTop: 50, marginLeft: 160, flexDirection: "row", justifyContent: 'center' }}>
                <Image style={{ width: 165, height: 61, marginRight: '50%' }} source={require("../../assets/icones/logoMedia.png")}></Image>
            </View>


            <Text style={[globalStyles.textTitle, { fontSize: 24, marginTop: 3 }]}>Restaurantes por perto</Text>
            <FlatList
                nestedScrollEnabled
                style={{ height: 500, flexGrow: 0, marginTop: "5%" }}
                data={estabelecimento}
                keyExtractor={item => item.id_estabelecimento}
                renderItem={({ item }) => <ContainerRestaurant data={item} />}
            />
            {/* Não implementado por enquanto
            <TouchableOpacity underlayColor={'white'} style={[globalStyles.button, { marginTop: 25, width: 306 }]} onPress={() => navigation.navigate('Acesso')}>
                <Text style={[globalStyles.textButton, { color: 'white' }]}>QR code ou ID</Text>
            </TouchableOpacity> */}
        </View>
    );
};
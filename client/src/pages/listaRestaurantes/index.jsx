import React, { useContext } from "react";
import { globalStyles } from "../../components/atoms";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import ContainerRestaurant from "../../components/molecules/ContainerRestaurant"
import { useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "../../Context/Auth";
import { SERVER_IP } from '@env';

// import { carrinhoContext } from "../../Context/Carrinho";

export default function ListaRestaurantes({ navigation }) {
    const { tokenJWT } = useContext(AuthContext);
    const [estabelecimento, setEstabelecimento] = useState([]);

    const getRestaurante = async () => {
        try {
            const response = await fetch(`http://${SERVER_IP}:5000/estabelecimento/getAllEstabelecimentos`, {
                method: 'GET',
                headers: { token: tokenJWT}
            });

            const parseRes = await response.json();
            console.log(parseRes)
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
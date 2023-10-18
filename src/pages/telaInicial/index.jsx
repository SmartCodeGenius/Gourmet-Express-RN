import React from "react";
import { View, Text, TouchableHighlight, Image, FlatList, TextInput } from "react-native";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { globalStyles } from "../../components/atoms";
import userIcon from '../../assets/icones/labelUsuario.png'
import FuncCarousel from "../../components/molecules/carousel";
import FlatListTelaInicial from "../../components/molecules/flatListTelaInicial";
import dados from "../../db/comidas"

export default function TelaInicial({route}){
    const navigation = useNavigation();
    const {nomeRestaurante, dbComidas} = route.params;
    module.exports = {dbComidas};
        return (
        <View style={globalStyles.container}>
            <View style={{ marginTop: '15%', flexDirection: "row", alignSelf: 'flex-end' }}>
                <View style={{ marginRight: "34%", flexDirection: 'row' }}>
                    <Image source={userIcon}></Image>
                    <View style={{ marginLeft: '3%', flexDirection: 'column', marginTop: "3.5%" }}>
                        <Text style={{ color: '#7C0B0B', fontSize: 20 }}>Usuario</Text>
                        <Text style={{ color: '#7C0B0B', fontSize: 20 }}>R$: 50,00</Text>
                    </View>
                </View>

                <TouchableHighlight onPress={() => navigation.dispatch(DrawerActions.openDrawer())} underlayColor={'white'} >
                    <Image source={require("../../assets/icones/menuIcon.png")} />
                </TouchableHighlight>
            </View>

            <Text style={{ color: '#7C0B0B', fontSize: 35, marginTop: 40, marginBottom: 20 }}>{nomeRestaurante}</Text>
            <View style={{ height: '36%', width: 'auto' }}>
                <FuncCarousel />
            </View>

            <TextInput placeholder="Pesquisa" style={[globalStyles.textInput, { marginBottom: '2%', marginTop: '1%', borderRadius: 15, width: "55%", height: "5%" }]}></TextInput>
            <FlatList
                nestedScrollEnabled
                data={dados[dbComidas]}
                keyExtractor={item => item.key}
                renderItem={({ item }) => <FlatListTelaInicial data={item} />}
            />
        </View>
    )
}


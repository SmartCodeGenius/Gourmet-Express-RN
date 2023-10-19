import React from "react";
import { Pressable, View, Text, TouchableHighlight, Image, FlatList, TextInput, Dimensions } from "react-native";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import Carousel from "react-native-snap-carousel";
import { globalStyles } from "../../components/atoms";
import image from '../../db/image'
import userIcon from '../../assets/icones/labelUsuario.png'
import FlatListTelaInicial from "../../components/molecules/flatListTelaInicial";
import dados from "../../db/comidas"

export default function TelaInicial({ route }) {
    const navigation = useNavigation();
    const { nomeRestaurante, dbComidas } = route.params;
    module.exports = { dbComidas };

    // Criação do carousel
    const FuncCarousel = () => {
        const SLIDER_WIDTH = Dimensions.get("window").width
        const ITEM_WIDTH = SLIDER_WIDTH * 0.93
        return (
            <Carousel
                data={dados[dbComidas]}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                useScrollView={true}
                removeClippedSubviews={false}
                renderItem={({ item }) => {
                    return (
                        <View style={{ backgroundColor: '#7C0B0B', width: 'auto', height: 245, borderRadius: 30 }}>
                            <Text style={[globalStyles.textTitle, { fontSize: 24, fontWeight: 'bold', color: 'white', marginTop: 10 }]}>{item.nome}</Text>
                            <Pressable onPress={() => navigation.navigate('Item', { nome: item.nome, preço: item.preço, img: item.img, ingrediente: item.ingrediente, unidade: item.unidade, nota:item.avaliacao })}>
                                <Image source={image[item.img]} style={{ height: 127, width: 306, borderRadius: 30, alignSelf: 'center', marginTop: '2.5%' }} />
                            </Pressable>
                            <Text style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold', color: 'white', marginTop: '3%' }}>Por R${item.preço}!</Text>
                        </View>
                    )
                }}
            />
        )
    }
    // Código da pagina
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


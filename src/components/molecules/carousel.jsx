import React from 'react';
import { Dimensions, View, Text } from 'react-native';
import Carousel from 'react-native-snap-carousel'

const SLIDER_WIDTH = Dimensions.get("window").width
const ITEM_WIDTH = SLIDER_WIDTH * 0.88


const dados = [{
    key: 1,
    nome: 'Pão de queijo',
    unidade: 3,
    preço: 9.00,
    dateUltimoPedido: '12/2/23 07:42',
    avaliacao: 4,
},{
    key: 2,
    nome: 'Pão de queijo',
    unidade: 3,
    preço: 9.00,
    dateUltimoPedido: '12/2/23 07:42',
    avaliacao: 4,
},{
    key: 3,
    nome: 'Pão de queijo',
    unidade: 3,
    preço: 9.00,
    dateUltimoPedido: '12/2/23 07:42',
    avaliacao: 4,
},]

function cardItem(){
    return(
        <View>
            <Text>opa</Text>
        </View>
    )
} 

export default function FuncCarousel(){
    return(
        <Carousel
        data={dados}
        renderItem={cardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        useScrollView={true}

        />
    )
}

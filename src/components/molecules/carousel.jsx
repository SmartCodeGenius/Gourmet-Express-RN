import React from 'react';
import { Dimensions, View, Text, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel'
import { globalStyles } from '../atoms';
import Template from '../../assets/icones/imagePlaceholder.png'

const SLIDER_WIDTH = Dimensions.get("window").width
const ITEM_WIDTH = SLIDER_WIDTH * 0.88


const dados = [{
    key: 1,
    nome: 'Pão de queijo',
    unidade: 3,
    preço: 9.00,
    dateUltimoPedido: '12/2/23 07:42',
    avaliacao: 4,
    img: Template
},{
    key: 2,
    nome: 'Pão de queijo',
    unidade: 3,
    preço: 9.00,
    dateUltimoPedido: '12/2/23 07:42',
    avaliacao: 4,
    img: Template
},    
    {key: 3,
    nome: 'Pão de queijo',
    unidade: 3,
    preço: 9.00,
    dateUltimoPedido: '12/2/23 07:42',
    avaliacao: 4,
    img: Template
},]

export default function FuncCarousel(){
    return(
        <Carousel
        data={dados}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        useScrollView={true}
        renderItem={({item}) => {
            return(
            <View style={{backgroundColor: '#7C0B0B', width: 337, height: 245, borderRadius: 30}}>
                <Text style={[globalStyles.textTitle, {fontSize: 24, fontWeight: 'bold', color: 'white', marginTop: 10}]}>{item.nome}</Text>
                <Image source={item.img} style={{height: 127, width: 306, borderRadius: 30, alignSelf: 'center', marginTop: '2.5%'}}/>
                <Text style={{textAlign: 'center', fontSize: 30, fontWeight: 'bold', color:'white', marginTop: '3%'}}>Por R${item.preço}!</Text>
            </View>
            )
        }}
        />
    )
}

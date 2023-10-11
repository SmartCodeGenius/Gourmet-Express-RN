import React from 'react';
import { Dimensions, View, Text, Image, Pressable } from 'react-native';
import Carousel from 'react-native-snap-carousel'
import { globalStyles } from '../atoms';
import image from '../../db/image'
import dados from '../../db/comidas'
import { useNavigation } from '@react-navigation/native';

const SLIDER_WIDTH = Dimensions.get("window").width
const ITEM_WIDTH = SLIDER_WIDTH * 0.93

export default function FuncCarousel(){
    const navigation = useNavigation();
    return(
        <Carousel
        data={dados}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        useScrollView={true}
        renderItem={({item}) => {
            return(
            <View style={{backgroundColor: '#7C0B0B', width: 'auto', height: 245, borderRadius: 30}}>
                <Text style={[globalStyles.textTitle, {fontSize: 24, fontWeight: 'bold', color: 'white', marginTop: 10}]}>{item.nome}</Text>
                <Pressable onPress={() => navigation.navigate('Item', {nome: item.nome, preço: item.preço, img: item.img, ingrediente: item.ingrediente, unidade: item.unidade})}>
                <Image source={image[item.img]} style={{height: 127, width: 306, borderRadius: 30, alignSelf: 'center', marginTop: '2.5%'}}/>
                </Pressable>
                <Text style={{textAlign: 'center', fontSize: 30, fontWeight: 'bold', color:'white', marginTop: '3%'}}>Por R${item.preço}!</Text>
            </View>
            )
        }}
        /> 
    )
}

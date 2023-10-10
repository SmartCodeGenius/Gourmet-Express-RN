import React from "react";
import { View, Text, Image } from "react-native";
import image from '../../db/image'


export default function FlatListCarrinho({data}) {
    return (
        <View style={{ borderRadius: 20, flexDirection: "row", backgroundColor: '#7C0B0B', width: 280, height: 120, marginTop: '8%', marginLeft: '5%'}}>
            <Image style={{borderRadius: 12, width: 115, height: 76, alignSelf: 'center', marginLeft: '5%'}} source={image[data.img]}></Image>
            <View>
                <Text style={{fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginLeft: '5%', marginTop: '14%',color: 'white'}}>{data.nome}</Text>
                <Text style={{fontSize: 18, fontWeight: 'bold', marginLeft: '9%', marginTop: '4%',color: 'white'}}>R$: {data.preço}</Text>
            </View>
        </View>
    )
}
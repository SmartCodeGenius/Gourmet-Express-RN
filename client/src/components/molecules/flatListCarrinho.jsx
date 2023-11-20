import React from "react";
import { View, Text, Image } from "react-native";
import image from '../../assets/icones/img_estabelecimento.png'


export default function FlatListCarrinho({data}) {
    return (
        <View style={{ borderRadius: 20, flexDirection: "row", backgroundColor: '#7C0B0B', width: 'auto', height: 'auto', paddingHorizontal: 10, paddingVertical: 20, marginTop: '6%', marginLeft: '5%'}}>
            <Image style={{borderRadius: 12, width: 130, height: 90, alignSelf: 'center', marginLeft: '5%'}} source={image}></Image>
            <View>
                <Text style={{fontSize: 20, fontWeight: 'bold', marginLeft: '9%',color: 'white'}}>  </Text>
                <Text style={{fontSize: 20, fontWeight: 'bold', marginLeft: '9%', marginTop: '4%',color: 'white'}}>R$:</Text>
                <Text style={{fontSize: 20, fontWeight: 'bold', marginLeft: '9%', marginTop: '4%',color: 'white'}}>Quantidade:</Text>
            </View>
        </View>
    )
}
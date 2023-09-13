import React from "react";
import { View, Text, Image } from "react-native/";
import labelImage from '../../assets/icones/imagePlaceholder.png'

export default function FlatListProducts({data}){
    return(
        <View style={{}}>
            <View style={{flexDirection: 'row'}}>
            <Image style={{height:76, width: '50%'}} source={labelImage}></Image>
            <Text>{data.nome}</Text>
            <Text style={{textAlignVertical: 'center'}}>AAA</Text>
            </View>
        </View>
    )
}
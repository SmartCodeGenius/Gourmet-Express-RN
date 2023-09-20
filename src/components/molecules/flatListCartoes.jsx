import React from "react";
import { View, Text, Image } from "react-native";
import Template from '../../assets/icones/imagePlaceholder.png'

export default function FlatlistCartoes({data}){
    return(
        <View style={{width: 247, height: 148, backgroundColor: 'rgba(7,30,34,0.3)', borderRadius: 30, marginLeft: 20, borderColor: 'black', borderWidth: 1.5}}>
            <View style={{flexDirection: 'row'}}>
                <Image source={Template} style={{width: 50, height: 50, marginTop: 15, marginLeft: 15}}></Image>
                <Text style={{textAlign: "center", paddingTop: 30, paddingLeft: 15, fontWeight: 'bold', fontSize: 18}}>{data.nome}</Text>
            </View>

            <View style={{marginTop: 20, marginLeft: 20}}>
                <Text style={{color: 'black', fontWeight: '500', fontSize: 20}}>{data.tipo}</Text>
                <Text style={{color: 'black', fontWeight: '500', fontSize: 20}}>{data.backNumber}</Text>
            </View>
        </View>
    );
}
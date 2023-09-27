import React from "react";
import { View, Text, Image } from "react-native";
import Template from '../../assets/icones/imagePlaceholder.png'


export default function FlatListTelaInicial({data}){
    return(
        <View style={{paddingTop: 20, borderColor: 'gray', borderBottomWidth: 1, paddingBottom: 20}}>
          <View style={{flexDirection: "row"}}>
            <Image source={Template} style={{width: 144.11, height: 93, borderRadius: 10, marginRight: 40}}></Image>
            <View>
              <Text style={{fontWeight: 'bold', fontSize: 24, textAlign: 'center'}}>{data.nome}</Text>
              <Text>R${data.preço}</Text>
            </View>
          </View>
        </View>
    )
}
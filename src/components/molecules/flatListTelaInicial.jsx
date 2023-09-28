import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import Template from '../../assets/icones/imagePlaceholder.png'
import { useNavigation } from '@react-navigation/native';

export default function FlatListTelaInicial({data}){
  const navigation = useNavigation();

    return(
        <View style={{paddingTop: 20, borderColor: 'gray', borderBottomWidth: 1, paddingBottom: 20}}>
          <View style={{flexDirection: "row"}}>
            <Pressable onPress={() => navigation.navigate('Item', {nome: data.nome, preço: data.preço, img: data.img, ingrediente: data.ingrediente})}>
            <Image source={Template} style={{width: 144.11, height: 93, borderRadius: 10, marginRight: 40}}></Image>
            </Pressable>
            <View>
              <Text style={{fontWeight: 'bold', fontSize: 24, textAlign: 'center'}}>{data.nome}</Text>
              <Text>R${data.preço}</Text>
            </View>
          </View>
        </View>
    )
}
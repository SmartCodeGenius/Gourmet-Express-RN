import React from "react";
import { View, Text, Image, FlatList } from "react-native";
import { globalStyles } from "../../components/atoms";
import FlatListCarrinho from "../../components/molecules/flatListCarrinho";
import dados from '../../db/comidas.json'
import image from '../../db/image'


export default function Carrinho() {
  return (
    <View style={globalStyles.container}>
      <Text style={{fontSize: 40, fontWeight: 'bold', marginTop: '20%', marginLeft: '-30%', textAlign: 'center'}}>Carrinho</Text>

      <FlatList
      data={dados}
      keyExtractor={item=> item.key}
      renderItem={({item}) => <FlatListCarrinho data={item}/>}
      />

    </View >
  )
}
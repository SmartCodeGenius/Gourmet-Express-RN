import React from "react";
import { View, Text, Image, FlatList, TouchableHighlight } from "react-native";
import { globalStyles } from "../../components/atoms";
import FlatListCarrinho from "../../components/molecules/flatListCarrinho";
import dados from '../../db/comidas.json'
import image from '../../db/image'


export default function Carrinho() {
  return (
    <View style={globalStyles.container}>
      <Text style={{ fontSize: 40, fontWeight: 'bold', marginTop: '13%', textAlign: 'center' }}>Carrinho</Text>

      <FlatList
        data={dados}
        keyExtractor={item => item.key}
        renderItem={({ item }) => <FlatListCarrinho data={item} />}
      />

      <View style={{ width: '100%', height: 'auto', backgroundColor: '#7C0B0B' }}>
        <View style={{ borderBottomWidth: 1 }}>
          <Text style={{ padding: 5, color: 'white', textAlign: 'center', fontSize: 20 }}>Resumo do Pedido</Text>
        </View>
        <Text style={{ padding: 10, color: 'white', textAlign: 'center', fontSize: 20 }}>Subtotal R$: 11,00</Text>

        <TouchableHighlight style={{ backgroundColor: 'white', alignSelf: 'flex-start', marginTop: '2%', alignSelf: 'center', padding: 8, borderRadius: 16 }}>
          <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>Fechar Pedidos</Text>
        </TouchableHighlight> 

        <TouchableHighlight style={{ backgroundColor: 'white', alignSelf: 'flex-start', alignSelf: 'center', marginTop: '4%', padding: 8, borderRadius: 16, marginBottom: '5%' }}>
          <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>Escolher mais produtos</Text>
        </TouchableHighlight>
      </View>
    </View >
  )
}
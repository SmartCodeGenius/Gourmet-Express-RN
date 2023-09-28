import React from "react";
import { View, Text, useState} from "react-native";
import { globalStyles } from "../../components/atoms";


export default function Carrinho(){
    return(
        <View style={globalStyles.container}>
            <Text>aaa</Text>
        </View>
    )
}

const dados = [{
    key: 1,
    nome: 'Pão de queijo',
    unidade: 3,
    preço: 9.00,
    dateUltimoPedido: '12/2/23 07:42',
    avaliacao: 4,
    noCarrinho: false
  },{
    key: 2,
    nome: 'Pão de queijo',
    unidade: 3,
    preço: 9.00,
    dateUltimoPedido: '12/2/23 07:42',
    avaliacao: 4,
    noCarrinho: false
  },{
    key: 3,
    nome: 'Pão de queijo',
    unidade: 3,
    preço: 9.00,
    dateUltimoPedido: '12/2/23 07:42',
    avaliacao: 4,
    noCarrinho: false
  },{
    key: 4,
    nome: 'Pão de queijo',
    unidade: 3,
    preço: 9.00,
    dateUltimoPedido: '12/2/23 07:42',
    avaliacao: 4,
    noCarrinho: true
  },{
    key: 5,
    nome: 'Pão de queijo',
    unidade: 3,
    preço: 9.00,
    dateUltimoPedido: '12/2/23 07:42',
    avaliacao: 4,
    noCarrinho: true
  }]
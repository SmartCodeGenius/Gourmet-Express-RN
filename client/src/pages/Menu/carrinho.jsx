import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { View, Text, Image, FlatList, TouchableHighlight } from "react-native";
import { globalStyles } from "../../components/atoms";
import FlatListCarrinho from "../../components/molecules/flatListCarrinho";
import { carrinhoContext } from "../../Context/Carrinho";

export default function Carrinho({ navigation }) {
  const { carrinho, setCarrinho } = useContext(carrinhoContext);
  const [total, setTotal] = useState(0);

  function calcularTotal() {
    for (let index = 0; index < carrinho.length; index++) {
      setTotal(carrinho[index].preço * carrinho[index].quantia)
    }
  }

  function concluirPedidos() {
    carrinho.map(async (pedido) => {
      const body = { idProduto: pedido.id, adicional: pedido.observacao, quantia: pedido.quantia };

      const response = await fetch('http://10.3.116.156:5000/pedidos/realizarPedido', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });

      const parseRes = await response.json();

      if (parseRes === 'Pedido criado com sucesso') {
        setCarrinho([{ nome: "", preço: 0, id: 0, quantia: 0, observacao: "" }])
        navigation.goBack();
      }
    });
  }

  useEffect(() => {
    calcularTotal()
  }, [carrinho])

  return (
    <View style={globalStyles.container}>
      <Text style={{ fontSize: 40, fontWeight: 'bold', marginTop: '13%', textAlign: 'center' }}>Carrinho</Text>

      {carrinho[0].quantia !== 0 ? <FlatList
        data={carrinho}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <FlatListCarrinho data={item} />}
      /> : ''} 
      {/* // Se o tamanho do carrinho for 1 (Valor padrão de um carrinho vazio) */}

      <View style={{ width: '100%', height: 'auto', backgroundColor: '#7C0B0B' }}>
        <View style={{ borderBottomWidth: 1 }}>
          <Text style={{ padding: 5, color: 'white', textAlign: 'center', fontSize: 20 }}>Resumo do Pedido</Text>
        </View>
        <Text style={{ padding: 10, color: 'white', textAlign: 'center', fontSize: 20 }}>Subtotal R$: {total}</Text>

        <TouchableHighlight style={{ backgroundColor: 'white', alignSelf: 'flex-start', marginTop: '2%', alignSelf: 'center', padding: 8, borderRadius: 16 }} onPress={() => concluirPedidos()}>
          <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>Concluir Pedidos</Text>
        </TouchableHighlight>

        <TouchableHighlight style={{ backgroundColor: 'white', alignSelf: 'flex-start', alignSelf: 'center', marginTop: '4%', padding: 8, borderRadius: 16, marginBottom: '5%' }}>
          <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>Ver pedidos em andamento</Text>
        </TouchableHighlight>
      </View>
    </View >
  )
}
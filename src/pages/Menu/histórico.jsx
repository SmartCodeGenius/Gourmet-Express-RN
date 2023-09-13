import React from "react";
import {Text, View, Switch, FlatList} from 'react-native';
import { globalStyles } from "../../components/atoms";
import FlatListProducts from "../../components/molecules/flatListProducts";

const dados = [{
    key: 1,
    nome: 'Pão de queijo',
    unidade: 3,
    preço: 9.00,
    dateUltimoPedido: '12/12/2002',
    avaliacao: 4,
}]

export default function HistoricoDrawer(){
    return(
        <View style={globalStyles.container}>
            <View style={globalStyles.containerHeader}>
                <Text style={[globalStyles.textTitle, {textAlign: 'left', marginLeft: 15,marginTop: 55, color:'white'}]}>Histórico</Text>
            </View>
            <FlatList 
            data={dados}
            keyExtractor={item => item.key}
            renderItem={({item})=> <FlatListProducts data={item}/>}
            />
        </View>
    );
}
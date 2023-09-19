import React from "react";
import {FlatList, Text, TouchableHighlight, View} from 'react-native';
import FlatlistCartoes from "../../components/molecules/flatListCartoes";
import { globalStyles } from "../../components/atoms";

export default function CarteiraDrawer(){
    return(
        <View style={globalStyles.container}>
            <View style={{marginTop: 100}}>
                <Text style={{textAlign:'center', fontSize: 56, fontWeight: 'bold'}}>Carteira</Text>
            </View>

            <View style={{marginTop: 50}}>
                <Text style={{textAlign: 'center', fontSize: 20 }}>Saldo disponivel</Text>
                <Text style={globalStyles.textTitle}>R$ 50.00</Text>
            </View>

            <View style={{marginTop: 60}}>
            <TouchableHighlight style={{backgroundColor: '#7C0B0B', width: 329, height: 42, borderRadius: 30}}>
                    <Text style={{textAlign: 'center', paddingTop: 10, color: 'white'}}>Adicionar créditos</Text>
                </TouchableHighlight>

                <TouchableHighlight style={{backgroundColor: '#7C0B0B', width: 329, height: 42, borderRadius: 30, marginTop: 20}}>
                    <Text style={{textAlign: 'center', paddingTop: 10, color: 'white'}}>Adicionar métodos de pagamento</Text>
                </TouchableHighlight>
            </View>

            <View style={{marginTop: 83}}>
                <Text style={globalStyles.textTitle}>Cartões Disponiveis</Text>
                <FlatList
                data={dados}
                keyExtractor={item => item.key}
                horizontal={true}
                renderItem={({item}) => <FlatlistCartoes data={item}/>}
                />
            </View>
        </View>
    );
}

const dados = [{
    key: 1,
    nome: 'Cartão de Crédito',
    tipo: 'Mastercard Black',
    backNumber: '4494690175658742'
},{
    key: 2,
    nome: 'Cartão de Débito',
    tipo: 'C6 Bank',
    backNumber: '4494690175658742'
},

]
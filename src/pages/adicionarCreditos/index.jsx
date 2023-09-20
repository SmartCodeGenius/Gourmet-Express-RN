import React from "react";
import { View, Text, TextInput, TouchableHighlight } from "react-native";
import { globalStyles } from "../../components/atoms";

export default function AdicionarCreditos({navigation}){
    return(
        <View style={globalStyles.container}>
            <Text style={[globalStyles.textTitle, {marginTop: 76}]}>Adicionar Saldos</Text>
            <View style={{marginTop: 50}}>
                <Text style={{fontSize: 56, fontWeight: 'bold'}}>R$ 50.00</Text>
                <Text style={{textAlign: 'center', fontSize: 20 }}>Saldo disponivel</Text>
            </View>

            <View style={globalStyles.containerForm}> 
            <TextInput keyboardType="decimal-pad" placeholder="Valor a depositar" style={[globalStyles.textInput, {marginTop: 35}]}></TextInput>
            <TouchableHighlight underlayColor={'white'} style={[globalStyles.button, {marginTop: 40}]} onPress={() => navigation.navigate('Carteira')}>
                <Text style={{fontSize: 24, fontWeight: 'bold', color: 'white'}}>Adicionar saldo</Text>
            </TouchableHighlight>
            <Text style={{marginTop: 55, fontSize: 24, fontWeight: 'bold'}}>Valores Recomendados</Text>
            
                <View style={{flexDirection: 'row', marginTop: 25}}>
                    <TouchableHighlight underlayColor={'white'} style={[globalStyles.button, {width: 90}]}>
                        <Text style={{color: 'white', fontSize: 24, fontWeight: '500', textAlign: 'center'}}>R$10</Text>
                    </TouchableHighlight>
                    
                    <TouchableHighlight underlayColor={'white'} style={[globalStyles.button, {marginLeft: 25, width: 90}]}>
                        <Text style={{color: 'white', fontSize: 24, fontWeight: '500', textAlign: 'center'}}>R$25</Text>
                    </TouchableHighlight>
                </View>

                <View style={{flexDirection: 'row', marginTop: 15}}>
                    <TouchableHighlight underlayColor={'white'} style={[globalStyles.button, {width: 90}]}>
                        <Text style={{color: 'white', fontSize: 24, fontWeight: '500', textAlign: 'center'}}>R$50</Text>
                    </TouchableHighlight>
                    
                    <TouchableHighlight underlayColor={'white'}  style={[globalStyles.button, {marginLeft: 25, width: 90}]}>
                        <Text style={{color: 'white', fontSize: 24, fontWeight: '500', textAlign: 'center'}}>R$75</Text>
                    </TouchableHighlight>
                </View>
            </View>       
        </View>
    )
}
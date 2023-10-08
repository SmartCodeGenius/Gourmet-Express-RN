import React from "react";
import { View, Text, TextInput, TouchableHighlight } from "react-native";
import { globalStyles } from "../../components/atoms";

export default function ValeRefeição({navigation}){
    return(
        <View style={globalStyles.container}>
            <Text style={[globalStyles.textTitle, {marginTop: 50}]}>Vale Refeição</Text>

            <View style={{marginTop: 60}}>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>Nome do Titular</Text>
                <TextInput style={globalStyles.textInput} placeholder="Nome"></TextInput>
            </View>

            
            <View style={{marginTop: 60}}>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>Número do cartão</Text>
                <TextInput style={globalStyles.textInput} placeholder="Número do cartão"></TextInput>
            </View>

            <View style={{flexDirection: "row", marginTop: 100}}>
                <View style={{marginRight: 44}}>
                    <Text style={{fontSize: 25, fontWeight: 'bold'}}>Validade</Text>
                    <TextInput style={[globalStyles.textInput, {width: 135, height: 42}]} placeholder="val"></TextInput>    
                </View> 
                <View>
                    <Text style={{fontSize: 25, fontWeight: 'bold'}}>CVV</Text>
                    <TextInput style={[globalStyles.textInput, {width: 135, height: 42}]} placeholder="cvv"></TextInput>    
                </View>
            </View>
            
            <TouchableHighlight underlayColor={'white'} style={[globalStyles.button, {width: 340, height: 60,marginTop: 100}]} onPress={() => navigation.navigate('Carteira')}>
                    <Text style={{color: 'white', fontSize: 24, textAlign: 'center', fontWeight: '500'}}>Adicionar Vale</Text>
            </TouchableHighlight>
        </View>
    )
}
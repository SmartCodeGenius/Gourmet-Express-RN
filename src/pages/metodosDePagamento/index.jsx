import React from "react";
import { View, Text, TouchableHighlight } from "react-native";
import { globalStyles } from "../../components/atoms";

export default function MetodosDePagamento(){
    return(
        <View style={globalStyles.container}>
            <Text style={{fontSize: 30, fontWeight: 'bold', paddingHorizontal: 30, textAlign: 'center', marginTop: 50}}>Nova forma de pagamento</Text>
        
        <View>
            <TouchableHighlight style={[globalStyles.button, {width: 250, marginTop: "15%"}]}>
                <Text style={{fontWeight:'bold', fontSize: 24, color: 'white'}}>Cartão de crédito</Text>
            </TouchableHighlight>
            <TouchableHighlight style={[globalStyles.button, {width: 250, marginTop: "15%"}]}>
                <Text style={{fontWeight:'bold', fontSize: 24, color: 'white'}}>Cartão de Débito</Text>
            </TouchableHighlight>
            <TouchableHighlight style={[globalStyles.button, {width: 250, marginTop: "15%"}]}>
                <Text style={{fontWeight:'bold', fontSize: 24, color: 'white'}}>Google Pay</Text>
            </TouchableHighlight>
            <TouchableHighlight style={[globalStyles.button, {width: 250, marginTop: "15%"}]}>
                <Text style={{fontWeight:'bold', fontSize: 24, color: 'white'}}>Vale Refeição</Text>
            </TouchableHighlight>
            <TouchableHighlight style={[globalStyles.button, {width: 250, marginTop: "15%"}]}>
                <Text style={{fontWeight:'bold', fontSize: 24, color: 'white'}}>Vale Alimentação</Text>
            </TouchableHighlight>
        </View>
        </View>
    )
}
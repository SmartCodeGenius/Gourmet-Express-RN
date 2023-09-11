import React from "react";
import { globalStyles } from "../../components/atoms";
import { View, Text } from "react-native";

export default function InformacoesOpcionas (){
    return(
        <View style={globalStyles.container}>
            <Text style={[globalStyles.textTitle, {fontSize: 40, textAlign: "center", marginTop: 80}]}>Informações Opcionais</Text>

            <View>
                <TextInput style={[globalStyles.textInput, {marginTop: 50, marginBottom: 30}]} placeholder='Nome de Usuário'></TextInput>
                <TextInput style={[globalStyles.textInput, {marginTop: 50, marginBottom: 30}]} placeholder='Nome de Usuário'></TextInput>
            </View>
        </View>
    )
}
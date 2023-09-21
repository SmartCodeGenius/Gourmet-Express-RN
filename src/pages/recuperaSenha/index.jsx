import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { globalStyles } from "../../components/atoms";

export default function RecuperaSenha({navigation}){
    return(
    <View style={globalStyles.container}>
        <Text style={[globalStyles.textTitle, {marginTop: 90, textAlign: "center"}]}>Recupera{'\n'}Senha</Text>
        <Text style={{marginTop: 80, width: 311, height: 107, fontSize: 24, textAlign: 'center'}}> Coloque seu email e em seguida aguarde pela recuperação da senha</Text>
        <TextInput style={[globalStyles.textInput, {width: 330, height: 42}]} placeholder="Email"></TextInput>
        
        <TouchableOpacity style={[globalStyles.button, {marginTop: 60}]} onPress={() => navigation.navigate('CriarNovaSenha')}>
            <Text style={{fontSize: 22, color: 'white', fontWeight: 'bold'}}>Confirmar</Text>
        </TouchableOpacity>
    </View>
    );
}
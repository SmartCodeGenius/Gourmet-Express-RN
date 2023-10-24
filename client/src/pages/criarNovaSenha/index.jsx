import React from "react";
import { View, Text, TextInput, TouchableHighlight } from "react-native";
import { globalStyles } from "../../components/atoms";

export default  function CriarNovaSenha({navigation}){
    return(
        <View style={globalStyles.container}>
            <Text style={{fontSize: 40, fontWeight: 'bold', marginTop: 70, paddingHorizontal: 80, textAlign: 'center'}}>Criar nova senha</Text>

            <View style={[globalStyles.containerForm, {marginTop: 80}]}>
                <TextInput secureTextEntry={true} style={[globalStyles.textInput, {width: 330, height: 42}]} placeholder="Nova senha"></TextInput>
                <TextInput secureTextEntry={true} style={[globalStyles.textInput, {width: 330, height: 42, marginTop: 40}]} placeholder="Confirmar senha"></TextInput>
                <TouchableHighlight underlayColor={'white'} style={[globalStyles.button, {marginTop: 66}]} onPress={() => navigation.navigate('login')}>
                    <Text style={{fontSize: 22, fontWeight: 'bold', color: 'white'}}>Confirmar</Text>
                </TouchableHighlight>
            </View>
        </View>
    )
}
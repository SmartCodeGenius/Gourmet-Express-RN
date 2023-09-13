import React from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView} from "react-native";
import { globalStyles } from "../../components/atoms";

export default function Index({navigation}) {
    return(
        <ScrollView contentContainerStyle={[globalStyles.container, {alignContent: 'center'}]}>
        <View>
            <View style={{width: '100%', height: '100%',justifyContent: "center", alignItems: 'center'}}>
                <Text style={[globalStyles.textTitle, {alignSelf: 'center', marginBottom: 30}]}>Crie sua conta</Text>  

                <TextInput style={[globalStyles.textInput, {marginTop: 50, marginBottom: 30}]} placeholder='Nome de Usuário'></TextInput>
                <TextInput style={[globalStyles.textInput, {marginBottom: 30}]} placeholder='Email' keyboardType="email-address"></TextInput>
                <TextInput style={[globalStyles.textInput, {marginBottom: 30}]} placeholder='Número de telefone' keyboardType="phone-pad" maxLength={11}></TextInput>
                <TextInput style={[globalStyles.textInput, {marginBottom: 30}]} placeholder='Senha' secureTextEntry={true}></TextInput>
                <TextInput style={[globalStyles.textInput, {marginBottom: 30}]} placeholder='Confirmar senha' secureTextEntry={true}></TextInput>
                
                <TouchableOpacity underlayColor={'white'} style={[globalStyles.button, {alignSelf: 'center', marginTop: 30}]} onPress={() => navigation.navigate('telaConfirmacao')}>
                <Text style={{color: 'white', fontSize: 28, fontWeight: "bold"}}>Próximo</Text>
                </TouchableOpacity>
            </View>
        </View>
    </ScrollView>
    );
}

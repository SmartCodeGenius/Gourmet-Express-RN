import React from "react";
import { View, Text, TextInput, Pressable, ScrollView} from "react-native";
import { globalStyles } from "../../styles";

export default function Index() {
    return(
        <View style={[globalStyles.container, {alignContent: 'center'}]}>
            <Text style={[globalStyles.textTitle, {marginTop: 72}]}>Crie sua conta</Text>   

            <View>
                <TextInput style={[globalStyles.textInput, {marginTop: 50, marginBottom: 40}]} placeholder='Nome de Usuário'></TextInput>
                <TextInput style={[globalStyles.textInput, {marginBottom: 40}]} placeholder='Senha'></TextInput>
                <TextInput style={[globalStyles.textInput, {marginBottom: 40}]} placeholder='Confirmar senha'></TextInput>
                <TextInput style={[globalStyles.textInput, {marginBottom: 40}]} placeholder='Email'></TextInput>
                <TextInput style={[globalStyles.textInput, {marginBottom: 40}]} placeholder='Número de telefone'></TextInput>
                <TextInput style={[globalStyles.textInput, {marginBottom: 30}]} placeholder='Data de nascimento'></TextInput>
                <Pressable style={[globalStyles.button, {alignSelf: 'center'}]}>
                    <Text style={{color: 'white', fontSize: 28, fontWeight: "bold"}}>Próximo</Text>
                </Pressable>
            </View>
        </View>
    );
}
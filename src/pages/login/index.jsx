import React from "react";
import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, Pressable } from "react-native";
import { ScrollView } from "react-native";
import { globalStyles } from '../../components/atoms';

export default function Login({navigation}) {
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();

    return(
        <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
        <View style={globalStyles.container}>
            <Text style={[globalStyles.textTitle, {marginTop: 130}]}>Login</Text>

            <View style={{marginTop: 101, alignSelf: 'center'}}>
                <TextInput placeholder="Email" onChangeText={newText => setEmail(newText)} style={[globalStyles.textInput, {marginBottom: 31}]}></TextInput>
                <TextInput secureTextEntry={true} onChangeText={newText => setSenha(newText)} placeholder="Senha" style={[globalStyles.textInput]}></TextInput>

                <TouchableOpacity onPress={() => navigation.navigate('RecuperaSenha')}>
                    <Text style={{textAlign: 'center', fontSize: 16, color: 'grey'}}>Não lembra a senha?</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('listaRestaurantes')} style={[globalStyles.button, {alignSelf: 'center', marginTop: 51}]}>
                    <Text style={{fontSize: 28, fontWeight: 'bold', color: 'white'}}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('cadastro')}>
                    <Text style={{textAlign: 'center', fontSize: 16, color: 'grey'}}>Não possui cadastro?</Text>
                </TouchableOpacity>
            </View>

            <Text style={{textAlign: 'center', marginTop: 60}}>Entrar com conta alternativa</Text>
            <View style={[ globalStyles.button, {marginBottom: 30,flexDirection: 'row', alignItems: 'center', alignSelf: 'center'}]}>

                 <Pressable style={{flexDirection: 'row-reverse'}} onPress={() => navigation.navigate('listaRestaurantes')}>
                    <Image source={require("../../assets/icones/gmailIcon.png")}/>
                 </Pressable>
          
                <Pressable style={{marginLeft: 30, marginRight: 30,}} onPress={() => navigation.navigate('listaRestaurantes')}>
                  <Image source={require("../../assets/icones/facebookIcon.png")}/>
                </Pressable>

                <Pressable onPress={() => navigation.navigate('listaRestaurantes')}>
                    <Image source={require("../../assets/icones/twitterIcon.png")}/>
                </Pressable>
            </View>
        </View>
        </ScrollView>
    );
};
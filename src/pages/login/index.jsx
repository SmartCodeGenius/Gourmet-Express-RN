import React from "react";
import { View, Text, TextInput, Pressable, Image } from "react-native";
import { globalStyles } from '../../components/atoms';

export default function Login({navigation}) {
    return(
        <View style={globalStyles.container}>
            <Text style={[globalStyles.textTitle, {marginTop: 134}]}>Login</Text>

            <View style={{marginTop: 101, alignSelf: 'center'}}>
                <TextInput placeholder="Email" style={[globalStyles.textInput, {marginBottom: 31}]}></TextInput>
                <TextInput secureTextEntry={true} placeholder="Senha" style={[globalStyles.textInput]}></TextInput>
                <Pressable>
                    <Text style={{textAlign: 'center', fontSize: 16, color: 'grey'}}>Não lembra a senha?</Text>
                </Pressable>

                <Pressable onPress={() => navigation.navigate('listaRestaurantes')} style={[globalStyles.button, {alignSelf: 'center', marginTop: 51}]}>
                    <Text style={{fontSize: 28, fontWeight: 'bold', color: 'white'}}>Entrar</Text>
                </Pressable>

                <Pressable>
                    <Text style={{textAlign: 'center', fontSize: 16, color: 'grey'}}>Não possui cadastro??</Text>
                </Pressable>
            </View>

            <Text style={{textAlign: 'center', marginTop: 60}}>Entrar com conta alternativa</Text>
            <View style={[ globalStyles.button, {flexDirection: 'row', alignItems: 'center', alignSelf: 'center'}]}>

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
    );
};
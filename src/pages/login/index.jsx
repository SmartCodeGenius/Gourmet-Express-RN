import React from "react";
import { View, Text, TextInput, Pressable, Image } from "react-native";
import { globalStyles } from '../../styles';

export default function Login() {
    return(
        <View style={globalStyles.container}>
            <Text style={[globalStyles.textTitle, {marginTop: 134}]}>Login</Text>

            <View style={{marginTop: 101, alignSelf: 'center'}}>
                <TextInput placeholder="Email" style={[globalStyles.textInput, {marginBottom: 31}]}></TextInput>
                <TextInput placeholder="Senha" style={[globalStyles.textInput]}></TextInput>
                <Pressable>
                    <Text style={{textAlign: 'center', fontSize: 16, color: 'grey'}}>Não lembra a senha?</Text>
                </Pressable>

                <Pressable style={[globalStyles.button, {alignSelf: 'center', marginTop: 51}]}>
                    <Text style={{fontSize: 28, fontWeight: 'bold', color: 'white'}}>Entrar</Text>
                </Pressable>

                <Pressable>
                    <Text style={{textAlign: 'center', fontSize: 16, color: 'grey'}}>Não possui cadastro??</Text>
                </Pressable>
            </View>

            <Text style={{textAlign: 'center', marginTop: 60}}>Entrar com conta alternativa</Text>
            <View style={[ globalStyles.button, {flexDirection: 'row', alignItems: 'center', alignSelf: 'center'}]}>

                 <Pressable style={{flexDirection: 'row-reverse'}}>
                    <Image source={require("../../assets/icones/gmailIcon.png")}/>
                 </Pressable>
          
                <Pressable style={{marginLeft: 30, marginRight: 30,}}>
                  <Image source={require("../../assets/icones/facebookIcon.png")}/>
                </Pressable>

                <Pressable>
                    <Image source={require("../../assets/icones/twitterIcon.png")}/>
                </Pressable>
            </View>
        </View>
    );
};
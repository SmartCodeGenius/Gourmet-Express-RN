import React, { useContext } from "react";
import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, Pressable } from "react-native";
import { ScrollView } from "react-native";
import { globalStyles } from '../../components/atoms';
import { AuthContext } from "../../Context/Auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login({navigation}) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const { setAuth, setTokenJWT } = useContext(AuthContext);

    const handleLogIn = async () => {
        const data = {
            email,
            senha
        }
        
        try {
            const body = { email, senha };
            console.log(body);

            const response = await fetch('http://192.168.16.1:5000/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            });

            const parseRes = await response.json();

            setTokenJWT(parseRes.token);
            setAuth(true);
            navigation.navigate('RouteAuth')
        } catch (err) {
            console.error(err.message);
        }

    }

    return(
        <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
        <View style={globalStyles.container}>
            <Text style={[globalStyles.textTitle, {marginTop: 130}]}>Login</Text>

            <View style={{marginTop: 101, alignSelf: 'center'}}>
                <TextInput value={email} placeholder="Email" onChangeText={setEmail} style={[globalStyles.textInput, {marginBottom: 31}]}></TextInput>
                <TextInput value={senha} secureTextEntry={true} onChangeText={setSenha} placeholder="Senha" style={[globalStyles.textInput]}></TextInput>

                <TouchableOpacity onPress={() => navigation.navigate('RecuperaSenha')}>
                    <Text style={{textAlign: 'center', fontSize: 16, color: 'grey'}}>Não lembra a senha?</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleLogIn} style={[globalStyles.button, {alignSelf: 'center', marginTop: 51}]}>
                    <Text style={{fontSize: 28, fontWeight: 'bold', color: 'white'}}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('cadastro')}>
                    <Text style={{textAlign: 'center', fontSize: 16, color: 'grey'}}>Não possui cadastro?</Text>
                </TouchableOpacity>
            </View>

            <Text style={{textAlign: 'center', marginTop: 60}}>Entrar com conta alternativa</Text>
            <View style={[ globalStyles.button, {marginBottom: 30,flexDirection: 'row', alignItems: 'center', alignSelf: 'center'}]}>

                 <Pressable style={{flexDirection: 'row-reverse'}} onPress={() => navigation.navigate('RouteAuth')}>
                    <Image source={require("../../assets/icones/gmailIcon.png")}/>
                 </Pressable>
          
                <Pressable style={{marginLeft: 30, marginRight: 30,}} onPress={() => navigation.navigate('RouteAuth')}>
                  <Image source={require("../../assets/icones/facebookIcon.png")}/>
                </Pressable>

                <Pressable onPress={() => navigation.navigate('RouteAuth')}>
                    <Image source={require("../../assets/icones/twitterIcon.png")}/>
                </Pressable>
            </View>
        </View>
        </ScrollView>
    );
};
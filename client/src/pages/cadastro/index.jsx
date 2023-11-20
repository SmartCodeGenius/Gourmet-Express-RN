// Melissa was here
import React, { useContext, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { globalStyles } from "../../components/atoms";
import { AuthContext } from "../../Context/Auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Index() {
    const navigation = useNavigation();
    const { setAuth, setTokenJWT } = useContext(AuthContext);


    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleSignIn = async () => {
        const data = {
            nome,
            email,
            senha
        }

        if (nome != '' && senha != '' && email != '') {
            try {
                const body = { nome, email, senha };

                console.log(body)

                const response = await fetch('http://10.3.117.208:5000/auth/registro', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(body)
                });

                const parseRes = await response.json();
                setTokenJWT(parseRes.token)
                // await AsyncStorage.setItem('token', parseRes.token)
                setAuth(true);
                navigation.navigate('RouteAuth')

            } catch (err) {
                console.error(err.message);
            }
        }else{alert('Campos vazios')}
    }

    return (
        <ScrollView contentContainerStyle={[globalStyles.container, { alignContent: 'center' }]}>
            <View>
                <View style={{ width: '100%', height: '100%', justifyContent: "center", alignItems: 'center' }}>
                    <Text style={[globalStyles.textTitle, { alignSelf: 'center', marginBottom: 30 }]}>Crie sua conta</Text>

                    <TextInput style={[globalStyles.textInput, { marginTop: 50, marginBottom: 30 }]} onChangeText={setNome} value={nome} placeholder='Nome de Usuário'></TextInput>
                    <TextInput style={[globalStyles.textInput, { marginBottom: 30 }]} onChangeText={setEmail} value={email} placeholder='Email' keyboardType="email-address"></TextInput>
                    {/* <TextInput style={[globalStyles.textInput, { marginBottom: 30 }]} placeholder='Número de telefone' keyboardType="phone-pad" maxLength={11}></TextInput> */}
                    <TextInput style={[globalStyles.textInput, { marginBottom: 30 }]} onChangeText={setSenha} value={senha} placeholder='Senha' secureTextEntry={true}></TextInput>
                    {/* <TextInput style={[globalStyles.textInput, { marginBottom: 30 }]} placeholder='Confirmar senha' secureTextEntry={true}></TextInput> */}

                    <TouchableOpacity underlayColor={'white'} style={[globalStyles.button, { alignSelf: 'center', marginTop: 30 }]} onPress={() => handleSignIn()}>
                        <Text style={{ color: 'white', fontSize: 28, fontWeight: "bold" }}>Criar Conta</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}

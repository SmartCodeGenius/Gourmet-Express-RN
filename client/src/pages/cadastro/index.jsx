import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { globalStyles } from "../../components/atoms";
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Index({ setAuth }) {
    const navigation = useNavigation();

    const [inputs, setInputs] = useState({
        nome: '',
        email: '',
        senha: ''
    });

    const { email, senha, nome } = inputs;

    const onChange = (field, value) => {
        setInputs({ ...inputs, [field]: value });
    }

    const onSubmitForm = async () => {
        try {

            const body = { nome, email, senha };

            const response = await fetch('http://10.0.2.2:5000/auth/registro', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(body)
            });

            const parseRes = await response.json();

            await AsyncStorage.setItem('token', parseRes.token)
            setAuth(true)
            // navigation.navigate('listaRestaurantes')
        } catch (err) {
            console.error(err.message);
            setAuth(false);
        }
    }

    return (
        <ScrollView contentContainerStyle={[globalStyles.container, { alignContent: 'center' }]}>
            <View>
                <View style={{ width: '100%', height: '100%', justifyContent: "center", alignItems: 'center' }}>
                    <Text style={[globalStyles.textTitle, { alignSelf: 'center', marginBottom: 30 }]}>Crie sua conta</Text>

                    <TextInput style={[globalStyles.textInput, { marginTop: 50, marginBottom: 30 }]} onChangeText={(text) => onChange('nome', text)} placeholder='Nome de Usuário'></TextInput>
                    <TextInput style={[globalStyles.textInput, { marginBottom: 30 }]} onChangeText={(text) => onChange('email', text)} placeholder='Email' keyboardType="email-address"></TextInput>
                    <TextInput style={[globalStyles.textInput, { marginBottom: 30 }]} placeholder='Número de telefone' keyboardType="phone-pad" maxLength={11}></TextInput>
                    <TextInput style={[globalStyles.textInput, { marginBottom: 30 }]} onChangeText={(text) => onChange('senha', text)} placeholder='Senha' secureTextEntry={true}></TextInput>
                    <TextInput style={[globalStyles.textInput, { marginBottom: 30 }]} placeholder='Confirmar senha' secureTextEntry={true}></TextInput>

                    <TouchableOpacity underlayColor={'white'} style={[globalStyles.button, { alignSelf: 'center', marginTop: 30 }]} onPress={() => navigation.navigate('RouteAuth')}>
                        <Text style={{ color: 'white', fontSize: 28, fontWeight: "bold" }}>Próximo</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}

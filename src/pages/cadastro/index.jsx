import React from "react";
import { View, Text, TextInput, Pressable, ScrollView} from "react-native";
import { globalStyles } from "../../components/atoms";

export default function Index({navigation}) {
    return(
        <ScrollView contentContainerStyle={[globalStyles.container, {alignContent: 'center'}]}>
        <View>
            <View style={{width: '100%', height: '100%',justifyContent: "center", alignItems: 'center'}}>
                <Text style={[globalStyles.textTitle, {alignSelf: 'center', marginBottom: 30}]}>Crie sua conta</Text>  

                <TextInput style={[globalStyles.textInput, {marginTop: 50, marginBottom: 30}]} placeholder='Nome de Usuário'></TextInput>
                <TextInput style={[globalStyles.textInput, {marginBottom: 30}]} placeholder='Email'></TextInput>
                <TextInput style={[globalStyles.textInput, {marginBottom: 30}]} placeholder='Senha' secureTextEntry={true}></TextInput>
                <TextInput style={[globalStyles.textInput, {marginBottom: 30}]} placeholder='Confirmar senha' secureTextEntry={true}></TextInput>
                
                <Pressable style={[globalStyles.button, {alignSelf: 'center', marginTop: 30}]} onPress={() => navigation.navigate('InformaçõesOpcionais')}>
                <Text style={{color: 'white', fontSize: 28, fontWeight: "bold"}}>Próximo</Text>
                </Pressable>
            </View>
        </View>
    </ScrollView>
    );
}

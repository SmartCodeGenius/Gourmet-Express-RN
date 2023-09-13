import React from "react";
import { View, Text, ScrollView,TouchableHighlight, TextInput, TouchableOpacity} from "react-native";
import { globalStyles } from "../../components/atoms";

export default function TelaConfirmacao({navigation}) {
    return(
        <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
        <View style={globalStyles.container}>
            <Text style={[globalStyles.textTitle, {marginTop: 90}]}>Confirmação</Text>
            <Text style={{paddingLeft: 50, paddingRight: 50, textAlign: "center", fontSize: 24, marginTop:50}}>
                Será enviado uma mensagem SMS contendo um código para inserir no input abaixo:
            </Text>
            <TextInput placeholder="Insira o código de confirmação" style={[globalStyles.textInput, {width: 329, height: 42, marginTop: 33}]}></TextInput>
            <TouchableOpacity style={[globalStyles.button, {width: 254, height: 48, marginTop: 55}]} onPress={() => navigation.navigate('DrawerLayout')}>
                <Text style={{fontSize: 24, color: 'white', fontWeight: 'bold', textAlign: 'center'}}>Confirmar</Text>
            </TouchableOpacity>

            <View style={{marginTop: 100}}>
                <Text style={{paddingLeft: 100, paddingRight: 100, textAlign: 'center'}}> 
                    Caso não receba o SMS, veja se o telefone inserido é válido, ou tente novamente
                </Text>
                <TouchableOpacity underlayColor={'white'} style={[globalStyles.button, {alignSelf: 'center', width: 'auto', height: 'auto', marginTop: 5}]} onPress={() => navigation.navigate('login')}>
                    <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold', textAlign: 'center', paddingLeft: 10, paddingRight: 10}}>Tentar Novamente</Text>
                </TouchableOpacity>
            </View>
        </View>
        </ScrollView>
    );
}
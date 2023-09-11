import React from "react";
import { View, Text, ScrollView,TouchableHighlight, TextInput} from "react-native";
import { globalStyles } from "../../components/atoms";

export default function TelaConfirmacao({navigation}) {
    return(
        <ScrollView>
        <View style={globalStyles.container}>
            <Text style={[globalStyles.textTitle, {marginTop: 90}]}>Confirmação</Text>
            <Text style={{paddingLeft: 50, paddingRight: 50, textAlign: "center", fontSize: 24, marginTop:50}}>
                Será enviado uma mensagem SMS contendo um código para inserir no input abaixo:
            </Text>
            <TextInput placeholder="Insira o código de confirmação" style={[globalStyles.textInput, {width: 329, height: 42, marginTop: 33}]}></TextInput>
            <TouchableHighlight underlayColor={'white'} style={[globalStyles.button, {width: 254, height: 48, marginTop: 55}]} onPress={() => navigation.navigate('DrawerLayout')}>
                <Text style={{color: 'white', fontSize: 24, fontWeight: 'bold'}}>Confirmar</Text>
            </TouchableHighlight>

            <View style={{marginTop: 100}}>
                <Text style={{paddingLeft: 100, paddingRight: 100, textAlign: 'center'}}> 
                    Caso não receba o SMS, veja se o telefone inserido é válido, ou tente novamente
                </Text>
                <TouchableHighlight underlayColor={'white'} style={[globalStyles.button, {alignSelf: 'center', width: 120, height: 30, marginTop: 5}]}>
                    <Text style={{fontSize: 12, color: 'white', fontWeight: 'bold', textAlign: 'center'}}>Tentar Novamente</Text>
                </TouchableHighlight>
            </View>
        </View>
        </ScrollView>
    );
}
import React from "react";
import { View, Text, TouchableHighlight, TextInput} from "react-native";
import { globalStyles } from "../../components/atoms";

export default function Acesso({navigation}){
    return(
        <View style={globalStyles.container}>
            <Text style={{marginTop: 80, fontSize: 40, fontWeight: "bold"}}>Acesso</Text>
            <Text style={{marginTop: 36, fontSize: 24, paddingHorizontal: 50, textAlign: 'center'}}>Favor colocar o ID do estabelecimento, ou ler o código QR.</Text>

            <View style={{marginTop: 36, alignItems: 'center'}}>
                <TextInput style={globalStyles.textInput} placeholder="ID"></TextInput>
                <Text style={{marginTop: 46, textAlign: "center", fontWeight: 'bold', fontSize: 30}}>OU</Text>
                <TouchableHighlight underlayColor={'white'} style={[globalStyles.textInput, {marginTop: 46, width: 150, height: 144}]} onPress={() => navigation.navigate('DrawerLayout')}>
                    <Text style={{paddingTop: "30%", paddingHorizontal: 38, textAlign: 'center'}}>ESCANEAR CÓDIGO QR</Text>
                </TouchableHighlight>
            </View>
            <Text style={{paddingHorizontal: 70, textAlign: 'center', marginTop: 50}}>Caso não consiga, avise para o funcionário local ou contate o suporte do app.</Text>
        </View>
    )
}
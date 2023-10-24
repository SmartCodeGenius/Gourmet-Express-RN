import React from "react";
import {Text, View, ScrollView,TextInput, StyleSheet, TouchableHighlight} from 'react-native';

export default function ConfiguracaoDrawer(){
    return(
    <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
        <Text style={[styles.textTitle, {marginTop: "20%"}]}>Configurações</Text>
        <View style={{alignItems: 'center', flexDirection: "column", marginTop: 50}}>
            <View style={styles.Container}>
                <Text style={styles.titleInput}>Nome de usuário</Text>
                <TextInput style={styles.textInput} placeholder="Nome de usuário"></TextInput>
            </View>

            <View style={styles.ContainerChild}>
                <Text style={styles.titleInput}>Email</Text>
                <TextInput style={styles.textInput} placeholder="exemplo@gmail.com"></TextInput>
            </View>

            <View style={styles.ContainerChild}>
                <Text style={styles.titleInput}>Telefone</Text>
                <TextInput keyboardType="number-pad" style={styles.textInput} placeholder="(12) 93456-7891" maxLength={11}></TextInput>
            </View> 

            <View style={styles.ContainerChild}>
                <Text style={styles.titleInput}>Data de nascimento</Text>
                <TextInput keyboardType="decimal-pad" style={styles.textInput} placeholder="dd/mm/aa"></TextInput>
            </View>

            <View style={styles.ContainerChild}>
                <Text style={styles.titleInput}>CPF</Text>
                <TextInput keyboardType="number-pad" style={styles.textInput} placeholder="123-456-789-10" maxLength={11}></TextInput>
            </View>

        </View>
        
        <TouchableHighlight style={styles.button}>
                <Text style={{fontSize: 20, textAlign: 'center', color: 'white', fontWeight: 'bold', paddingTop: 10}}>Mudar senha</Text>
        </TouchableHighlight>

        <TouchableHighlight style={[styles.buttonFim, {marginBottom: 20}]}>
                <Text style={styles.textButton}>Finalizar</Text>
        </TouchableHighlight>
    </ScrollView>
    );
}

const styles = StyleSheet.create({
    titleInput: {
        paddingLeft: 15, 
        fontSize: 18, 
        fontWeight: 'bold'
    },
    ContainerChild1: {
        marginTop: 15,
    },
    ContainerChild:{
        marginTop: 30,
    },
    button:{
        marginTop: 30,
        alignSelf: 'center',
        width: 200,
        height: 45,
        backgroundColor: '#7C0B0B',
        borderRadius: 30,
    },
    buttonFim:{
        marginTop: "2%",
        alignSelf: 'center',
        width: 254,
        height: 45,
        backgroundColor: '#7C0B0B',
        borderRadius: 30,
    },
    textButton:{
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
        paddingTop: 5,
        fontSize: 24,
    },
    textInput: {
        backgroundColor: '#F4F4F4',
        width: 330,
        height: 50,
        borderRadius: 15,
        borderWidth: 1,
        fontSize: 16,
        textAlign: 'center',
      },
      textTitle:{
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center'
      },
})
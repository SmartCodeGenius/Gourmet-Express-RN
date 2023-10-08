import React from "react";
import { View, Text, Image, TouchableHighlight, TextInput, ScrollView} from "react-native";
import { globalStyles } from "../../components/atoms";
import image from '../../db/image'
import minus from "../../assets/icones/minus.svg"
import plus from "../../assets/icones/plus.svg"
import { useState } from "react";

export default function Item({route, navigation}){
    const { nome, preço, img, ingrediente, unidade, key} = route.params;
    const [quantia, setQuantia] = useState(0);
    const [carrinhoQuantia, setCarrinhoQuantia] = useState(0);

  function diminuiitem(){
      if (quantia === 0){
        return
      }else{return setQuantia(quantia-1)}
  }

  function aumentaitem(){
    if(unidade === quantia){
        return
    }else{return setQuantia(quantia + 1);}
  }

    return(
      <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
        <View style={globalStyles.container}>
            <View style={globalStyles.containerHeader}>
                <Text style={{color: 'white', textAlign: 'center', paddingTop: 50, fontSize: 35, fontWeight: 'bold'}}>{nome}</Text>
            </View>
            <Image style={{width: 322, height: 184, borderRadius: 10, marginTop: 15}} source={image[img]}></Image>
        
        <View style={{marginTop: 10, borderRadius: 145, backgroundColor: "#7C0B0B", flexDirection: 'row', width: 274, height: 42, justifyContent: 'center'}}>
        <Image
          style={{width: 35.71, height: 34.05, marginTop: 3}}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/f1rl832ylb5-155%3A42?alt=media&token=f7947c6b-00aa-42b7-9d50-0fe060ecad6c",
          }}
        />
        <Image
          style={{width: 35.71, height: 34.05, marginTop: 3, marginLeft: 18}}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/f1rl832ylb5-155%3A43?alt=media&token=7e8e2d29-bcbe-4d86-8e12-46cbebf27465",
          }}
        />
        <Image
          style={{width: 35.71, height: 34.05, marginTop: 3, marginLeft: 18}}          
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/f1rl832ylb5-155%3A44?alt=media&token=7671cbdf-7680-4a4a-8209-d19701769f98",
          }}
        />
        <Image
            style={{width: 35.71, height: 34.05, marginTop: 3, marginLeft: 18}}
            source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/f1rl832ylb5-155%3A45?alt=media&token=3341006d-638e-4843-9c03-f3114f3c5e4f",
          }}
        />
        <Image
          style={{width: 35.71, height: 34.05, marginTop: 3, marginLeft: 18}}        
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/f1rl832ylb5-155%3A46?alt=media&token=f80fce09-9f9e-44bd-84d0-f837f74974cf",
          }}
        />
      </View>
      <Text>Dê seu feedback!</Text>

      <View style={{marginTop: 30}}>
        <Text style={{fontSize: 22, fontWeight: 'bold', color: 'black', textAlign: 'center'}}>Ingredientes</Text>
        <Text style={{textAlign: 'center', paddingHorizontal: 100, fontSize: 18}}>{ingrediente}</Text>
      </View>

      <View style={{marginTop: 50, alignItems: 'center', alignSelf: 'center'}}>
        <View style={{flexDirection: 'row', backgroundColor: "#7C0B0B", height: 50, width: "auto", borderRadius: 102}}>

          <TouchableHighlight onPress={() => {diminuiitem()}} underlayColor={'white'} style={{backgroundColor:'#rgba(231, 64, 64, 0.5)', marginLeft: 5, marginRight: 25, marginTop: 5,alignContent: 'center', borderTopLeftRadius: 30, borderBottomLeftRadius: 30, width: 40, height: 40,}}>
            <Image source={minus} style={{width: 30, marginTop: "45%", marginLeft: 5}}></Image>
          </TouchableHighlight>
          
          <Text style={{fontSize: 32, color: 'white', marginTop: 3}}>{quantia}</Text>

          <TouchableHighlight onPress={() => {aumentaitem()}} underlayColor={'white'} style={{marginLeft: 30, marginRight: 5, backgroundColor: '#rgba(231, 64, 64, 0.5)', width: 40, height: 40, marginTop: 5, borderTopRightRadius: 30, borderBottomRightRadius: 30}}>
            <Image source={plus} style={{alignSelf: "center", marginTop: 5, marginRight: 2, width: 30, height: 30}}></Image>
          </TouchableHighlight>
        </View>

        <TouchableHighlight onPress={() => alert('Sem sistema de carrinho (ainda)')} underlayColor={'white'} style={[globalStyles.button, {marginTop: '2%'}]}>
          <Text style={{fontSize: 20, textAlign: 'center', fontWeight: "700", color: 'white'}}>Adicionar ao carrinho</Text>
        </TouchableHighlight>

        <View style={{marginTop: '5%', marginBottom: '10%'}}>
          <Text style={{textAlign: 'center'}}>Observações</Text>
          <TextInput style={[globalStyles.textInput, {width: 300, textAlign: 'left', textAlignVertical: 'center'}]}></TextInput>
        </View>

      </View>
    </View>
    </ScrollView>
    )
}
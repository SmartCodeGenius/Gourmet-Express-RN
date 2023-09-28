import React from "react";
import { View, Text, Image } from "react-native";
import { globalStyles } from "../../components/atoms";

export default function Item({route, navigation}){
    const { nome, preço, img, ingrediente} = route.params;
    return(
        <View style={globalStyles.container}>
            <View style={globalStyles.containerHeader}>
                <Text style={{color: 'white', textAlign: 'center', paddingTop: 50, fontSize: 27, fontWeight: 'bold'}}>{nome}</Text>
            </View>
            <Image style={{width: 322, height: 184, borderRadius: 10, marginTop: 15}} source={img}></Image>
        
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
        <Text style={{textAlign: 'center', paddingHorizontal: 100}}>{ingrediente}</Text>
      </View>
        </View>
    )
}
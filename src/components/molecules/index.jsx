import React from "react";
import {Image, Text, View} from "react-native";
import { globalStyles } from "../atoms";

const ContainerRestaurant = () =>{
        return(
            <View style={{flexDirection: "row", marginLeft: 60}}>
            <Image source={require('../../assets/icones/imagePlaceholder.png')} style={{width: 114, height: 114, marginLeft: 10, borderRadius: 20}}></Image>
                <View style={{marginLeft: 10}}>
                    <Text style={[globalStyles.fontBigBold, {marginBottom: 5}]}>Label</Text>
                    <Text>5,0 ⭐⭐⭐⭐⭐</Text>
                    <Text>(108) · Restaurante</Text>
                    <Text>São José - SC</Text>
                    <Text>Abre em breve às 11:00</Text>
                </View>
            </View>
        );
}

export { ContainerRestaurant }
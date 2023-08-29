import React from "react";
import { globalStyles } from "../../components/atoms";
import { View, Text, Image} from "react-native";
import ContainerRestaurant from "../../components/molecules"

export default function ListaRestaurantes(){
    return(
        <View style={globalStyles.container}>
            <View style={{marginTop: 50,marginLeft: 160, flexDirection: "row", justifyContent: 'center'}}>
                <Image style={{width: 165, height: 61, marginRight: 50}} source={require("../../assets/icones/logoMedia.png")}></Image>
                <Image style={{alignSelf: 'center', marginRight: 10}} source={require("../../assets/icones/menuIcon.png")}></Image>
            </View>


            <Text style={[globalStyles.textTitle, {fontSize: 24, marginTop: 3}]}>Restaurantes por perto</Text>
            <ContainerRestaurant/>
            <Image source={require("../../assets/icones/twitterIcon.png")}/>

        </View>
    );
};
import React from "react";
import { globalStyles } from "../../components/atoms";
import { View, Text, Image, TouchableHighlight, TouchableOpacity} from "react-native";
import ContainerRestaurant from "../../components/molecules/ContainerRestaurant"
import { DrawerActions } from "@react-navigation/native";


export default function ListaRestaurantes({navigation}){
    return(
        <View style={globalStyles.container}>
            <View style={{marginTop: 50,marginLeft: 160, flexDirection: "row", justifyContent: 'center'}}>
                <Image style={{width: 165, height: 61, marginRight: 50}} source={require("../../assets/icones/logoMedia.png")}></Image>
                <TouchableHighlight onPress={() => navigation.dispatch(DrawerActions.openDrawer())} underlayColor={'white'} >
                <Image style={{alignSelf: 'center', marginRight: 10}} source={require("../../assets/icones/menuIcon.png")} ></Image>
                </TouchableHighlight>
            </View>


            <Text style={[globalStyles.textTitle, {fontSize: 24, marginTop: 3}]}>Restaurantes por perto</Text>
            <ContainerRestaurant/>

            <TouchableOpacity underlayColor={'white'} style={[globalStyles.button, {marginTop: 25, width: 306}]}>
                <Text style={[globalStyles.textButton, {color: 'white'}]}>Escanear QR code ou ID</Text>
            </TouchableOpacity>
        </View>
    );
};
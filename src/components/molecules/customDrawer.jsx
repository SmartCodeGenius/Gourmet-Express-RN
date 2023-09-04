import React from "react";
import { View, Text, TouchableHighlight} from "react-native";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { Image } from "react-native";
import { globalStyles } from "../atoms";

const CustomDrawer = (props) => {
    return(
        <View style={{flex: 1}}>
            <DrawerContentScrollView {...props}>
                <Image source={require('../../assets/icones/labelUsuario.png')} style={{alignSelf: 'center', marginTop: 20}}></Image>
                <Text style={[globalStyles.textTitle, {fontSize: 22, textAlign: 'center', marginBottom: 40}]}>Bem vindo, usuário123</Text>
                <DrawerItemList {...props}/>
            </DrawerContentScrollView>
            
            <View style={{marginBottom: 30, borderTopWidth: 1, borderTopColor: '#ccc'}}>
                    <TouchableHighlight style={{marginLeft: 20, marginTop:30, borderWidth: 3, borderRadius: 50, borderColor: '#5A5A5A', width: 233, height: 37, justifyContent: 'center'}}>
                        <Text style={{textAlign: "center", color: 'black', fontSize: 20}}>Logout</Text>
                    </TouchableHighlight>
            </View>
        </View>
    );
}

export default CustomDrawer
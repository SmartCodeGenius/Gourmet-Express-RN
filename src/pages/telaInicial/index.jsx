import React from "react";
import { View, Text, TouchableHighlight, Image, FlatList} from "react-native";
import { DrawerActions } from "@react-navigation/native";
import { globalStyles } from "../../components/atoms";
import userIcon from '../../assets/icones/labelUsuario.png'
import FuncCarousel from "../../components/molecules/carousel";
import FlatListTelaInicial from "../../components/molecules/flatListTelaInicial";

export default function TelaInicial({navigation}){
    return(
        <View style={globalStyles.container}>
            <View style={{marginTop: 50, flexDirection: "row", alignSelf: 'flex-end'}}>
                <View style={{marginRight: "36%", flexDirection: 'row'}}>
                    <Image source={userIcon}></Image>
                    <View style={{marginLeft: 10, flexDirection: 'column', marginTop: 10}}>                    
                        <Text style={{color: '#7C0B0B', fontSize: 20}}>Usuario</Text>
                        <Text style={{color: '#7C0B0B', fontSize: 20}}>R$: 50,00</Text>
                    </View>
                </View>

                <TouchableHighlight onPress={() => navigation.dispatch(DrawerActions.openDrawer())} underlayColor={'white'} >
                <Image source={require("../../assets/icones/menuIcon.png")} ></Image>
                </TouchableHighlight>
            </View>

            <Text style={{color: '#7C0B0B', fontSize: 35, marginTop: 40, marginBottom: 20}}>Restaurante Fulano</Text>
            <View style={{height: '30.5%', width: 'auto'}}>
                <FuncCarousel/>
            </View>
            
            <FlatList
            data={FlatListTelaInicial.dados}
            keyExtractor={item => item.key}
            renderItem={({item})=> {<FlatListTelaInicial data={item}/>}}            
            />
        </View>
    )
}
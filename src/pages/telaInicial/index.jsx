import React from "react";
import { View, Text, TouchableHighlight, Image, FlatList, TextInput} from "react-native";
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

            <TextInput placeholder="Pesquisa" style={[ globalStyles.textInput, {marginTop: 20, borderRadius: 20, width: "55%", height: "5%"}]}>akodsoa</TextInput>
            <FlatList
            data={dados}
            keyExtractor={item => item.key}
            renderItem={({item})=> <FlatListTelaInicial data={item}/>}         
            />
        </View>
    )
}

const dados = [{
    key: 1,
    nome: 'Pão de queijo',
    unidade: 3,
    preço: 9.00,
    dateUltimoPedido: '12/2/23 07:42',
    avaliacao: 4,
  },{
    key: 2,
    nome: 'Pão de queijo',
    unidade: 3,
    preço: 9.00,
    dateUltimoPedido: '12/2/23 07:42',
    avaliacao: 4,
  },{
    key: 3,
    nome: 'Pão de queijo',
    unidade: 3,
    preço: 9.00,
    dateUltimoPedido: '12/2/23 07:42',
    avaliacao: 4,
  },{
    key: 4,
    nome: 'Pão de queijo',
    unidade: 3,
    preço: 9.00,
    dateUltimoPedido: '12/2/23 07:42',
    avaliacao: 4,
  },{
    key: 5,
    nome: 'Pão de queijo',
    unidade: 3,
    preço: 9.00,
    dateUltimoPedido: '12/2/23 07:42',
    avaliacao: 4,
  }]
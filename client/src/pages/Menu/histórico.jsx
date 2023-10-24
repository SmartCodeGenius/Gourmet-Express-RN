import React from "react";
import {Text, View, FlatList} from 'react-native';
import { globalStyles } from "../../components/atoms";
import FlatListProducts from "../../components/molecules/flatListProducts";
import dados from '../../db/comidas.json'

export default function HistoricoDrawer(){
    return(
        <View style={globalStyles.container}>
            <View style={globalStyles.containerHeader}>
                <Text style={[globalStyles.textTitle, {textAlign: 'left', marginLeft: 15,marginTop: 55, color:'white'}]}>Histórico</Text>
            </View>
            <FlatList 
            data={dados}
            keyExtractor={item => item.key}
            renderItem={({item})=> 
            <FlatListProducts data={item}/>}
            />
        </View>
    );
}

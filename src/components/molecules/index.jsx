import React from "react";
import {Image, Text, View, FlatList} from "react-native";
import { globalStyles } from "../atoms";

export default function ContainerRestaurant(){
    return(
        <View>    
        <FlatList
            data={restaurantes}
            keyExtractor={item=>item.cnpj}
            renderItem={({item})=> (
                <View style={{flexDirection: "row", marginTop: 10, alignContent: "space-between"}}>
                <Image source={require('../../assets/icones/imagePlaceholder.png')} style={{width: 114, height: 114, marginLeft: 10, borderRadius: 20}}></Image>
                    <View style={{marginLeft: 10}}>
                        <Text style={[globalStyles.fontBigBold, {marginBottom: 5}]}>{item.nome}</Text>
                        <Text>{item.nota} ⭐⭐⭐⭐⭐</Text>
                        <Text>{item.desc}</Text>
                    </View>
                </View>
            )}
        />
        </View>
    );
}

const restaurantes = [{
    cnpj: 12345678910234,
    nome: "Restaurante Recanto",
    nota: 4.5,
    desc: "(108) · Restaurante São José - SC Abre em breve às 11:00 Refeição no local·Para viagem·Entrega sem contato"
},
{
    cnpj: 12131415161923,
    nome: "Restaurante do Fulano",
    nota: 4.5,
    desc: "(91) · Restaurante R. Joacir dos Passos, 18 Abre em breve às 11:00 Refeição no local·Para viagem·Entrega sem contato"
},
]
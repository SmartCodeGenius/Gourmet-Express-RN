import { Image, Text, View} from "react-native";
import React, { useEffect, useState } from 'react';
import { globalStyles } from "../atoms";
import image from '../../db/image'

export default function ContainerRestaurant({ data }) {
    const [estrelas, setEstrelas] = useState("");

    function adicionarEstrelas(){
        for (let index = 0; index < data.nota; index++) {
            useEffect(() =>{
                setEstrelas(estrelas+"⭐")
            }, [data.nota])            
        }
        return estrelas
    }
    return (
        <View>
            <View style={{ flexDirection: "row", alignItems: "center", alignSelf: 'center', width: '95%', borderBottomWidth: 1, paddingBottom: 20, paddingTop: 20 }}>
                <Image source={image[data.imagem]} style={{ width: 114, height: 114, marginLeft: 10, borderRadius: 20 }}></Image>
                <View style={{ marginLeft: 10 }}>
                    <Text style={[globalStyles.fontBigBold, { marginBottom: 5 }]}>{data.name}</Text>
                    <Text>{data.nota}{adicionarEstrelas()}</Text>
                    <Text style={{ paddingRight: 130 }}>{data.description}</Text>
                </View>
            </View>
        </View>
    );
}
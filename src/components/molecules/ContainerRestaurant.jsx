import { Image, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from 'react';
import { globalStyles } from "../atoms";
import image from '../../db/image'
import { useNavigation } from "@react-navigation/native";

export default function ContainerRestaurant({ data }) {
    const [defaultRating, setDefaultRating] = useState(data.nota);
    const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5])
    const navigation = useNavigation();

    const starFull = 'https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png'
    const starEmpty = 'https://raw.githubusercontent.com/tranhonghan/images/main/star_corner.png'

    const CustomBar = () => {
        return (
            <View style={{ flexDirection: "row", width: '27%', padding: 6, backgroundColor: '#7C0B0B', borderRadius: 15 }}>
                {
                    maxRating.map((item, key) => {
                        return (
                            <Image
                                style={{ width: 20, height: 20 }}
                                key={item}
                                source={item <= defaultRating
                                    ? { uri: starFull }
                                    : { uri: starEmpty }}>
                            </Image>
                        )
                    })
                }
            </View>
        )
    }

    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('DrawerLayout', {
                screen: 'Home',
                params: { nomeRestaurante: data.name, dbComidas: data.comidas_Id}
            })}>
                <View style={{ flexDirection: "row", alignItems: "center", alignSelf: 'center', width: '95%', borderBottomWidth: 1, paddingBottom: 20, paddingTop: 20 }}>
                    <Image source={image[data.imagem]} style={{ width: 114, height: 114, marginLeft: 10, borderRadius: 20 }}></Image>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={[globalStyles.fontBigBold, { marginBottom: 5 }]}>{data.name}</Text>
                        <CustomBar />
                        <Text style={{ paddingRight: 130 }}>{data.description}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
}
import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import image from "../../db/image.js"
import { useNavigation } from '@react-navigation/native';
import { useState } from "react";

export default function FlatListTelaInicial({ data }) {
  const navigation = useNavigation();

  const [defaultRating, setDefaultRating] = useState(data.avaliacao);
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5])

  const starFull = 'https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png'
  const starEmpty = 'https://raw.githubusercontent.com/tranhonghan/images/main/star_corner.png'

  const CustomBar = () => {
    return (
      <View style={{ flexDirection: "row", width: 'auto', alignSelf: 'flex-start', padding: 6, backgroundColor: '#7C0B0B', borderRadius: 15 }}>
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
    <View style={{ paddingTop: 20, borderColor: 'gray', borderBottomWidth: 1, paddingBottom: 20 }}>
      <View style={{ flexDirection: "row" }}>
        <Pressable onPress={() => navigation.navigate('Item', { nome: data.nome, preço: data.preço, img: data.img, ingrediente: data.ingrediente, unidade: data.unidade, nota: data.avaliacao })}>
          <Image source={image[data.img]} style={{ width: 144.11, height: 93, borderRadius: 10, marginRight: 40 }} />
        </Pressable>
        <View>
          <Text style={{ fontWeight: 'bold', fontSize: 24, textAlign: 'center' }}>{data.nome}</Text>
          <CustomBar/>
          <Text style={{fontSize: 16}}>R${data.preço}</Text>
        </View>
      </View>
    </View>
  )
}
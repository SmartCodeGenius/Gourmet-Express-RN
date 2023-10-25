import React from "react";
import { View, Text, Image, TouchableHighlight, TouchableOpacity, TextInput, ScrollView } from "react-native";
import { globalStyles } from "../../components/atoms";
import image from '../../db/image'
import minus from "../../assets/icones/minus.svg"
import plus from "../../assets/icones/plus.svg"
import { useState } from "react";

export default function Item({ route, navigation }) {
  const { nome, preço, img, ingrediente, unidade, key, nota } = route.params;
  const [quantia, setQuantia] = useState(0);
  const [carrinhoQuantia, setCarrinhoQuantia] = useState(0);

  function diminuiitem() {
    if (quantia === 0) {
      return
    } else { return setQuantia(quantia - 1) }
  }

  function aumentaitem() {
    return setQuantia(quantia + 1);
  }
  // Setando variaveis para sistema de review
  const [defaultRating, setDefaultRating] = useState(0);
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5])

  const starFull = 'https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png'
  const starEmpty = 'https://raw.githubusercontent.com/tranhonghan/images/main/star_corner.png'

  const CustomBar = () => {
    return (
      <View style={{ alignSelf: 'center', flexDirection: "row", width: '27%', backgroundColor: '#7C0B0B', marginRight: '25%' }}>
        {
          maxRating.map((item, key) => {
            return (
              <TouchableOpacity underlayColor={'white'} activeOpacity={0.7} key={item} onPress={() => setDefaultRating(item)}>
                <Image style={{ width: 30, height: 30 }}
                  source={item <= defaultRating
                    ? { uri: starFull }
                    : { uri: starEmpty }} />
              </TouchableOpacity>
            )
          })
        }
      </View>
    )
  }

  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
      <View style={globalStyles.container}>
        <View style={globalStyles.containerHeader}>
          <Text style={{ color: 'white', textAlign: 'center', paddingTop: 50, fontSize: 35, fontWeight: 'bold' }}>{nome}</Text>
        </View>
        <Image style={{ width: 322, height: 184, borderRadius: 10, marginTop: 15 }} source={image[img]}></Image>

        {/* Estrelas */}
        <View style={{ marginTop: 10, borderRadius: 145, backgroundColor: "#7C0B0B", flexDirection: 'row', width: 274, height: 42, justifyContent: 'center' }}>
          <CustomBar />
        </View>
        <Text>Dê seu feedback!</Text>

        <View style={{ marginTop: 30 }}>
          <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'black', textAlign: 'center' }}>Ingredientes</Text>
          <Text style={{ textAlign: 'center', paddingHorizontal: 100, fontSize: 18 }}>{ingrediente}</Text>
        </View>

        <View style={{ marginTop: 50, alignItems: 'center', alignSelf: 'center' }}>
          <View style={{ flexDirection: 'row', backgroundColor: "#7C0B0B", height: 50, width: "auto", borderRadius: 102 }}>

            <TouchableHighlight onPress={() => { diminuiitem() }} underlayColor={'white'} style={{ backgroundColor: '#rgba(231, 64, 64, 0.5)', marginLeft: 5, marginRight: 25, marginTop: 5, alignContent: 'center', borderTopLeftRadius: 30, borderBottomLeftRadius: 30, width: 40, height: 40, }}>
              <Image source={minus} style={{ width: 30, marginTop: "45%", marginLeft: 5 }}></Image>
            </TouchableHighlight>

            <Text style={{ fontSize: 32, color: 'white', marginTop: 3 }}>{quantia}</Text>

            <TouchableHighlight onPress={() => { aumentaitem() }} underlayColor={'white'} style={{ marginLeft: 30, marginRight: 5, backgroundColor: '#rgba(231, 64, 64, 0.5)', width: 40, height: 40, marginTop: 5, borderTopRightRadius: 30, borderBottomRightRadius: 30 }}>
              <Image source={plus} style={{ alignSelf: "center", marginTop: 5, marginRight: 2, width: 30, height: 30 }}></Image>
            </TouchableHighlight>
          </View>

          <TouchableHighlight onPress={() => alert('Sem sistema de carrinho (ainda)')} underlayColor={'white'} style={[globalStyles.button, { marginTop: '2%' }]}>
            <Text style={{ fontSize: 20, textAlign: 'center', fontWeight: "700", color: 'white' }}>Adicionar ao carrinho</Text>
          </TouchableHighlight>

          <View style={{ marginTop: '5%', marginBottom: '10%' }}>
            <Text style={{ textAlign: 'center' }}>Observações</Text>
            <TextInput style={[globalStyles.textInput, { width: 300, textAlign: 'left', textAlignVertical: 'center' }]}></TextInput>
          </View>

        </View>
      </View>
    </ScrollView>
  )
}
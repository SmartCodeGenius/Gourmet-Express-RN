import React from "react"
import image from "../../assets/icones/img_estabelecimento.png"
import { StyleSheet, Image, Text, View, ImageBackground, TouchableHighlight } from "react-native"
import { useNavigation } from "@react-navigation/native"

export default function Component1({data}) {
  const navigation = useNavigation();

  return (
    <View style={styles.Container}>
      <View style={styles.Container2}>
        <View style={styles.Container3}>
          <View style={styles.Container4}>
            <Image
              style={styles.Image2}
              source={image}
            />
            <View style={[styles.Group766, {marginLeft: '2%'}]}>
              <Text style={styles.PODeQueijo3Un}>{data.nome}, {data.unidade} Un.</Text>
              <Text style={styles.R900}>R$: {data.preço}</Text>
              <Text style={styles._122230742}>12/2/23 07:42</Text>
            </View>
          </View>
        </View>
        <View style={styles.Group69}>
          <Text style={styles.SuaAvaliaO}>Sua avaliação:</Text>
          <View style={styles.Group52}>
            <Image
              style={styles.Star}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/x30kk9d3a5-188%3A372?alt=media&token=5b98c372-30fc-4c5d-a6c0-4ec17dbac045",
              }}
            />
            <Image
              style={styles.Star}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/x30kk9d3a5-188%3A373?alt=media&token=70bca453-d0b4-42e3-a6d5-f10bc9905c39",
              }}
            />
            <Image
              style={styles.Star}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/x30kk9d3a5-188%3A374?alt=media&token=f8d0c59a-6208-45fd-8555-5a7e66452a3e",
              }}
            />
            <Image
              style={styles.Star}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/x30kk9d3a5-188%3A375?alt=media&token=83e284a2-c94e-4380-be08-8b3b27fc229e",
              }}
            />
            <Image
              style={styles.Star2 }
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/x30kk9d3a5-188%3A376?alt=media&token=58e58bb9-8647-4885-8287-9ff2477b3ba8",
              }}
            />
          </View>
        </View>
      </View>
        <TouchableHighlight onPress={() => navigation.navigate('Item', {nome: data.nome, preço: data.preço, img: data.img, ingrediente: data.ingrediente, unidade: data.unidade})} underlayColor={'white'} style={styles.Group63}>
            <Text style={styles.Comprar}>Comprar</Text>
        </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  Container: {
    marginRight: 30,
    marginBottom: 50,
    marginTop: 10,
    position: "relative",
    display: "flex",
    flexDirection: "column",
    width: 318,
    height: 113,
    boxSizing: "border-box",
  },
  Container2: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    boxSizing: "border-box",
  },
  Container3: {
    width: "100%",
    height: 86,
    boxSizing: "border-box",
  },
  Container4: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    width: "100%",
    height: "100%",
    paddingRight: 8,
    boxSizing: "border-box",
  },
  Image2: {
    width: 115,
    height: 76,
  },
  Group766: {
    display: "flex",
    flexDirection: "column",
    top: 5,
    height: "100%",
    boxSizing: "border-box",
  },
  PODeQueijo3Un: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(0,0,0,1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
  },
  R900: {
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    fontWeight: "400",
  },
  _122230742: {
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    fontWeight: "400",
  },
  Group69: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    width: "100%",
    boxSizing: "border-box",
  },
  SuaAvaliaO: {
    color: "rgba(0,0,0,1)",
    fontSize: 16,
    fontWeight: "400",
  },
  Group52: {
    display: "flex",
    flexDirection: "row",
    height: 19,
    width: 'auto',
    marginLeft: 20,
    borderColor: "rgba(124,11,11,1)",
    borderRadius: 185,
    boxSizing: "border-box",
    backgroundColor: "rgba(124,11,11,0.75)",
  },
  Star: {
    width: 14.73,
    marginLeft: 10,
    height: "100%",
  },
  Star2:{    
    width: 14.73,
    marginLeft: 10,
    marginRight: 10,
    height: "100%",
  }, 
  Group63: {
    position: "absolute",
    justifyContent: 'center',
    top: 115,
    width: 139,
    height: 40,
    borderRadius: 10,
    boxSizing: "border-box",
    backgroundColor: "rgba(124,11,11,1)",
  },
  Comprar: {
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
  },
})

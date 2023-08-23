import { StatusBar } from 'react';
import { StyleSheet, Text, View, Image, Pressable} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
      <View style={styles.containerLogo}>
        <Image source={require('./assets/icones/logoGrande.jpg')} styles={styles.imageStyle}></Image>
      </View>

      {/*Botões de login e cadastro*/}

      <View style={styles.containerForm}>
        <Text style={{fontWeight:'bold', fontSize: 24}}>Seja bem-vindo(a)!</Text>
        
        <Pressable   style={[styles.button, {marginBottom:36}]}>
          <Text style={{fontWeight:'bold', fontSize: 28, color:'white'}}>Login</Text>
        </Pressable>
        
        <Pressable style={styles.button}>
          <Text style={{fontWeight:'bold', fontSize: 28, color:'white'}}>Cadastrar</Text>
        </Pressable>

        {/*botões de contas alternativas*/}

        <Text style={{textAlign: 'center', marginTop: 60}}>Entrar com conta alternativa</Text>
        <View style={[ styles.button, {flexDirection: 'row', alignItems: 'center'}]}>

          <Pressable style={{flexDirection: 'row-reverse'}}>
            <Image source={require("./assets/icones/gmailIcon.png")}/>
          </Pressable>
          
          <Pressable style={{marginLeft: 30, marginRight: 30,}}>
            <Image source={require("./assets/icones/facebookIcon.png")}/>
          </Pressable>

          <Pressable>
            <Image source={require("./assets/icones/twitterIcon.png")}/>
          </Pressable>
        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  containerForm:{
    flex: 1,
    marginBottom: 250,
    alignItems: 'center'
  },
  containerLogo: {
    flex: 2,
    alignItems: 'center',
    marginTop: 121,
  },
  imageStyle: {
    justifyContent: 'center',
    width:376,
    height: 150,
  },
  button:{
    backgroundColor: '#7C0B0B',
    width: 254,
    height: 48,
    borderRadius: 30, 
    justifyContent: 'center', 
    alignItems: 'center'
  }
});

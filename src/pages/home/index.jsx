import { StatusBar } from 'react';
import {Text, View, Image, Pressable} from 'react-native';
import { globalStyles } from '../../styles/';

export default function Home({navigation}) {
  return (
    <View style={globalStyles.container}>
      
      <View style={{flex: 2, alignItems: 'center',marginTop: 121,}}>
        <Image source={require('../../assets/icones/logoGrande.jpg')} styles={{justifyContent: 'center',width:376,height: 150,}}></Image>
      </View>

      {/*Botões de login e cadastro*/}

      <View style={{flex: 1, marginBottom: 250,alignItems: 'center'}}>
        <Text style={{fontWeight:'bold', fontSize: 24}}>Seja bem-vindo(a)!</Text>
        
        <Pressable   style={[globalStyles.button, {marginBottom:36}]} onPress={() => navigation.navigate('login')}>
          <Text style={{fontWeight:'bold', fontSize: 28, color:'white'}}>Login</Text>
        </Pressable>
        
        <Pressable style={globalStyles.button} onPress={() => navigation.navigate('cadastro')}>
          <Text style={{fontWeight:'bold', fontSize: 28, color:'white'}}>Cadastrar</Text>
        </Pressable>

        {/*botões de contas alternativas*/}

        <Text style={{textAlign: 'center', marginTop: 60}}>Entrar com conta alternativa</Text>
        <View style={[ globalStyles.button, {flexDirection: 'row', alignItems: 'center'}]}>

          <Pressable style={{flexDirection: 'row-reverse'}} onPress={() => navigation.navigate('login')}> 
            <Image source={require("../../assets/icones/gmailIcon.png")}/>
          </Pressable>
          
          <Pressable style={{marginLeft: 30, marginRight: 30,}} onPress={() => navigation.navigate('login')}>
            <Image source={require("../../assets/icones/facebookIcon.png")}/>
          </Pressable>

          <Pressable onPress={() => navigation.navigate('login')}>
            <Image source={require("../../assets/icones/twitterIcon.png")}/>
          </Pressable>
        </View>

      </View>

    </View>
  );
}


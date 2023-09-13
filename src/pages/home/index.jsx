import {Text, View, Image, TouchableOpacity} from 'react-native';
import { globalStyles } from '../../components/atoms';

export default function Home({navigation}) {
  return (
    <View style={globalStyles.container}>
      <View style={{flex: 2, alignItems: 'center',marginTop: 121,}}>
        <Image source={require('../../assets/icones/logoGrande.jpg')} styles={{justifyContent: 'center',width:376,height: 150,}}></Image>
      </View>

      {/*Botões de login e cadastro*/}

      <View style={{flex: 1, marginBottom: 250,alignItems: 'center'}}>
        <Text style={{fontWeight:'bold', fontSize: 24}}>Seja bem-vindo(a)!</Text>
        
        <TouchableOpacity   style={[globalStyles.button, {marginBottom:36}]} onPress={() => navigation.navigate('login')}>
          <Text style={{fontWeight:'bold', fontSize: 28, color:'white'}}>Login</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={globalStyles.button} onPress={() => navigation.navigate('cadastro')}>
          <Text style={{fontWeight:'bold', fontSize: 28, color:'white'}}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


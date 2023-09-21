import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../pages/home'
import loginScreen from '../pages/login'
import cadastroScreen from '../pages/cadastro'
import listaRestaurantes from '../pages/listaRestaurantes'
import TelaConfirmacao from '../pages/confirmation';
import RecuperaSenha from '../pages/recuperaSenha';
import AdicionarCreditos from '../pages/adicionarCreditos';
import MetodosDePagamento from '../pages/metodosDePagamento';
import ValeAlimentação from '../pages/valeAlimentação';
import ValeRefeição from '../pages/valeRefeição';
import CriarNovaSenha from '../pages/criarNovaSenha';
import Acesso from '../pages/acesso';


import DrawerFunc from './DrawerNavigator';

const Stack = createNativeStackNavigator();
export default function StackNavigator(){
  return (
      <Stack.Navigator initialRouteName='index' screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="index"
          component={HomeScreen}
          options={{ headerShown:false, animation: 'fade' }} />
        <Stack.Screen 
          name="login" 
          component={loginScreen} 
          options={{ headerShown:false, animation: 'fade' }} />
        <Stack.Screen
          name="cadastro" 
          component={cadastroScreen}
          options={{ headerShown:false, animation: 'fade' }} />   
        <Stack.Screen 
        name='telaConfirmacao'
        component={TelaConfirmacao}
        options={{ headerShown:false, animation: 'fade' }} 
        />
        <Stack.Screen
          name="listaRestaurantes" 
          component={listaRestaurantes}
          options={{ headerShown:false, animation: 'fade' }} 
        />
        <Stack.Screen
        name='RecuperaSenha'
        component={RecuperaSenha}
        options={{ headerShown:false, animation: 'fade' }} 
        />        
        <Stack.Screen
        name='AdicionarCreditos'
        component={AdicionarCreditos}
        options={{ headerShown:false, animation: 'fade' }} 
        />      
        <Stack.Screen
        name='MetodosDePagamento'
        component={MetodosDePagamento}
        options={{ headerShown:false, animation: 'fade' }} 
        />
        <Stack.Screen
        name='ValeAlimentação'
        component={ValeAlimentação}
        options={{ headerShown:false, animation: 'fade' }} 
        />        
        <Stack.Screen
        name='ValeRefeição'
        component={ValeRefeição}
        options={{ headerShown:false, animation: 'fade' }} 
        />
        <Stack.Screen
        name='CriarNovaSenha'
        component={CriarNovaSenha}
        options={{ headerShown:false, animation: 'fade' }} 
        />
        <Stack.Screen
        name='Acesso'
        component={Acesso}
        options={{ headerShown:false, animation: 'fade' }} 
        />
        <Stack.Screen 
        name='DrawerLayout'
        component={DrawerFunc}
        options={{ headerShown:false, animation: 'fade' }} 
        />
        </Stack.Navigator>
  );
};
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../pages/home'
import loginScreen from '../pages/login'
import cadastroScreen from '../pages/cadastro'
import listaRestaurantes from '../pages/listaRestaurantes'
import TelaConfirmacao from '../pages/confirmation';
import RecuperaSenha from '../pages/recuperaSenha';

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
        name='DrawerLayout'
        component={DrawerFunc}
        options={{ headerShown:false, animation: 'fade' }} 
        />
        </Stack.Navigator>
  );
};
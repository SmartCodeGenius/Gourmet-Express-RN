import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../pages/home'
import loginScreen from '../pages/login'
import cadastroScreen from '../pages/cadastro'
import listaRestaurantes from '../pages/listaRestaurantes'

const Stack = createNativeStackNavigator();

export default function Route(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="index"
          component={HomeScreen}
          options={{ headerShown:false, animation: 'fade' }}
        />
        <Stack.Screen 
          name="login" 
          component={loginScreen} 
          options={{ headerShown:false, animation: 'fade' }} />
        <Stack.Screen
          name="cadastro" 
          component={cadastroScreen}
          options={{ headerShown:false, animation: 'fade' }} /> 
        <Stack.Screen
          name="listaRestaurantes" 
          component={listaRestaurantes}
          options={{ headerShown:false, animation: 'fade' }} 
        />
        </Stack.Navigator>
    </NavigationContainer>
  );
};
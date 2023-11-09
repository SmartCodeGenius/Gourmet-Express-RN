import { NavigationContainer } from '@react-navigation/native';
import React, { useContext, useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthContext } from '../Context/Auth'

import RouteAuth from './routeAuth';
import HomeScreen from '../pages/home'
import loginScreen from '../pages/login'
import cadastroScreen from '../pages/cadastro'
import TelaConfirmacao from '../pages/confirmation';

export default function Routes() {
  const Stack = createNativeStackNavigator();
  const { ehAutenticado, EhAuth } = useContext(AuthContext);

  useEffect(() => {
    EhAuth();
  }, [EhAuth]);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='index'>
        <Stack.Screen
          name="index"
          component={ehAutenticado ? HomeScreen : RouteAuth}
          options={{ headerShown: false, animation: 'fade' }} />
        <Stack.Screen
          name="login"
          component={ehAutenticado ? loginScreen : RouteAuth}
          options={{ headerShown: false, animation: 'fade' }} />
        <Stack.Screen
          name="cadastro"
          component={ehAutenticado ? cadastroScreen : RouteAuth}
          options={{ headerShown: false, animation: 'fade' }} />
        <Stack.Screen
          name='telaConfirmacao'
          component={ehAutenticado ? TelaConfirmacao : RouteAuth}
          options={{ headerShown: false, animation: 'fade' }}
        />
        <Stack.Screen
          name="RouteAuth"
          component={RouteAuth}
          options={{ headerShown: false, animation: 'fade' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
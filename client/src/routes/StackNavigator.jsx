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
  const { ehAutenticado, EhAuth, setAuth } = useContext(AuthContext);

  // useEffect(() => {
  //   EhAuth();
  // }, [EhAuth]);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!ehAutenticado ? (
          <Stack.Screen
            name="index"
            component={HomeScreen}
            options={{ headerShown: false, animation: 'fade' }} />
        ) : (<Stack.Screen
          name="RouteAuth"
          component={RouteAuth}
          options={{ headerShown: false, animation: 'fade' }} />
        )}

        <Stack.Screen
          name="login"
          component={loginScreen}
          options={{ headerShown: false, animation: 'fade' }} />
        <Stack.Screen
          name="cadastro"
          component={cadastroScreen}
          options={{ headerShown: false, animation: 'fade' }} />
        <Stack.Screen
          name='telaConfirmacao'
          component={TelaConfirmacao}
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
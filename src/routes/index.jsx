import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../pages/home/index'
import loginScreen from '../pages/login'

const Stack = createNativeStackNavigator();

export default function Route(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="index"
          component={HomeScreen}
          options={{ headerShown:false }}
        />
        <Stack.Screen name="login" component={loginScreen} options={{ headerShown:false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import StackNavigator from './StackNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Routes(){
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name="Root"
        component={StackNavigator}
        options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
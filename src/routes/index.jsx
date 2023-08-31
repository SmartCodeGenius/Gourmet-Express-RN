import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import StackNavigator from './StackNavigator';
import DrawerFunc from './DrawerNavigator';

export default function Routes(){
  return (
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
  );
};
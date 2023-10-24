import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import listaRestaurantes from '../pages/listaRestaurantes'
import RecuperaSenha from '../pages/recuperaSenha';
import AdicionarCreditos from '../pages/adicionarCreditos';
import MetodosDePagamento from '../pages/metodosDePagamento';
import ValeAlimentação from '../pages/valeAlimentação';
import ValeRefeição from '../pages/valeRefeição';
import CriarNovaSenha from '../pages/criarNovaSenha';
import Acesso from '../pages/acesso';
import Item from '../pages/item';


import DrawerFunc from './DrawerNavigator';

const Stack = createNativeStackNavigator();
export default function RouteAuth(){
  return (
      <Stack.Navigator initialRouteName='listaRestaurantes' screenOptions={{headerShown: false}}>
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
        name='Item'
        component={Item}
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
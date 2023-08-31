import React from "react";
import { createDrawerNavigator, DrawerToggleButton } from "@react-navigation/drawer";
import ListaRestaurantes from "../pages/listaRestaurantes";

const Drawer = createDrawerNavigator();

export default function DrawerFunc(){
  return (
      <Drawer.Navigator screenOptions={{        
        drawerPosition: 'right',
      headerLeft: false,
      headerRight: () => <DrawerToggleButton/>}}>
        <Drawer.Screen name="Teste" component={ListaRestaurantes} />
      </Drawer.Navigator>
  );
}
import React from "react";
import { createDrawerNavigator, DrawerToggleButton } from "@react-navigation/drawer";
import ListaRestaurantes from "../pages/listaRestaurantes";
import CustomDrawer from "../components/molecules/customDrawer";

const Drawer = createDrawerNavigator();

export default function DrawerFunc(){
  return (
      <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props}/>}
      screenOptions={{        
        drawerPosition: 'right',
        headerLeft: false,
        headerRight: () => <DrawerToggleButton/>,
        headerShown: false,
      }}>
        <Drawer.Screen name="Home" component={ListaRestaurantes} options={{ drawerActiveTintColor: '#fff', drawerActiveBackgroundColor: '#7C0B0B'}}/>
        <Drawer.Screen name="Histórico" component={ListaRestaurantes} options={{ drawerActiveTintColor: '#fff', drawerActiveBackgroundColor: '#7C0B0B'}}/>
        <Drawer.Screen name="Configurações" component={ListaRestaurantes} options={{ drawerActiveTintColor: '#fff', drawerActiveBackgroundColor: '#7C0B0B'}}/>
        <Drawer.Screen name="Carteira" component={ListaRestaurantes} options={{ drawerActiveTintColor: '#fff', drawerActiveBackgroundColor: '#7C0B0B'}}/>
      </Drawer.Navigator>
  );
}
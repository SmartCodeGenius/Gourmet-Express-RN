import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerScreen from "../pages/drawer";

const Drawer = createDrawerNavigator();

export default function DrawerFunc(){
  return (
      <Drawer.Navigator>
        <Drawer.Screen name="home" component={DrawerScreen} />
      </Drawer.Navigator>
  );
}
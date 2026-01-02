import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AppStack from "./AppStack";
import ProfileScreen from "../screens/ProfileScreen";
import NativeStack from "./navigation/NativeStack";

const Drawer = createDrawerNavigator();

export default function AppDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Tâches" component={AppStack} />
      <Drawer.Screen name="Profil" component={ProfileScreen} />
      <Drawer.Screen name="NativeStack" component={NativeStack} />
    </Drawer.Navigator>
  );
}
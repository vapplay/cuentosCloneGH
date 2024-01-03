import { DrawerContent, createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
//import { createStackNavigator } from "@react-navigation/stack";
import Home from "./home";
import Player from "./player";

//const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationStacks = () => {
  return(
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
  //      drawerContent={(props) => <DrawerContent {...props} />}
      >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Player" component={Player} />
      </Drawer.Navigator>
      </NavigationContainer>
  )

  // return (
  //   <Stack.Navigator mode="card" headerMode="none">
  //     <Stack.Screen name="Home" component={Home} />
  //     <Stack.Screen name="Player" component={Player} />
  //   </Stack.Navigator>
  // );
};

export default NavigationStacks;

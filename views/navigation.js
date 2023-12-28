import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./home";
import Player from "./player";

const Stack = createStackNavigator();

const NavigationStacks = () => {
  return (
    <Stack.Navigator mode="card" headerMode="none">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Player" component={Player} />
    </Stack.Navigator>
  );
};

export default NavigationStacks;

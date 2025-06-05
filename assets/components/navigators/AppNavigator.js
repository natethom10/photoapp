import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../application/Home";
import CreateGroup from "../application/CreateGroup";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CreateGroup"
        component={CreateGroup}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

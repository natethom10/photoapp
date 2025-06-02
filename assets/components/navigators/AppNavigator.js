import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../application/Home";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

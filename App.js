import react from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./assets/components/Login";
import CreateAccount from "./assets/components/CreateAccount";
import ForgotPassword from "./assets/components/ForgotPassword";
import CreateSuccess from "./assets/components/CreateSuccess";
import ForgotPasswordSuccess from "./assets/components/ForgotPasswdSuccess";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CreateAccount"
          component={CreateAccount}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AccountCreated"
          component={CreateSuccess}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PasswordLinkSent"
          component={ForgotPasswordSuccess}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../authentication/Login";
import CreateAccount from "../authentication/CreateAccount";
import ForgotPassword from "../authentication/ForgotPassword";
import ForgotPasswordSuccess from "../authentication/ForgotPasswdSuccess";

const AuthStack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="CreateAccount" component={CreateAccount} />
      <AuthStack.Screen name="ForgotPassword" component={ForgotPassword} />
      <AuthStack.Screen
        name="PasswordLinkSent"
        component={ForgotPasswordSuccess}
      />
    </AuthStack.Navigator>
  );
}

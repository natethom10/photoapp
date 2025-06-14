import { Stack } from "expo-router";

const AuthLayout = () => {
  return (
    <Stack initialRouteName="login" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" />
      <Stack.Screen name="forgotpassword" />
      <Stack.Screen name="createaccount" />
      <Stack.Screen name="verifyemail" />
    </Stack>
  );
};

export default AuthLayout;

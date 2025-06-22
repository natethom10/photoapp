import { Stack } from "expo-router";

const AuthLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false, animation: 'fade_from_bottom' }}>
      <Stack.Screen name="login" />
      <Stack.Screen name="forgotpassword" />
      <Stack.Screen name="createaccount" />
      <Stack.Screen name="verifyemail" />
      <Stack.Screen name="codesent" />
      <Stack.Screen name="loginsuccess" />
    </Stack>
  );
};

export default AuthLayout;

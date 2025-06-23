import React, { useState } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  ActivityIndicator,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { Link } from "expo-router";

type Props = {
  username: string;
  setUsername: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
  handleSubmit: () => void;
  loading: boolean;
};

const LoginBox = ({
  username,
  setUsername,
  password,
  setPassword,
  handleSubmit,
  loading,
}: Props) => {
  const { colors } = useTheme();
  const dimensions = useWindowDimensions();

  return (
    <View style={[styles.container, { marginTop: dimensions.height / 8 }]}>
      <Text style={{ color: colors.text, fontSize: 18, marginBottom: 8 }}>
        Login
      </Text>

      <TextInput
        placeholder="Email or Username"
        placeholderTextColor={colors.text}
        style={[
          styles.input,
          {
            borderColor: colors.text,
            color: colors.text,
            backgroundColor: colors.card,
          },
        ]}
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor={colors.text}
        secureTextEntry
        style={[
          styles.input,
          {
            borderColor: colors.text,
            color: colors.text,
            backgroundColor: colors.card,
          },
        ]}
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
      />
      <TouchableOpacity
        style={[styles.button, { borderColor: colors.text }]}
        onPress={handleSubmit}
      >
        {loading ? (
          <ActivityIndicator />
        ) : (
          <Text style={{ color: colors.text }}>Continue</Text>
        )}
      </TouchableOpacity>

      <Link href="/createaccount" asChild>
        <TouchableOpacity style={[styles.button, { borderColor: colors.text }]}>
          <Text style={{ color: colors.text }}>Create Account</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/forgotpassword" asChild>
        <TouchableOpacity style={[styles.button, { borderColor: colors.text }]}>
          <Text style={{ color: colors.text }}>Forgot Password</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    gap: 12,
  },
  input: {
    borderWidth: 1,
    width: "70%",
    borderRadius: 6,
    height: 40,
    paddingHorizontal: 10,
  },
  button: {
    marginTop: 8,
    padding: 10,
    borderWidth: 1,
    borderRadius: 6,
  },
});

export default LoginBox;

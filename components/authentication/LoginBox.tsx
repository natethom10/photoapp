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
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  username: string;
  setUsername: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
  handleSubmit: () => void;
  loading: boolean;
  error: string;
  setError: (value: string) => void;
};

const LoginBox = ({
  username,
  setUsername,
  password,
  setPassword,
  handleSubmit,
  loading,
  error,
  setError,
}: Props) => {
  const { colors } = useTheme();
  const dimensions = useWindowDimensions();
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

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
        autoCorrect={false}
      />
      <View
        style={[
          styles.inputContainer,
          { borderColor: colors.text, backgroundColor: colors.card },
        ]}
      >
        <TextInput
          style={[styles.passwordInput, { color: colors.text }]}
          placeholder="Password"
          placeholderTextColor={colors.text}
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Ionicons
            name={showPassword ? "eye-off" : "eye"}
            size={20}
            color={colors.text}
            style={{ paddingHorizontal: 6 }}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={[styles.button, { borderColor: colors.text }]}
        onPress={handleSubmit}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator />
        ) : (
          <Text style={{ color: colors.text }}>Continue</Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          setError("");
          setUsername("");
          setPassword("");
          router.push("/(authentication)/createaccount");
        }}
      >
        <Text style={{ color: colors.text }}>Create Account</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          setError("");
          setUsername("");
          setPassword("");
          router.push("/(authentication)/forgotpassword");
        }}
      >
        <Text style={{ color: colors.text }}>Forgot Password</Text>
      </TouchableOpacity>
      <Text style={styles.error}>{error}</Text>
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
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 6,
    width: "70%",
    height: 40,
    paddingHorizontal: 10,
  },
  passwordInput: {
    flex: 1,
    height: "100%",
  },
  error: {
    color: "red",
    textAlign: "center",
    marginTop: 10,
  },
});

export default LoginBox;

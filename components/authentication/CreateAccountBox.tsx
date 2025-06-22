import { useTheme } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { Link } from "expo-router";
import { useState } from "react";

import { createFirestoreUser } from "../../scripts/createFirestoreUser";
import { checkUsernameAvailability } from "@/scripts/checkUsernameAvailability";

const CreateAccountBox = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const [emailError, setEmailError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [fieldsError, setFieldsError] = useState("");

  const handleSubmit = async () => {
    setLoading(true);
    if (password !== confirmPassword || password.length < 6) {
      setLoading(false);
      return;
    }
    const response = await createFirestoreUser(
      email,
      password === confirmPassword ? password : null,
      username
    );
    if (!response.success) {
      if (response.code === "missing-fields") setFieldsError(response.message);
      else setFieldsError("");

      if (
        response.code === "username-taken" ||
        response.code === "weak-username"
      ) {
        console.log(response.message);
        setUsernameError(response.message);
      } else setUsernameError("");

      if (
        response.code === "auth/email-already-in-use" ||
        response.code === "auth/invalid-email"
      )
        setEmailError(response.message);
      else setEmailError("");
    } else {
      setEmail("");
      setEmailError("");
      setUsername("");
      setUsernameError("");
      setPassword("");
      setConfirmPassword("");
    }

    setLoading(false);
  };

  const { colors } = useTheme();
  const dimensions = useWindowDimensions();
  return (
    <View
      style={[styles.outerContainer, { marginTop: dimensions.height / 10 }]}
    >
      <View style={styles.container}>
        <Text style={{ color: colors.text, fontSize: 18, marginBottom: 8 }}>
          Create Account
        </Text>
        <TextInput
          placeholder="Email"
          placeholderTextColor={colors.text}
          style={[
            styles.input,
            {
              borderColor: colors.text,
              color: colors.text,
              backgroundColor: colors.card,
            },
          ]}
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />
        {emailError && (
          <View>
            <Text style={{ color: "red", fontSize: 12 }}>{emailError}</Text>
          </View>
        )}
        <TextInput
          placeholder="Username"
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
          onChangeText={async (text) => {
            setUsername(text);
            const available = await checkUsernameAvailability(text);

            if (available.success) {
              setUsernameError("");
            } else {
              setUsernameError(available.message);
            }
          }}
          autoCapitalize="none"
        />
        {username.length >= 4 &&
          (usernameError ? (
            <View>
              <Text style={{ color: "red", fontSize: 12 }}>
                {usernameError}
              </Text>
            </View>
          ) : (
            <View>
              <Text style={{ color: "green", fontSize: 12 }}>
                Username available!
              </Text>
            </View>
          ))}
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
        />
        {password.length < 6 && password.length > 0 ? (
          <Text
            style={{
              fontSize: 12,
              color: password.length >= 6 ? "green" : "red",
            }}
          >
            Must be at least 6 characters
          </Text>
        ) : null}
        <TextInput
          placeholder="Confirm Password"
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
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        {confirmPassword !== password ||
        (confirmPassword.length < 6 && confirmPassword.length > 0) ? (
          <View>
            <Text
              style={{
                fontSize: 12,
                color: "red",
              }}
            >
              Passwords must match
            </Text>
          </View>
        ) : null}
        <TouchableOpacity
          style={[styles.button, { borderColor: colors.text }]}
          onPress={handleSubmit}
        >
          {loading ? (
            <ActivityIndicator />
          ) : (
            <Text style={{ color: colors.text }}>Submit</Text>
          )}
        </TouchableOpacity>
        {fieldsError && (
          <View>
            <Text style={{ color: "red", fontSize: 12 }}>{fieldsError}</Text>
          </View>
        )}
      </View>
      <View style={styles.container}>
        <Text style={{ color: colors.text }}>Already have an account?</Text>
        <Link href="/" asChild>
          <TouchableOpacity
            style={[styles.button, { borderColor: colors.text }]}
          >
            <Text style={{ color: colors.text }}>Back to Login</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

export default CreateAccountBox;

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
    padding: 10,
    borderWidth: 1,
    borderRadius: 6,
  },
  outerContainer: {
    flex: 1,
    justifyContent: "space-between",
  },
});

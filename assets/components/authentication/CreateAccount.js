import {
  View,
  Text,
  StyleSheet,
  TextInput,
  useWindowDimensions,
  useColorScheme,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useEffect, useState } from "react";
import CustomInput from "../../reusable/Input";

import { createFirestoreUser } from "../../../backend/authentication/loginVerify";

export default function CreateAccount({ navigation }) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { width } = useWindowDimensions();
  const inputWidth = width > 768 ? "30%" : "80%";
  const loginBoxWidth = width > 768 ? "40%" : "90%";

  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";

  const inputStyles = {
    borderColor: isDarkMode ? "#ccc" : "#444444",
    backgroundColor: isDarkMode ? "#1F1F1F" : "#fff",
    color: isDarkMode ? "#E0E0E0" : "black",
    borderWidth: 1,
  };
  const textStyles = {
    color: isDarkMode ? "#E0E0E0" : "#333",
  };
  const containerStyles = {
    backgroundColor: isDarkMode ? "#121212" : "#f0f2f5",
  };
  const placeholderColor = isDarkMode ? "#BBBBBB" : "#333";

  const handleSubmit = async () => {
    setLoading(true);
    const response = await createFirestoreUser(email, password, username);
    // if (response.ok) {
    setEmail("");
    setUsername("");
    setPassword("");
    setConfirmPassword("");
    // }
    
    setLoading(false);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={[styles.container, containerStyles]}>
        <View style={[styles.loginBox, { width: loginBoxWidth }]}>
          <Text style={[styles.loginText, textStyles]}>Create Account</Text>
          <CustomInput
            inputWidth={inputWidth}
            placeholder="Email"
            autoComplete="email"
            placeholderColor={placeholderColor}
            passedStyles={inputStyles}
            value={email}
            onChangeText={setEmail}
          />
          <CustomInput
            inputWidth={inputWidth}
            placeholder="Username"
            autoComplete="username"
            placeholderColor={placeholderColor}
            passedStyles={inputStyles}
            value={username}
            onChangeText={setUsername}
          />
          <CustomInput
            inputWidth={inputWidth}
            placeholder="Password"
            autoComplete="password"
            placeholderColor={placeholderColor}
            passedStyles={inputStyles}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />
          <CustomInput
            inputWidth={inputWidth}
            placeholder="Confirm Password"
            autoComplete="password"
            placeholderColor={placeholderColor}
            passedStyles={inputStyles}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={true}
          />
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => handleSubmit()}
          >
            <Text style={{ color: "#E0E0E0" }}>
              {!loading ? "Sign Up" : "Loading..."}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={textStyles}>Back to Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loginBox: {
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    marginTop: -120,
  },
  loginText: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
  },
  linkBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
  },
  link: {
    padding: 30,
  },
  loginButton: {
    backgroundColor: "blue",
    padding: 10,
    paddingHorizontal: 30,
    borderRadius: 50,
  },
});

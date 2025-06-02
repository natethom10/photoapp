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

import { checkLogin } from "../../../backend/loginVerify";

export default function Login({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { width } = useWindowDimensions();
  const inputWidth = width > 768 ? "30%" : "80%";
  const loginBoxWidth = width > 768 ? "40%" : "90%";

  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";

  const inputStyles = {
    borderColor: isDarkMode ? "#444444" : "#ccc",
    backgroundColor: isDarkMode ? "#1F1F1F" : "#fff",
    color: isDarkMode ? "#E0E0E0" : "black",
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
    setSubmitted(true);
    if (username && password) {
      const response = await checkLogin(username, password);
      if (response.code) {
        setErrorMessage("Username or Password is incorrect.");
      }
    } else {
      if (!username) {
        setUsernameError(true);
      }
      if (!password) {
        setPasswordError(true);
      }
      setErrorMessage("Make sure to fill out all fields.");
    }
    setLoading(false);
  };

  useEffect(() => {
    if (submitted) {
      if (username) {
        setUsernameError(false);
        setErrorMessage("");
      } else {
        setUsernameError(true);
        setErrorMessage("Make sure to fill out all fields.");
      }
      if (password) {
        setPasswordError(false);
        setErrorMessage("");
      } else {
        setPasswordError(true);
        setErrorMessage("Make sure to fill out all fields.");
      }
    }
  }, [username, password]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={[styles.container, containerStyles]}>
        <View style={[styles.loginBox, { width: loginBoxWidth }]}>
          <Text style={[styles.loginText, textStyles]}>Login</Text>
          <CustomInput
            inputWidth={inputWidth}
            placeholder="Enter username"
            autoComplete="username"
            placeholderColor={placeholderColor}
            passedStyles={[inputStyles, usernameError && styles.inputError]}
            value={username}
            onChangeText={setUsername}
          />
          <CustomInput
            inputWidth={inputWidth}
            placeholder="Enter password"
            autoComplete="password"
            placeholderColor={placeholderColor}
            passedStyles={[inputStyles, passwordError && styles.inputError]}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />
          <Text style={[textStyles, { color: "red" }]}>{errorMessage}</Text>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => handleSubmit()}
          >
            <Text style={{ color: "#E0E0E0" }}>{!loading ? 'Login' : 'Loading...'}</Text>
          </TouchableOpacity>
          <View style={[styles.linkBox, { width: inputWidth }]}>
            <TouchableOpacity
              onPress={() => navigation.navigate("CreateAccount")}
            >
              <Text style={textStyles}>Create Account</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("ForgotPassword")}
            >
              <Text style={textStyles}>Forgot Password</Text>
            </TouchableOpacity>
          </View>
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
  inputError: {
    borderColor: "red",
    borderWidth: 1,
  },
});

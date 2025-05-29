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
import { useState } from "react";
import CustomInput from "../reusable/Input";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
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

  const handleUsernameChange = (text) => {
    setUsername(text);
    console.log(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
    console.log(text);
  };

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
            passedStyles={inputStyles}
            value={username}
            onChangeText={handleUsernameChange}
          />
          <CustomInput
            inputWidth={inputWidth}
            placeholder="Enter password"
            autoComplete="password"
            placeholderColor={placeholderColor}
            passedStyles={inputStyles}
            value={password}
            onChangeText={handlePasswordChange}
            secureTextEntry={true}
          />
          <View style={[styles.button, { width: inputWidth }]}>
            <TouchableOpacity>
              <Text style={textStyles}>Create Account</Text>
            </TouchableOpacity>
            <TouchableOpacity>
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
    marginTop: -80,
  },
  loginText: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
  },
});

import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  useColorScheme,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

export default function CreateSuccess({ navigation }) {
  const { width } = useWindowDimensions();
  const loginBoxWidth = width > 768 ? "40%" : "90%";

  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";

  const textStyles = {
    color: isDarkMode ? "#E0E0E0" : "#333",
  };
  const containerStyles = {
    backgroundColor: isDarkMode ? "#121212" : "#f0f2f5",
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={[styles.container, containerStyles]}>
        <View style={[styles.loginBox, { width: loginBoxWidth }]}>
          <Text style={[styles.loginText, textStyles]}>Account Created!</Text>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={{ color: "#E0E0E0" }}>Back to Login</Text>
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

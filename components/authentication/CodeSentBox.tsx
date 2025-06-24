import { useTheme } from "@react-navigation/native";
import { useRouter } from "expo-router";
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";

const CodeSentBox = () => {
  const { colors } = useTheme();
  const dimensions = useWindowDimensions();
  const router = useRouter();
  const handlePress = () => {
    router.replace("/(authentication)/login");
  };
  return (
    <View style={[styles.container, { marginTop: dimensions.height / 10 }]}>
      <Text style={{ color: colors.text }}>Code Sent!</Text>
      <Text
        style={{
          color: colors.text,
          textAlign: "center",
          paddingHorizontal: 20,
        }}
      >
        If you have an email account registered with our app, check your spam
        and promotion inboxes and reset your password.
      </Text>
      <TouchableOpacity
        style={[
          { borderColor: colors.text, backgroundColor: colors.card },
          styles.button,
        ]}
        onPress={handlePress}
      >
        <Text style={{ color: colors.text }}>Back to Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CodeSentBox;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    gap: 12,
  },
  button: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    marginTop: 10,
  },
});

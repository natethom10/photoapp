import { useTheme } from "@react-navigation/native";
import {
  Text,
  useWindowDimensions,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Link, useRouter } from "expo-router";

const ForgotPasswordBox = () => {
  const { colors } = useTheme();
  const dimensions = useWindowDimensions();

  const router = useRouter();

  return (
    <View style={[styles.container, { marginTop: dimensions.height / 10 }]}>
      <Text style={{ color: colors.text, fontSize: 18, marginBottom: 8 }}>
        Forgot Password
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
      />
      <TouchableOpacity
        style={[styles.button, { borderColor: colors.text }]}
        onPress={() => router.replace("/(authentication)/codesent")}
      >
        <Text style={{ color: colors.text }}>Send Code</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ForgotPasswordBox;

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
});

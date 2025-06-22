import { useTheme } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Link } from "expo-router";

const CreateAccountBox = () => {
  const { colors } = useTheme();
  const dimensions = useWindowDimensions();
  return (
    <View style={[styles.outerContainer, { marginTop: dimensions.height / 10 }]}>
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
        />
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
        />
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
        />
        <Link href="/verifyemail" asChild>
          <TouchableOpacity
            style={[styles.button, { borderColor: colors.text }]}
          >
            <Text style={{ color: colors.text }}>Submit</Text>
          </TouchableOpacity>
        </Link>
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

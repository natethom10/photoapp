import { useTheme } from "@react-navigation/native";
import { View, Text, StyleSheet, useWindowDimensions } from "react-native";

const CodeSentBox = () => {
  const { colors } = useTheme();
  const dimensions = useWindowDimensions();
  return (
    <View style={[styles.container, { marginTop: dimensions.height / 10 }]}>
      <Text style={{ color: colors.text }}>Code Sent!</Text>
      <Text style={{ color: colors.text, textAlign: "center" }}>
        Check your email inboxes to verify your email, then come back here to
        change your password.
      </Text>
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
});

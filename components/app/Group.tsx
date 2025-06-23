import { useTheme } from "@react-navigation/native";
import { View, Text, StyleSheet, useWindowDimensions } from "react-native";

const Group = () => {
  const { colors } = useTheme();
  const { width } = useWindowDimensions();
  return (
    <View
      style={[
        styles.container,
        { width: width / 2.3, borderColor: colors.border },
      ]}
    >
      <Text style={{ color: colors.text, textAlign: "center" }}>
        Group Name
      </Text>
      <Text style={{ color: colors.text, textAlign: "center" }}>
        Opening Date
      </Text>
      <Text style={{ color: colors.text, textAlign: "center" }}>Image</Text>
    </View>
  );
};

export { Group };

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    display: "flex",
    padding: 10,
  },
});

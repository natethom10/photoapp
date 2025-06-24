import { View, StyleSheet, Text } from "react-native";
import { Group } from "./Group";
import { useTheme } from "@react-navigation/native";

const GroupList = () => {
  const { colors } = useTheme();
  return (
    <View style={{ flex: 1 }}>
      <Text style={{ color: colors.text }}>Active Groups</Text>
      <View style={styles.container}>
        <Group />
        <Group />
      </View>
      <Text style={{ color: colors.text, marginTop: 20 }}>Previous Groups</Text>
      <View style={styles.container}>
        <Group />
        <Group />
        <Group />
        <Group />
      </View>
    </View>
  );
};

export { GroupList };

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    margin: 5,
    gap: 10,
    marginTop: 10,
  },
});

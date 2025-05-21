import { View, Text, StyleSheet, Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ActiveGroup({ active }) {
  return (
    <View style={styles.container}>
      <Text>{active ? "Current" : "Old"}</Text>
      {active ? <Ionicons name="camera" size={24} color="black" /> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 5,
  },
});

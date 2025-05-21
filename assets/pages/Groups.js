import { View, Text, StyleSheet } from "react-native";

export default function Groups() {
  return (
    <View style={styles.container}>
      <Text style={{ color: "white" }}>Groups!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
});

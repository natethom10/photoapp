import { View, Text, StyleSheet } from "react-native";

export default function Camera() {
  return (
    <View style={styles.container}>
      <Text style={{ color: "white" }}>Camera!</Text>
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

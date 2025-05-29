import { View, Text, StyleSheet, TextInput } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          paddingHorizontal: 10,
          borderRadius: 5,
          width: '50%'
        }}
        placeholder="Type inline style..."
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

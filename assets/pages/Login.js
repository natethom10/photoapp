import { View, Text, StyleSheet, TextInput } from "react-native";

export default function Login() {
  return (
    <View style={styles.container}>
      <Text>Login!</Text>
      <TextInput style={styles.input}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }, input: {
    width: 100,
    borderWidth: 1,
    margin: 10,
    borderColor: 'black'
  }
});

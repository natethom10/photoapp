import react from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Group from "../components/ActiveGroup";

export default function Home() {
  return (
    <View style={styles.container}>
      <Button title="Create a Group" color={"black"} />
      <Text style={styles.header}>Active Groups:</Text>
      <View style={styles.groupings}>
        <Group active={true} />
        <Group active={true} />
        <Group active={true} />
      </View>
      <Text style={styles.header}>Previous Groups:</Text>
      <View style={styles.groupings}>
        <Group active={false} />
        <Group active={false} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 75,
  },
  title: {
    fontSize: 20,
  },
  header: {
    fontSize: 16,
  },
  groupings: {
    gap: 5,
    marginTop: 5
  }
});

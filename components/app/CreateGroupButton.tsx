import { useTheme } from "@react-navigation/native";
import { useRouter } from "expo-router";
import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  useWindowDimensions,
} from "react-native";

const CreateGroupButton = () => {
  const { colors } = useTheme();
  const { width } = useWindowDimensions();
  const router = useRouter();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.button,
          {
            width: width / 3,
            backgroundColor: colors.card,
            borderColor: colors.text,
          },
        ]}
        onPress={() => router.push("/(app)/creategroup")}
      >
        <Text style={[{ color: colors.text }, styles.text]}>Create Group</Text>
      </TouchableOpacity>
    </View>
  );
};

export { CreateGroupButton };

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    padding: 5,
    marginTop: 8,
    borderRadius: 10,
  },
  text: {
    textAlign: "center",
    fontWeight: "bold",
  },
  container: {
    display: "flex",
    alignItems: "center",
  },
});

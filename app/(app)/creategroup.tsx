import { useTheme } from "@react-navigation/native";
import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CreateGroup() {
  const { colors } = useTheme();
  return (
    <SafeAreaView>
      <Text style={{ color: colors.text }}>Create Group</Text>
    </SafeAreaView>
  );
}

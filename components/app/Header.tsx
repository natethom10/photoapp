import { useTheme } from "@react-navigation/native";
import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";

const Header = () => {
  const { colors } = useTheme();
  const router = useRouter();

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        height: 25,
      }}
    >
      <View style={{ width: 50 }} />
      <Text style={{ color: colors.primary, fontWeight: "bold", fontSize: 18 }}>
        Capsule
      </Text>
      <TouchableOpacity
        style={{ width: 50 }}
        onPress={() => router.push("/(app)/profile")}
      >
        <Text style={{ color: colors.text, textAlign: "right" }}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export { Header };

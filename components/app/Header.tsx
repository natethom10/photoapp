import { useTheme } from "@react-navigation/native";
import { View, Text } from "react-native";

const Header = () => {
  const { colors } = useTheme();
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 16,
        height: 56,
      }}
    >
      <View style={{ width: 50 }} />
      <Text style={{ color: colors.text, fontWeight: "bold", fontSize: 18 }}>
        Homepage
      </Text>
      <Text style={{ color: colors.text, width: 50, textAlign: "right" }}>
        Profile
      </Text>
    </View>
  );
};

export { Header };

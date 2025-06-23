import { useTheme } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";

const Header = () => {
  const { colors } = useTheme();
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
      <TouchableOpacity>
        <Text style={{ color: colors.text, width: 50, textAlign: "right" }}>
          Profile
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export { Header };

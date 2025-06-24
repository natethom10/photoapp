import {
  Text,
  StyleSheet,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { useRouter } from "expo-router";

const Group = () => {
  const { colors } = useTheme();
  const { width } = useWindowDimensions();
  const router = useRouter();

  const handlePress = () => {
    router.push("/(app)/groupscreen");
  };

  return (
    <TouchableOpacity
      style={[
        styles.container,
        { width: width / 2.3, borderColor: colors.border },
      ]}
      onPress={handlePress}
      activeOpacity={0.7}
    >
      <Text style={{ color: colors.text, textAlign: "center" }}>
        Group Name
      </Text>
      <Text style={{ color: colors.text, textAlign: "center" }}>
        Opening Date
      </Text>
      <Text style={{ color: colors.text, textAlign: "center" }}>Image</Text>
    </TouchableOpacity>
  );
};

export { Group };

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    display: "flex",
    padding: 10,
    borderRadius: 8,
  },
});

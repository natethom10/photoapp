import { useTheme } from "@react-navigation/native";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const LoginSuccess = () => {
  const { colors } = useTheme();
  return (
    <SafeAreaView>
      <Text style={{ color: colors.text }}>Login Success!</Text>
    </SafeAreaView>
  );
};

export default LoginSuccess;

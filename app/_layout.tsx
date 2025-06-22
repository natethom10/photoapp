import { ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import "react-native-reanimated";
import { useColorScheme } from "@/hooks/useColorScheme";
import { CustomDarkTheme, CustomLightTheme } from "../constants/theme";

const Layout = () => {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider
      value={colorScheme === "dark" ? CustomDarkTheme : CustomLightTheme}
    >
      <Stack
        screenOptions={{ headerShown: false, animation: "fade_from_bottom" }}
      />
    </ThemeProvider>
  );
};

export default Layout;

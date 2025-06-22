import {
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from "@react-navigation/native";

export const CustomLightTheme = {
  ...NavigationDefaultTheme,
  colors: {
    ...NavigationDefaultTheme.colors,
    background: "#fefefe",
    text: "#222222",
    primary: "#1e90ff",
    card: "#ffffff",
    border: "#dddddd",
  },
};

export const CustomDarkTheme = {
  ...NavigationDarkTheme,
  colors: {
    ...NavigationDarkTheme.colors,
    background: "#121212",
    text: "#f5f5f5",
    primary: "#bb86fc",
    card: "#1F1F1F",
    border: "#333333",
  },
};

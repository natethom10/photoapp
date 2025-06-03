import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  useColorScheme,
} from "react-native";

const CreateGroup = () => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";

  const textStyles = {
    color: isDarkMode ? "#E0E0E0" : "#333",
  };
  const containerStyles = {
    backgroundColor: isDarkMode ? "#121212" : "#f0f2f5",
  };

  return (
    <SafeAreaView style={[containerStyles, styles.screen]}>
      <Text style={[textStyles, styles.header]}>Create Group</Text>
    </SafeAreaView>
  );
};

export default CreateGroup;

const styles = StyleSheet.create({
  header: {
    fontSize: 26,
    fontWeight: "700",
    textAlign: "center",
  },
  screen: {
    flex: 1,
  },
});

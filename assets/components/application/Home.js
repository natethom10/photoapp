import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  useColorScheme,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
  FlatList,
} from "react-native";

import { signOutOfApp } from "../../../backend/loginVerify";

export default function Home({ navigation }) {
  const { width } = useWindowDimensions();
  const loginBoxWidth = width > 768 ? "40%" : "90%";

  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";

  const textStyles = {
    color: isDarkMode ? "#E0E0E0" : "#333",
  };
  const containerStyles = {
    backgroundColor: isDarkMode ? "#121212" : "#f0f2f5",
  };

  const data = [
    {
      groupName: "Trip to Hawaii",
      timeRemaining: "5 days, 4 hours, 12 minutes",
      numPhotos: 123,
      numVideos: 34,
    },
    {
      groupName: "Mark's Wedding",
      timeRemaining: "7 months, 13 hours, 48 minutes",
      numPhotos: 543,
      numVideos: 103,
    },
  ];

  const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <View>
          <Text style={textStyles}>{item.groupName}</Text>
          <Text style={textStyles}>{item.timeRemaining}</Text>
          <Text style={textStyles}>
            {item.numPhotos} photos, {item.numVideos} videos
          </Text>
        </View>
        <Text style={textStyles}>Add to Collection</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={[containerStyles, styles.screen]}>
      <View style={styles.headerContainer}>
        <View style={styles.placeholder} />
        <Text style={[styles.header, textStyles]}>Homepage</Text>
        <TouchableOpacity onPress={() => signOutOfApp()}>
          <Text style={textStyles}>Logout</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <TouchableOpacity style={styles.button}>
          <Text style={textStyles}>Create/Join Group</Text>
        </TouchableOpacity>
        <Text style={[textStyles, styles.subHeader]}>Active Groups</Text>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          style={styles.flatlistContainer}
        />
        <Text style={[textStyles, styles.subHeader]}>Past Groups</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 26,
    fontWeight: "700",
  },
  subHeader: {
    fontSize: 20,
    fontWeight: 500,
  },
  screen: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: "auto",
    alignItems: "center",
    marginHorizontal: 20,
  },
  placeholder: {
    width: 45,
  },
  body: {
    margin: 20,
  },
  button: {
    fontSize: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 15,
    marginBottom: 10,
  },
  item: {
    borderWidth: 1,
    borderColor: "white",
    marginVertical: 5,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 3,
  },
});

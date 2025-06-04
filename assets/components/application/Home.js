import {
  View,
  Text,
  StyleSheet,
  useColorScheme,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  ScrollView,
} from "react-native";

import { signOutOfApp } from "../../../backend/authentication/loginVerify";
import beach from "../../images/beach.jpg";
import wedding from "../../images/wedding.jpg";
import reunion from "../../images/reunion.jpg";
import birthday from "../../images/birthday.jpg";
import hiking from "../../images/hiking.jpg";

import Group from "../../reusable/Group";
import { AddToCollection } from "../../../backend/app/AddToCollectionScreen";

export default function Home({ navigation }) {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";

  const textStyles = {
    color: isDarkMode ? "#E0E0E0" : "#333",
  };
  const containerStyles = {
    backgroundColor: isDarkMode ? "#121212" : "#f0f2f5",
  };
  const buttonStyles = {
    borderColor: isDarkMode ? "#ccc" : "#444444",
    backgroundColor: isDarkMode ? "#1F1F1F" : "#fff",
    color: isDarkMode ? "#E0E0E0" : "black",
  };

  const data = [
    {
      id: "1",
      groupName: "Trip to Hawaii",
      timeRemaining: "5d, 4h, 12m",
      image: beach,
      icon: "plus-circle",
    },
    {
      id: "2",
      groupName: "Mark's Wedding",
      timeRemaining: "7m, 13h, 48m",
      image: wedding,
      icon: "camera"
    },
    {
      id: "3",
      groupName: "Family Reunion",
      timeRemaining: "2w, 1d",
      image: reunion,
      icon: "plus-square"
    },
    {
      id: "4",
      groupName: "Birthday Party",
      timeRemaining: "Tomorrow!",
      image: birthday,
      icon: "video-camera"
    },
    {
      id: "5",
      groupName: "Hiking Adventure",
      timeRemaining: "1m, 2d",
      image: hiking,
      icon: "upload"
    },
  ];

  const renderItem = ({ item }) => {
    return <Group item={item} AddToCollection={AddToCollection} />;
  };

  return (
    <SafeAreaView style={[containerStyles, styles.screen]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headerContainer}>
          <Text style={[styles.placeholder, textStyles]}>Profile</Text>
          <Text style={[styles.header, textStyles]}>Homepage</Text>
          <TouchableOpacity onPress={() => signOutOfApp()}>
            <Text style={textStyles}>Logout</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.body}>
          <TouchableOpacity
            style={[styles.button, buttonStyles]}
            onPress={() => navigation.navigate("CreateGroup")}
          >
            <Text style={[textStyles, { textAlign: "center" }]}>
              Create/Join Group
            </Text>
          </TouchableOpacity>
          <Text style={[textStyles, styles.subHeader]}>Active Groups</Text>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            style={styles.flatlistContainer}
            numColumns={2}
            scrollEnabled={false}
          />
          <Text style={[textStyles, styles.subHeader]}>Past Groups</Text>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            style={styles.flatlistContainer}
            numColumns={2}
            scrollEnabled={false}
          />
        </View>
      </ScrollView>
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
    borderRadius: 15,
    marginBottom: 10,
  },
  flatlistContainer: {
    marginVertical: 10,
  },
});

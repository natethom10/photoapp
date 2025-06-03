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
  Image,
  ScrollView,
} from "react-native";

import { signOutOfApp } from "../../../backend/loginVerify";
import beach from "../../images/beach.jpg";
import wedding from "../../images/wedding.jpg";
import reunion from "../../images/reunion.jpg";
import birthday from "../../images/birthday.jpg";
import hiking from "../../images/hiking.jpg";

import Group from "../../reusable/Group";

export default function Home({ navigation }) {
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
      id: "1",
      groupName: "Trip to Hawaii",
      timeRemaining: "5d, 4h, 12m",
      image: beach,
    },
    {
      id: "2",
      groupName: "Mark's Wedding",
      timeRemaining: "7m, 13h, 48m",
      image: wedding,
    },
    {
      id: "3",
      groupName: "Family Reunion",
      timeRemaining: "2w, 1d",
      image: reunion,
    },
    {
      id: "4",
      groupName: "Birthday Party",
      timeRemaining: "Tomorrow!",
      image: birthday,
    },
    {
      id: "5",
      groupName: "Hiking Adventure",
      timeRemaining: "1m, 2d",
      image: hiking,
    },
  ];

  const renderItem = ({ item }) => {
    return <Group item={item} />;
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
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("CreateGroup")}>
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
    borderColor: "white",
    borderRadius: 15,
    marginBottom: 10,
  },
  flatlistContainer: {
    marginVertical: 10,
  },
});

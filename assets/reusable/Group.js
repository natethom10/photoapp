import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  useColorScheme,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const Group = ({ item, AddToCollection }) => {
  const { width } = useWindowDimensions();
  const groupWidth = width > 768 ? "40%" : "47.5%";

  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";

  const textStyles = {
    color: isDarkMode ? "#E0E0E0" : "#333",
  };
  const containerStyles = {
    borderColor: isDarkMode ? "#ccc" : "#444444",
    backgroundColor: isDarkMode ? "#1F1F1F" : "#fff",
    color: isDarkMode ? "#E0E0E0" : "black",
  };

  return (
    <View style={[styles.item, { width: groupWidth }, containerStyles]}>
      <Image source={item.image} style={styles.itemImage} />
      <View style={styles.descriptionContainer}>
        <View>
          <Text style={textStyles}>{item.groupName}</Text>
          <Text style={textStyles}>{item.timeRemaining}</Text>
        </View>
        <TouchableOpacity onPress={() => AddToCollection(item)}>
          {/* <Text style={textStyles}>Add to Collection</Text> */}
          <FontAwesome name={item.icon} size={24} color={textStyles.color} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 3,
    margin: 5,
  },
  itemImage: {
    width: "100%",
    height: 100,
    borderRadius: 8,
    marginBottom: 10,
  },
  descriptionContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 1,
  },
});

export default Group;

import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  useColorScheme,
} from "react-native";

const Group = ({ item }) => {
  const { width } = useWindowDimensions();
  const groupWidth = width > 768 ? "40%" : "47.5%";

  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";

  const textStyles = {
    color: isDarkMode ? "#E0E0E0" : "#333",
  };
  const containerStyles = {
    backgroundColor: isDarkMode ? "#121212" : "#f0f2f5",
  };

  return (
    <View style={[styles.item, { width: groupWidth }]}>
      <Image source={item.image} style={styles.itemImage} />
      <View>
        <Text style={textStyles}>{item.groupName}</Text>
        <Text style={textStyles}>{item.timeRemaining}</Text>
      </View>
      <TouchableOpacity>
        <Text style={textStyles}>Add to Collection</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    borderWidth: 1,
    borderColor: "white",
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
});

export default Group;

import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  useColorScheme,
  useWindowDimensions,
  TouchableOpacity,
  Platform,
} from "react-native";

import CustomTextInput from "../../reusable/Input";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";

const CreateGroup = () => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";

  const { width } = useWindowDimensions();
  const inputWidth = width > 768 ? "30%" : "80%";

  const textStyles = {
    color: isDarkMode ? "#E0E0E0" : "#333",
  };
  const containerStyles = {
    backgroundColor: isDarkMode ? "#121212" : "#f0f2f5",
    borderColor: isDarkMode ? "#121212" : "#f0f2f5",
  };
  const inputStyles = {
    borderColor: isDarkMode ? "#ccc" : "#444444",
    backgroundColor: isDarkMode ? "#1F1F1F" : "#fff",
    color: isDarkMode ? "#E0E0E0" : "black",
    borderWidth: 1,
  };
  const buttonStyles = {
    backgroundColor: isDarkMode ? "#1F1F1F" : "#fff",
    color: isDarkMode ? "#E0E0E0" : "black",
  };
  const placeholderColor = isDarkMode ? "#BBBBBB" : "#333";

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [openingDate, setOpeningDate] = useState(new Date());

  const handleDateSubmit = (event, selectedDate) => {
    setOpeningDate(selectedDate);
  };

  return (
    <SafeAreaView style={[containerStyles, styles.screen]}>
      <Text style={[textStyles, styles.header]}>Create Group</Text>
      <View style={styles.container}>
        <CustomTextInput
          inputWidth={inputWidth}
          placeholder="Name"
          placeholderColor={placeholderColor}
          passedStyles={[inputStyles]}
          value={name}
          onChangeText={setName}
          secureTextEntry={false}
          autoCapitalize="words"
        />
        <CustomTextInput
          inputWidth={inputWidth}
          placeholder="Description (optional)"
          placeholderColor={placeholderColor}
          passedStyles={[inputStyles, { textAlignVertical: "top" }]}
          value={description}
          onChangeText={setDescription}
          secureTextEntry={false}
          height={100}
          multiline
          autoCapitalize="sentences"
          autoCorrect={true}
          autoComplete="on"
        />
        <Text style={[textStyles, styles.subHeader]}>Unlock Date</Text>
        <DateTimePicker
          value={openingDate}
          mode="datetime"
          minimumDate={new Date()}
          display="default"
          onChange={handleDateSubmit}
        />
        <Text style={[textStyles, styles.subHeader]}>Group Photo</Text>
        <TouchableOpacity style={[styles.button, buttonStyles]}>
          <Text style={textStyles}>Select Media</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.submitContainer}>
        <TouchableOpacity style={[styles.button, buttonStyles]}>
          <Text style={textStyles}>Create Group</Text>
        </TouchableOpacity>
        <Text style={styles.warningText}>
          All info cannot be changed after the group is created.
        </Text>
      </View>
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
  subHeader: {
    fontSize: 20,
    fontWeight: 500,
  },
  screen: {
    flex: 1,
  },
  input: {
    height: 100,
  },
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 25,
    gap: 10,
  },
  warningText: {
    fontSize: 13,
    color: "red",
    textAlign: "center",
    marginHorizontal: "10%",
  },
  descriptionInput: {
    width: "80%",
    height: 100,
    paddingTop: Platform.OS === "ios" ? 10 : 8,
    paddingBottom: Platform.OS === "ios" ? 10 : 8,
    borderRadius: 8,
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    padding: 10,
    borderRadius: 5,
  },
  submitContainer: {
    width: '100%',
    alignItems: 'center',
    gap: 5
  }
});

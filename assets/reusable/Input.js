import { TextInput, StyleSheet } from "react-native";

const CustomTextInput = ({
  inputWidth,
  placeholder,
  placeholderColor,
  autoCapitalize = "none",
  autoCorrect = false,
  autoComplete = "off",
  passedStyles,
  value,
  onChangeText,
  secureTextEntry = false,
  spellCheck = false,
  ...restProps
}) => {
  return (
    <TextInput
      style={[styles.input, { width: inputWidth }, passedStyles]}
      placeholder={placeholder}
      placeholderTextColor={placeholderColor}
      autoCapitalize={autoCapitalize}
      autoCorrect={autoCorrect}
      value={value}
      onChangeText={onChangeText}
      autoComplete={autoComplete}
      spellCheck={spellCheck}
      secureTextEntry={secureTextEntry}
      {...restProps}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    paddingHorizontal: 15,
    borderRadius: 10,
    padding: 10
  },
});

export default CustomTextInput;

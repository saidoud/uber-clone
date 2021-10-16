import React from "react";
import { StyleSheet, TextInput } from "react-native";
import colors from "../../configs/colors";

function InputApp({ children, style, ...otherProps }) {
  return <TextInput style={[styles.container, style]} {...otherProps} />;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.grey,
    padding: 10,
    marginVertical: 5,
  },
});
export default InputApp;

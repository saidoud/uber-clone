import React from "react";
import { Platform, StyleSheet, Text } from "react-native";
import colors from "../../configs/colors";

function TextApp({ children, style, ...otheProps }) {
  return (
    <Text style={[styles.text, style]} {...otheProps}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    color: colors.black,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});

export default TextApp;

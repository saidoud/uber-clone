import React from "react";
import { StyleSheet, Text } from "react-native";

function TextApp({ children, style, ...otheProps }) {
  return (
    <Text style={[styles.text, style]} {...otheProps}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    color: color.black,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});

export default TextApp;

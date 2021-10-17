import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import colors from "../../configs/colors";
import TextApp from "./TextApp";

function ButtonApp({ children, onSubmit, style }) {
  return (
    <Pressable onPress={onSubmit} style={[styles.container, style]}>
      <TextApp style={styles.text}>{children}</TextApp>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    padding: 10,
    margin: 10,
    alignItems: "center",
  },
  text: {
    color: colors.white,
    fontWeight: "bold",
  },
});

export default ButtonApp;

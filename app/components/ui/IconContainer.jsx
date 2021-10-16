import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../../configs/colors";

function IconContainer({ Icon, bgColor }) {
  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <Icon />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    borderRadius: 20,
  },
});

export default IconContainer;

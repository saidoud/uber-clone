import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../../configs/colors";
import TextApp from "../ui/TextApp";

function HomeMap() {
  return (
    <View style={styles.container}>
      <TextApp>Here Uber Map</TextApp>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 250,
    backgroundColor: colors.purple,
  },
});

export default HomeMap;

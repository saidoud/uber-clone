import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import Screen from "../../components/ui/Screen";
import HomeMap from "../../components/Map/HomeMap";
import UberType from "../../components/UberType";

function SearchResult() {
  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.mapContainer}>
          <HomeMap />
        </View>
        <View style={styles.typeContainer}>
          <UberType />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "space-between",
  },
  mapContainer: {
    height: Dimensions.get("window").height - 400,
  },
  typeContainer: {
    height: 400,
  },
});

export default SearchResult;

import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import Screen from "../../components/ui/Screen";
import UberType from "../../components/UberType";
import RouteMap from "../../components/Map/RouteMap";

function SearchResult() {
  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.mapContainer}>
          <RouteMap />
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

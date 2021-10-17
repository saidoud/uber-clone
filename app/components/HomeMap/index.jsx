import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../../configs/colors";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

function HomeMap() {
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      ></MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.purple,
  },
  map: {
    height: "100%",
    width: "100%",
  },
});

export default HomeMap;

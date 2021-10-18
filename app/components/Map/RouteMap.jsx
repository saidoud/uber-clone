import React from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";

import API from "../../configs/api";
import colors from "../../configs/colors";

function RouteMap() {
  const origin = {
    latitude: 47.406969,
    longitude: 8.456234,
  };
  const destination = {
    latitude: 47.401783,
    longitude: 8.47082,
  };
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: 47.406969,
          longitude: 8.456234,
          latitudeDelta: 0.0222,
          longitudeDelta: 0.0121,
        }}
      >
        <MapViewDirections
          origin={origin}
          destination={destination}
          apikey={API.API_KEY}
          strokeWidth={4}
          strokeColor={colors.black}
        />
        <Marker coordinate={origin} title={"Origin"} />
        <Marker coordinate={destination} title="Destination" />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  map: {
    height: "100%",
    width: "100%",
  },
});

export default RouteMap;

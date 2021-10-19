import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../../configs/colors";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import MarkerMap from "./MarkerMap";
import cars from "../../assets/data/cars";

function HomeMap() {
  const getImage = (type) => {
    if (type === "UberX") {
      return require("../../assets/top-UberX.png");
    }
    if (type === "Comfort") {
      return require("../../assets/top-Comfort.png");
    }
    return require("../../assets/top-UberXL.png");
  };

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        showUserLocation={true}
        style={styles.map}
        region={{
          latitude: 28.450627,
          longitude: -16.263045,
          latitudeDelta: 0.0222,
          longitudeDelta: 0.0121,
        }}
      >
        {cars.map((item) => (
          <MarkerMap
            key={item.id}
            coordinate={{
              latitude: item.latitude,
              longitude: item.longitude,
            }}
            image={getImage(item.type)}
            heading={item.heading}
          />
        ))}
      </MapView>
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
  markerImage: {
    height: 50,
    width: 50,
    resizeMode: "contain",
  },
});

export default HomeMap;

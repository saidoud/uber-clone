import React from "react";
import { Image, StyleSheet } from "react-native";
import { Marker } from "react-native-maps";

function MarkerMap({ coordinate, image, title }) {
  return (
    <Marker coordinate={coordinate} title={title}>
      <Image style={styles.markerImage} source={image} />
    </Marker>
  );
}

const styles = StyleSheet.create({
  markerImage: {
    height: 50,
    width: 50,
    resizeMode: "contain",
  },
});

export default MarkerMap;

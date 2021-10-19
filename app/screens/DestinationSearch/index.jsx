import React, { useState } from "react";
import { View } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

import Screen from "../../components/ui/Screen";
import styles from "./styles";
import API from "../../configs/api";
import PlaceItem from "../../components/list/PlaceItem";
import useLocation from "../../hooks/useLocation";

const homePlace = {
  description: "Home",
  geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
};
const workPlace = {
  description: "Work",
  geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
};

function DestinationSearch() {
  const [fromLocation, setFromLocation] = useState("");
  const [destination, setDestination] = useState("");
  const loacation = useLocation();
  console.log("location");
  console.log(loacation);

  return (
    <Screen>
      <View style={styles.container}>
        <GooglePlacesAutocomplete
          placeholder="Search"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
          }}
          query={{
            key: "API.API_KEY",
            language: "en",
            components: "country:ma",
          }}
          suppressDefaultStyles
          styles={{
            textInput: styles.textInput,
            container: styles.autocompleteContainer,
            listView: styles.listView,
            separator: styles.separator,
          }}
          renderRow={(data) => <PlaceItem data={data} />}
          renderDescription={(data) => data.description || data.vicinity}
          enablePoweredByContainer={false}
          currentLocation={true}
          currentLocationLabel="Current location"
          predefinedPlaces={[homePlace, workPlace]}
        />
        <GooglePlacesAutocomplete
          placeholder="Where To ?"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
          }}
          onFail={(error) => console.log(error)}
          query={{
            key: "API.API_KEY",
            language: "en",
            components: "country:ma",
          }}
          suppressDefaultStyles
          styles={{
            textInput: styles.textInput,
            container: {
              ...styles.autocompleteContainer,
              top: 55,
            },
            separator: styles.separator,
          }}
          renderRow={(data) => <PlaceItem data={data} />}
        />
        {/* Circle near Origin input */}
        <View style={styles.circle} />

        {/* Line between dots */}
        <View style={styles.line} />

        {/* Square near Destination input */}
        <View style={styles.square} />
      </View>
    </Screen>
  );
}

export default DestinationSearch;

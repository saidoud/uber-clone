import React, { useState } from "react";
import { View } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

import Screen from "../../components/ui/Screen";
import styles from "./styles";
import API from "../../configs/api";
import PlaceItem from "../../components/list/PlaceItem";

function DestinationSearch() {
  const [fromLocation, setFromLocation] = useState("");
  const [destination, setDestination] = useState("");

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
            key: API.API_KEY,
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
          enablePoweredByContainer={false}
        />
        <GooglePlacesAutocomplete
          placeholder="Where To ?"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
          }}
          onFail={(error) => console.log(error)}
          query={{
            key: API.API_KEY,
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
          enablePoweredByContainer={false}
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

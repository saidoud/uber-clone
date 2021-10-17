import React, { useState } from "react";
import { View } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

import InputApp from "../../components/ui/InputApp";
import Screen from "../../components/ui/Screen";
import styles from "./styles";

function DestinationSearch() {
  const [fromLocation, setFromLocation] = useState("");
  const [destination, setDestination] = useState("");
  return (
    <Screen>
      <View style={styles.container}>
        <InputApp
          placeholder="From"
          value={fromLocation}
          onChangeText={setFromLocation}
        />
        <InputApp
          placeholder="Whare to ?"
          value={destination}
          onChangeText={setDestination}
        />
        <GooglePlacesAutocomplete
          placeholder="Search"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
          }}
          query={{
            key: "KEY",
            language: "en",
          }}
        />
      </View>
    </Screen>
  );
}

export default DestinationSearch;

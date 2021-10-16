import React, { useState } from "react";
import { View } from "react-native";
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
          onChangeText={(text) => setFromLocation(text)}
        />
        <InputApp
          placeholder="Whare to ?"
          value={destination}
          onChangeText={setDestination}
        />
      </View>
    </Screen>
  );
}

export default DestinationSearch;

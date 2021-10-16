import React from "react";
import { View } from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

import TextApp from "../ui/TextApp";
import styles from "./styles";

function Search() {
  return (
    <View style={styles.container}>
      {/* Input Box */}
      <View style={styles.viewBox}>
        <TextApp style={styles.textBox}>Where To ?</TextApp>
        <View style={styles.box}>
          <AntDesign name="clockcircle" size={16} />
          <TextApp>Now</TextApp>
          <MaterialIcons name="keyboard-arrow-down" size={16} />
        </View>
      </View>

      {/* Previous Destination */}
      <View style={styles.previousDestination}></View>

      {/* Home Destination */}
      <View style={styles.homeDestination}></View>
    </View>
  );
}

export default Search;

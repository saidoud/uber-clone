import React from "react";
import { View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { AntDesign, MaterialIcons, Entypo } from "@expo/vector-icons";

import TextApp from "../ui/TextApp";
import styles from "./styles";
import IconContainer from "../ui/IconContainer";
import colors from "../../configs/colors";

function Search() {
  const navigation = useNavigation();

  const handleSearch = () => {
    navigation.navigate("DestinationSearch");
  };

  return (
    <View style={styles.container}>
      {/* Input Box */}
      <TouchableOpacity
        style={styles.viewBox}
        onPress={handleSearch}
        activeOpacity={0.7}
      >
        <TextApp style={styles.textBox}>Where To ?</TextApp>
        <View style={styles.box}>
          <AntDesign name="clockcircle" size={16} />
          <TextApp>Now</TextApp>
          <MaterialIcons name="keyboard-arrow-down" size={16} />
        </View>
      </TouchableOpacity>

      {/* Previous Destination */}
      <View style={styles.rowDestination}>
        <IconContainer
          Icon={() => (
            <AntDesign name="clockcircle" size={20} color={colors.white} />
          )}
          bgColor={colors.darkGrey}
        />
        <TextApp style={styles.textDestination}>Spin Nightclub</TextApp>
      </View>

      {/* Home Destination */}
      <View style={styles.rowDestination}>
        <IconContainer
          Icon={() => <Entypo name="home" size={20} color={colors.white} />}
          bgColor={colors.primary}
        />
        <TextApp style={styles.textDestination}>Spin Nightclub</TextApp>
      </View>
    </View>
  );
}

export default Search;

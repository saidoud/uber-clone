import React from "react";
import { StyleSheet, View } from "react-native";
import { Entypo } from "@expo/vector-icons";

import TextApp from "../ui/TextApp";
import IconContainer from "../ui/IconContainer";
import colors from "../../configs/colors";

function PlaceItem({ data }) {
  const getIcon = (description) => {
    if (description === "Home")
      return <Entypo name="home" siz={24} color={colors.white} />;
    if (description === "Work")
      return <Entypo name="suitcase" size={14} color={colors.white} />;
    return <Entypo name="location-pin" siz={24} color={colors.white} />;
  };
  return (
    <View style={styles.container}>
      <IconContainer
        bgColor={
          data.description === "Home" || data.description === "Work"
            ? colors.primary
            : colors.darkGrey
        }
        Icon={() => getIcon(data.description)}
      />
      <TextApp style={styles.text}>{data.description || data.vicinity}</TextApp>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  text: {
    marginLeft: 15,
  },
});

export default PlaceItem;

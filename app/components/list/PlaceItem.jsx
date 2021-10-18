import React from "react";
import { StyleSheet, View } from "react-native";
import { Entypo } from "@expo/vector-icons";

import TextApp from "../ui/TextApp";
import IconContainer from "../ui/IconContainer";
import colors from "../../configs/colors";

function PlaceItem({ data }) {
  return (
    <View style={styles.container}>
      <IconContainer
        bgColor={colors.darkGrey}
        Icon={() =>
          data.description === "Home" ? (
            <Entypo name="home" siz={20} color={colors.white} />
          ) : (
            <Entypo name="location-pin" siz={20} color={colors.white} />
          )
        }
      />
      <TextApp style={styles.text}>{data.description}</TextApp>
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

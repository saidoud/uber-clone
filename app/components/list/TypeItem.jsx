import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import TextApp from "../ui/TextApp";
import colors from "../../configs/colors";

function TypeItem({ image, type, price }) {
  const getImage = () => {
    if (type === "UberX") {
      return require("../../assets/UberX.jpeg");
    }
    if (type === "Comfort") {
      return require("../../assets/Comfort.jpeg");
    }
    return require("../../assets/UberXL.jpeg");
  };

  return (
    <View style={styles.container}>
      {/* Image View */}
      <Image source={getImage()} style={styles.image} />
      {/* Detail View */}
      <View style={styles.detailContainer}>
        <TextApp style={styles.type}>
          {type}
          <Ionicons name="person" size={13} color="black">
            <TextApp> 3</TextApp>
          </Ionicons>
        </TextApp>
        <TextApp style={styles.detailTime}>8:03PM drop off</TextApp>
      </View>
      {/* Price View */}
      <View style={styles.priceContainer}>
        <Ionicons name="pricetag" size={18} color={colors.secondary} />
        <TextApp style={styles.price}>est. ${price}</TextApp>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
  },

  // Image View
  image: {
    height: 70,
    width: 80,
    resizeMode: "contain",
  },

  //   Detail View
  detailContainer: {
    flex: 1,
    marginHorizontal: 10,
  },
  type: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 5,
  },
  detailTime: {
    color: colors.darkGrey,
  },

  // Price View
  priceContainer: {
    width: 100,
    justifyContent: "flex-end",
    flexDirection: "row",
    alignItems: "center",
  },
  price: {
    fontWeight: "600",
    fontSize: 18,
    marginLeft: 5,
  },
});

export default TypeItem;

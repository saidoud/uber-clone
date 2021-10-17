import React from "react";
import { View } from "react-native";
import TypeItem from "../list/TypeItem";
import styles from "./styles";

import typeData from "../../assets/data/types";
import ButtonApp from "../ui/ButtonApp";

function UberType() {
  return (
    <View style={styles.container}>
      {typeData.map((item, index) => (
        <TypeItem
          key={index}
          image={require("../../assets/UberX.jpeg")}
          type={item.type}
          price={item.price}
        />
      ))}
      <ButtonApp onSubmit={() => console.log("Clicked")}>
        Confirm Uber
      </ButtonApp>
    </View>
  );
}

export default UberType;

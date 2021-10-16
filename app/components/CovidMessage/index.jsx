import React from "react";
import { View } from "react-native";

import TextApp from "../ui/TextApp";
import styles from "./styles";

function CovidMessage({ title, subTitle }) {
  return (
    <View style={styles.container}>
      <TextApp style={styles.title}>{title}</TextApp>
      <TextApp style={styles.subTitle}>{subTitle}</TextApp>
      <TextApp style={styles.more}>Learn More</TextApp>
    </View>
  );
}

export default CovidMessage;

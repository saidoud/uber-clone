import React from "react";
import Screen from "../../components/ui/Screen";
import HomeMap from "../../components/Map/HomeMap";
import { Dimensions, StyleSheet, View } from "react-native";
import CovidMessage from "../../components/CovidMessage";
import Search from "../../components/Search";

function Home() {
  return (
    <View>
      <View style={styles.mapContainer}>
        <HomeMap />
      </View>
      <CovidMessage title={TITLE} subTitle={SUBTITLE} />
      {/* Bottom Components */}
      <Search />
    </View>
  );
}

const styles = StyleSheet.create({
  mapContainer: {
    height: Dimensions.get("window").height - 400,
  },
});

const TITLE = "Travel only if necessary";
const SUBTITLE =
  "The virus can be spread when small liquid particles are expelled through the mouth or nose when an infected person coughs, sneezes, sings or breathes.";
export default Home;

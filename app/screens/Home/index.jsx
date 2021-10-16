import React from "react";
import Screen from "../../components/ui/Screen";
import HomeMap from "../../components/HomeMap";
import { StyleSheet } from "react-native";
import CovidMessage from "../../components/CovidMessage";
import Search from "../../components/Search";

function Home() {
  return (
    <Screen>
      <HomeMap />
      <CovidMessage title={TITLE} subTitle={SUBTITLE} />
      {/* Bottom Components */}
      <Search />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
});

const TITLE = "Travel only if necessary";
const SUBTITLE =
  "The virus can be spread when small liquid particles are expelled through the mouth or nose when an infected person coughs, sneezes, sings or breathes.";
export default Home;

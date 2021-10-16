import { StyleSheet } from "react-native";
import colors from "../../configs/colors";

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
    backgroundColor: colors.grey,
  },
  // Input Box View
  viewBox: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  box: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 100,
    backgroundColor: colors.white,
    padding: 10,
    borderRadius: 10,
  },
  textBox: {
    fontSize: 20,
    fontWeight: "500",
  },

  // Previous Destination View
  previousDestination: {},

  // Home Destination View
  homeDestination: {},
});

export default styles;

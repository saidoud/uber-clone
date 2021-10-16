import { StyleSheet } from "react-native";
import colors from "../../configs/colors";

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  // Input Box View
  viewBox: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: colors.grey,
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
    fontSize: 18,
    fontWeight: "500",
  },

  // Previous Destination View
  rowDestination: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.grey,
  },
  textDestination: {
    fontSize: 16,
    fontWeight: "500",
    marginLeft: 10,
  },

  // Home Destination View
  homeDestination: {},
});

export default styles;

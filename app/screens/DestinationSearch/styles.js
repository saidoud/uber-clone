import { StyleSheet } from "react-native";
import colors from "../../configs/colors";

const styles = StyleSheet.create({
  container: {
    padding: 10,
    height: "100%",
  },
  textInput: {
    padding: 10,
    backgroundColor: colors.grey,
    marginVertical: 5,
    marginLeft: 20,
  },
  autocompleteContainer: {
    position: "absolute",
    top: 0,
    left: 10,
    right: 10,
  },
  separator: {
    backgroundColor: "#efefef",
    height: 1,
  },
  listView: {
    position: "absolute",
    top: 105,
  },
  circle: {
    width: 5,
    height: 5,
    backgroundColor: colors.black,
    position: "absolute",
    top: 20,
    left: 15,
    borderRadius: 5,
  },
  line: {
    width: 1,
    height: 50,
    backgroundColor: colors.darkGrey,
    position: "absolute",
    top: 28,
    left: 17,
  },
  square: {
    width: 5,
    height: 5,
    backgroundColor: colors.black,
    position: "absolute",
    top: 80,
    left: 15,
  },
});

export default styles;

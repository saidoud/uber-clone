import { StyleSheet } from "react-native";
import colors from "../../configs/colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    padding: 15,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    color: colors.white,
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subTitle: {
    color: colors.grey,
    fontSize: 15,
    marginBottom: 10,
  },
  more: {
    color: colors.white,
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default styles;

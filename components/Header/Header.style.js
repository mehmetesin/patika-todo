import { StyleSheet } from "react-native";
import COLORS from "../../const/Color.var";

export default StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
    alignItems: "center",
  },
  title: {
    color: COLORS.title,
    fontSize: 40,
    fontWeight: 700,
  },
  remove: {
    padding: 5,
    borderRadius: 20,
    borderColor: COLORS.buttonClear,
    borderWidth: 1,
  },
});

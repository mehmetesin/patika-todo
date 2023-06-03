import { StyleSheet } from "react-native";
import COLORS from "../../const/Color.var";

export default StyleSheet.create({
  addContainer: {
    backgroundColor: COLORS.panelBg,
    borderRadius: 15,
    padding: 15,
    marginTop: 5,
  },
  addText: {
    fontSize: 18,
    borderBottomWidth: 1,
    color: COLORS.todoFg,
    borderBottomColor: COLORS.inputBorder,
    paddingVertical: 5,
  },
  addButton: {
    backgroundColor: COLORS.butonBg,
    padding: 10,
    borderRadius: 10,
    margin: 10,
  },
  addActiveButton: {
    backgroundColor: COLORS.butonActiveBg,
    padding: 10,
    borderRadius: 10,
    margin: 10,
  },
  text: {
    color: COLORS.todoFg,
    fontSize: 18,
    textAlign: "center",
  },
});

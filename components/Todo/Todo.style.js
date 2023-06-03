import { StyleSheet } from "react-native";
import COLORS from "../../const/Color.var";

export default StyleSheet.create({
  todoContainer: {
    flex: 1,
  },
  todo: {
    fontSize: 18,
    fontWeight: "300",
    color: COLORS.todoFg,
    backgroundColor: COLORS.todoBg,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginVertical: 5,
    borderRadius: 8,
  },
  todoDone: {
    fontSize: 18,
    fontWeight: "300",
    textDecorationLine: "line-through",
    color: COLORS.inputHint,
    backgroundColor: COLORS.panelBg,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginVertical: 5,
    borderRadius: 8,
  },
});

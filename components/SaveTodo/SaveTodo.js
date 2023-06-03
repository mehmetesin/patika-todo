import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./SaveTodo.style";
import TEXT from "../../const/Text.var";
import COLORS from "../../const/Color.var";

const Footer = ({ todo, setTodo, handleAddTodo }) => {
  return (
    <View style={styles.addContainer}>
      <TextInput
        style={styles.addText}
        placeholder={TEXT.addPlaceHolder}
        placeholderTextColor={COLORS.inputHint}
        onChangeText={setTodo}
        value={todo}
      />
      <TouchableOpacity
        style={todo.length > 0 ? styles.addActiveButton : styles.addButton}
        onPress={handleAddTodo}
      >
        <Text style={styles.text}>{TEXT.addButton}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;

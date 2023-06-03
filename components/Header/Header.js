import { View, Text, TouchableOpacity } from "react-native";
import styles from "./Header.style";
import COLORS from "../../const/Color.var";
import TEXT from "../../const/Text.var";

const Header = ({ todoCount, handleRemoveAll }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{TEXT.title}</Text>
      <View style={styles.header}>
        <Text style={styles.title}>
          {todoCount}
          {"  "}
          <TouchableOpacity style={styles.remove} onPress={handleRemoveAll}>
            <Text style={{ color: COLORS.buttonClear }}>SİL</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
};

export default Header;

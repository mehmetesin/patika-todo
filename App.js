import { SafeAreaView, StyleSheet } from "react-native";

import COLORS from "./const/Color.var";
import Todo from "./components/Todo/Todo";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Todo />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.appBg,
    padding: 5,
  },
});

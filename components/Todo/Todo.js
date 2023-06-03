import styles from "./Todo.style";

import Header from "../../components/Header";
import SaveTodo from "../../components/SaveTodo";
import { useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    setTodos([...todos, { todo, isDone: false }]);
    setTodo("");
  };

  const handleRemoveAll = () => {
    setTodos([]);
  };

  const handleRemoveTodo = (todo) => {
    setTodos(todos.filter((t) => t.todo != todo.todo));
  };

  const handleTodoDone = (todo) => {
    const tmp = todos.map((t) => {
      if (t.todo == todo.todo) {
        t.isDone = !t.isDone;
      }
      return t;
    });

    setTodos(tmp);
  };

  const todosRender = ({ item, idx }) => {
    return (
      <TouchableOpacity
        key={idx}
        onLongPress={() => handleRemoveTodo(item)}
        onPress={() => handleTodoDone(item)}
      >
        <Text style={item.isDone ? styles.todoDone : styles.todo}>
          {item.todo}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <View style={styles.todoContainer}>
        <Header handleRemoveAll={handleRemoveAll} todoCount={todos.length} />
        <FlatList
          data={todos}
          renderItem={todosRender}
          keyExtractor={(item, idx) => idx.toString()}
        />
      </View>
      <SaveTodo
        todo={todo}
        setTodo={setTodo}
        todoCount={todos.length}
        handleAddTodo={handleAddTodo}
      />
    </>
  );
};

export default Todo;

import { ScrollView, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { s } from "./App.style";
import { Header } from "./components/Header/Header";
import { CardTodo } from "./components/CardTodo/CardTodo";
import { useState } from "react";

export default function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "Learn React Native", isCompleted: true },
    { id: 2, title: "Learn React Native", isCompleted: false },
    { id: 3, title: "Learn React Native", isCompleted: true },
    { id: 4, title: "Learn React Native", isCompleted: true },
    { id: 5, title: "Learn React Native", isCompleted: true },
    { id: 6, title: "Learn React Native", isCompleted: false },
    { id: 7, title: "Learn React Native", isCompleted: true },
    { id: 8, title: "Learn React Native", isCompleted: true },
  ]);

  function updateTodo(todo) {
    const updatedTodo = { ...todo, isCompleted: !todo.isCompleted };
    const indexToUpdate = todoList.findIndex(
      (todo) => todo.id === updatedTodo.id
    );
    const updatedTodoList = [...todoList];
    updatedTodoList[indexToUpdate] = updatedTodo;
    setTodoList(updatedTodoList);
    console.log(todo);
  }

  function renderTodoList() {
    return todoList.map((todo) => (
      <View style={s.cardItem} key={todo.id}>
        <CardTodo onPress={updateTodo} todo={todo} />
      </View>
    ));
  }
  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={s.app}>
          <View style={s.header}>
            <Header />
          </View>
          <View style={s.body}>
            <ScrollView>{renderTodoList()}</ScrollView>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
      <View style={s.footer}>
        <Text>Footer</Text>
      </View>
    </>
  );
}

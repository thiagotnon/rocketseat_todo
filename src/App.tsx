import { ChangeEvent, useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import {
  Counter,
  Header,
  NoTodoList,
  RegisterBar,
  TodoList,
} from "./components";

import styles from "./App.module.css";
import { Todo } from "./components/TodoList";

function App() {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [totalCompleted, setTotalCompleted] = useState(0);
  const [todoText, setTodoText] = useState("");

  const handleAddTodo = () => {
    setTodoList([
      ...todoList,
      { id: uuid(), title: todoText, isCompleted: false },
    ]);
    setTodoText("");
  };

  const handleTodoInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTodoText(event.target.value);
  };

  const handleDeleteTodo = (id: string) => {
    const newTodoList = todoList.filter((todoItem) => todoItem.id !== id);
    const totalCompletedTodos: number = newTodoList.reduce(
      (accumulator: number, current: Todo) => {
        if (current.isCompleted === true) {
          accumulator += 1;
        }
        return accumulator;
      },
      0
    );
    setTotalCompleted(totalCompletedTodos);
    setTodoList(newTodoList);
  };

  const handleCompleteTodo = (event: ChangeEvent<HTMLInputElement>) => {
    const updatedTodoList = todoList.map((todoItem) => {
      if (todoItem.id === event.target.id) {
        return {
          ...todoItem,
          isCompleted: !todoItem.isCompleted,
        };
      } else {
        return todoItem;
      }
    });

    const totalCompletedTodos: number = updatedTodoList.reduce(
      (accumulator: number, current: Todo) => {
        if (current.isCompleted === true) {
          accumulator += 1;
        }
        return accumulator;
      },
      0
    );
    setTotalCompleted(totalCompletedTodos);
    setTodoList(updatedTodoList);
  };

  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <RegisterBar
          placeholder="Adicione uma nova tarefa"
          onClick={handleAddTodo}
          onChange={handleTodoInputChange}
          todoText={todoText}
        />
        <Counter total={todoList.length} totalCompleted={totalCompleted} />

        {todoList.length === 0 ? (
          <NoTodoList />
        ) : (
          <TodoList
            todoList={todoList}
            handleDeleteTodo={handleDeleteTodo}
            handleCompleteTodo={handleCompleteTodo}
          />
        )}
      </main>
    </>
  );
}

export default App;

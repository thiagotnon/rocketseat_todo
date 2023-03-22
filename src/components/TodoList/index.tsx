import { ChangeEvent } from "react";
import { Card } from "../Card";

export interface Todo {
  id: string;
  title: string;
  isCompleted: boolean;
}
interface TodoListProps {
  todoList: Todo[];
  handleDeleteTodo: (id: string) => void;
  handleCompleteTodo: (event: ChangeEvent<HTMLInputElement>) => void;
}
export const TodoList = ({
  todoList,
  handleDeleteTodo,
  handleCompleteTodo,
}: TodoListProps) => {
  return (
    <>
      {todoList?.map((todoItem) => (
        <Card
          key={todoItem?.id}
          id={todoItem?.id}
          title={todoItem?.title}
          onClick={() => handleDeleteTodo(todoItem.id)}
          onChange={handleCompleteTodo}
          isCompleted={todoItem?.isCompleted}
        />
      ))}
    </>
  );
};

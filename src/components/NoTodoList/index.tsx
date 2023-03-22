import { ClipboardText } from "phosphor-react";
import styles from "./NoTodoList.module.css";
export const NoTodoList = () => {
  return (
    <div className={styles.noTodoList}>
      <ClipboardText size={56} />
      <p>
        <strong> Você ainda não tem tarefas cadastradas</strong>
      </p>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
};

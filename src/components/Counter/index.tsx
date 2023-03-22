import styles from "./Counter.module.css";
interface CounterProps {
  total: number;
  totalCompleted: number;
}
export const Counter = ({ total, totalCompleted }: CounterProps) => {
  return (
    <div className={styles.counter}>
      <div className={styles.total}>
        Tarefas criadas <span>{total}</span>
      </div>
      <div className={styles.difference}>
        Concluídas{" "}
        <span>
          {totalCompleted} de {total}
        </span>
      </div>
    </div>
  );
};

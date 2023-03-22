import { ChangeEvent } from "react";
import { Trash } from "phosphor-react";
import styles from "./Card.module.css";

interface CardProps {
  id: string;
  title: string;
  isCompleted: boolean;
  onClick: () => void;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
export const Card = ({
  id,
  title,
  isCompleted,
  onChange,
  onClick,
}: CardProps) => {
  return (
    <article className={styles.card}>
      <div className={styles.formGroup}>
        <label>
          <span className={isCompleted ? styles.active : ""}>{title}</span>

          <input type="checkbox" id={id} onChange={onChange} />
          <span className={styles.checkmark} />
        </label>
      </div>
      <button onClick={onClick}>
        <Trash size={20} />
      </button>
    </article>
  );
};

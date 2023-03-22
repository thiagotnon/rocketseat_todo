import { ChangeEvent } from "react";
import { Button, Input } from "../";
import styles from "./RegisterBar.module.css";

interface RegisterBarProps {
  placeholder: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
  todoText: string;
}
export const RegisterBar = ({
  placeholder,
  onChange,
  onClick,
  todoText,
}: RegisterBarProps) => {
  return (
    <div className={styles.registerBar}>
      <Input placeholder={placeholder} onChange={onChange} value={todoText} />
      <Button
        label="Criar"
        onClick={onClick}
        disabled={todoText.length === 0}
      />
    </div>
  );
};

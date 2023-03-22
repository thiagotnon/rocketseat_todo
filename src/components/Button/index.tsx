import { ButtonHTMLAttributes } from "react";
import { PlusCircle } from "phosphor-react";
import styles from "./Button.module.css";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  onClick: () => void;
}
export const Button = ({ label, onClick, disabled }: ButtonProps) => {
  return (
    <button className={styles.button} onClick={onClick} disabled={disabled}>
      {label} <PlusCircle size={24} />
    </button>
  );
};

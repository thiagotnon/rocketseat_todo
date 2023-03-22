import todoLogo from "../../assets/todo_logo.svg";
import styles from "./Header.module.css";
export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={todoLogo} alt="Logo TODO" />
    </header>
  );
};

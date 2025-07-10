import styles from "./layout1.module.css";

export const Layout = ({ children }) => {

  return (
    <div className={styles.layout} >
      {children}
    </div>
  );
};

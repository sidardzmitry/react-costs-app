import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={`${"container"} ${styles["app__header"]}`}>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark customs__header">
        <div className="container-md">
          <h1 className={styles["app__title"]}>Costs App</h1>
        </div>
      </nav>
    </div>
  );
};

export default Header;

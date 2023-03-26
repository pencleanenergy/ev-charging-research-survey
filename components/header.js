import styles from "./Header.module.css";

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.navbar}>
          <h3>Survey Concept</h3>
          <nav>
            <a aria-current="page" href="#" className={styles.link}>
              Survey
            </a>
            <a href="#" className={styles.link}>
              About
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}

import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <p>
          Proof of concept for PCE electrical vehicle charging program by Aaron Bushnell.
        </p>
      </footer>
    </>
  );
}

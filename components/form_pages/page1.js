import styles from "./Page1.module.css";

export default function Page1({ setPage }) {
  const handleNext = () => {
    setPage(2);
  };
  return (
    <>
      <h1>Info</h1>
      <p>Placeholder...</p>
      <button
        type="button"
        className={styles.button}
        onClick={() => {
          handleNext();
        }}
      >
        Next
      </button>
    </>
  );
}

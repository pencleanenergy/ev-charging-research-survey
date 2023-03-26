import styles from "./Page2.module.css";

export default function Page2({ setPage, setValue, setBidIncrement, monthly }) {
  const handleYes = () => {
    setPage(4);
  };
  const handleNo = () => {
    setPage(3);
    let value = monthly ? 10 : 40;
    setValue(value);
    setBidIncrement(1);
  };
  let prompt = (
    <>
      <div>Would you participate in the program for:</div>
      <p>
        <b>no payment</b>?
      </p>
    </>
  );
  return (
    <>
      <h1>Survey Question</h1>
      {prompt}
      <div className={styles.buttonrow}>
        <button
          type="button"
          className={styles.button}
          onClick={() => {
            handleYes();
          }}
        >
          Yes
        </button>
        <button
          type="button"
          className={styles.button}
          onClick={() => {
            handleNo();
          }}
        >
          No
        </button>
      </div>
    </>
  );
}

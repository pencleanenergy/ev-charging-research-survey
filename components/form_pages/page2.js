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
  return (
    <>
      <div className={styles.banner}>
        <h1 className={styles.p_container}>
        ***Survey Question***
        </h1>
      </div>
      <h1></h1>
      <div className={styles.p_container}>
        Would you be interested in enrolling in the PCE EV managed charging program
      </div>
      <p>
        <b>no payment</b>?
      </p>
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

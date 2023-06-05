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
      {/* <div className={styles.banner}>
        <h1>***Survey Question***</h1>
      </div> */}
      <h1></h1>
      <div className={styles.p_container}>
        <div>
          Thank you for your interest in the PCE electric vehicle charging
          program!
        </div>
        <div>
          We are now going to ask you a few questions to help us understand if we
          are able to provide a large enough incentive for you to participate in
          the program at this time.
        </div>
        <p className={styles.textbox}>
          To start, are you interested in participating in the program for no
          additional incentive?
        </p>
      </div>

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

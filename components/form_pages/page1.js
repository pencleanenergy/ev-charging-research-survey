import styles from "../Form.module.css";

export default function Page1({ setPage, monthly }) {
  const handleNext = () => {
    setPage(15);
  };
  return (
    <>
      <div className={styles.banner}>
        <h1 className={styles.p_container}>
          Program Incentive Payments
        </h1>
      </div>
      <p className={styles.p_instructions}>
        PCE will make available incentive payments for participants in the
        EV Charging Research Project. If you are enrolled in the program we will
        provide you with a {monthly ? "monthly payment" : "one-time payment"}{" "}
        that is determined based upon our available budget for this pilot. Your
        survey answers <b>will not</b> influence the size of your incentive
        payment.
      </p>
      <div className={styles.buttonrow}>
        <button
          type="button"
          className={styles.button}
          onClick={() => {
            handleNext();
          }}
        >
          Next
        </button>
      </div>
    </>
  );
}

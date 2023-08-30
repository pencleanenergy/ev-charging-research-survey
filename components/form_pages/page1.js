import styles from "../Form.module.css";

export default function Page1({ setPage, monthly }) {
  const handleNext = () => {
    setPage(2);
  };
  return (
    <>
      <div className={styles.banner}>
        <h1 className={styles.p_container}>
          Program Incentive Payments
        </h1>
      </div>
      <p className={styles.p_container}>
        PCE will make available incentive payments for participants in the
        EV Charging Research Project. If you are enrolled in the program we will
        provide you with a {monthly ? "monthly payment" : "one-time payment"}{" "}
        that is determined based upon our available budget for this pilot. Your
        survey answers <b>will not</b> influence the size of your incentive
        payment.
      </p>
      <p className={styles.p_container}>
        The survey will ask you if you would be willing to participate in our
        pilot for a given level of incentive payment. If you are willing to
        participate for a payment that is less than or equal to our budgeted
        incentive payment, you will be enrolled in the program and receive our{" "}
        {monthly ? "monthly" : "one-time"} incentive payment. If your survey
        indicates that you would only participate for an incentive payment that
        is greater than our budgeted payment, you will not be enrolled in the
        program and will not recieve any incentive payment. Again, your survey
        answers will not influence the size of your payment. Your answers will
        only determine whether you will be enrolled in our pilot program.
      </p>
      <div className={styles.buttonrow}>
        <button
          type="button"
          className={styles.button}
          onClick={() => {
            handleNext();
          }}
        >
          Begin Survey
        </button>
      </div>
    </>
  );
}

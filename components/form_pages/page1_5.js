import styles from "../Form.module.css";

export default function Page1_5({ setPage, monthly }) {
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
      <p className={styles.p_instructions}>
        The survey will ask you if you would be willing to participate in our
        pilot for a given level of incentive payment. If you are willing to
        participate for a payment that is less than or equal to our budgeted
        incentive payment, you will be enrolled in the program and receive our{" "}
        {monthly ? "monthly" : "one-time"} incentive payment. 
      </p>  
      <p className={styles.p_instructions}>
        If your survey
        indicates that you would only participate for an incentive payment that
        is greater than our budgeted payment, you will not be enrolled in the
        program and will not recieve any incentive payment. 
        Again, your survey answers will not influence the size of your payment. Your answers will
        only determine whether you will be enrolled in our program.
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

import styles from "./Page1.module.css";

export default function Page1({ setPage }) {
  const handleNext = () => {
    setPage(15);
  };
  return (
    <>
      <div className={styles.banner}>
        <h1 className={styles.p_container}>
          Managed EV Charging From Pennisula Clean Energy
        </h1>
      </div>

      <p className={styles.p_container}>
        PCE's EV Managed Charging Program will provide you with software that
        will manage the charging of your vehicle when you are charging at home.
        We will schedule your vehicle's home charging to avoid higher price
        periods. You will have the ability to override the charging schedules at
        any time.
      </p>
      <p className={styles.p_container}>
        Managed EV Charging is currently a pilot program with limited
        availability. We anticipate that this service will eventually be made
        available to all PCE customers. This brief (no more than 3 to 5 minute)
        survey will ask you about your willingess to participate in the PCE
        Managed Charging Pilot.
      </p>
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

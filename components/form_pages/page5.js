import styles from "../Form.module.css";

export default function Page5({ maxBid, monthly }) {
  return (
    <>
      <div className={styles.p_container}>
        <p>Thank you for participating in the survey!</p>
        <p>
          Congratulations! You are invited to enroll in our pilot program.
          If you choose to enroll, you will recieve a{" "}
          {monthly ? "monthly" : "one-time"} incentive payment of{" "}
          <b>${maxBid}</b>.
        </p>
      </div>
    </>
  );
}

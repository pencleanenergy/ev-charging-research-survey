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
        <p>To claim your incentive, please register for the pilot by following this link</p>
       </div> 
       <div>
         <button
          type="button"
          className={styles.button}
          onClick={() => {
            window.location.href = "https://www.peninsulacleanenergy.com/program/ev-charging-research-project-t8-success/";
          }}
        >
          Register Here
        </button>
      </div>
    </>
  );
}

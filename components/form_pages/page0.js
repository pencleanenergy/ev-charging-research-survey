import styles from "./Page0.module.css";

export default function Page0({
  setPage,
  setSurveyCode,
  setMonthly,
  setMaxBid,
}) {
  let prompt = <label htmlFor="code">Please enter your offer code</label>;

  const handleCodeSubmit = async (e) => {
    e.preventDefault();

    setSurveyCode(e.target.code.value);
    const data = {
      code: e.target.code.value,
    };

    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/code";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    if (response.status == 400) {
      alert("Code not found");
      return;
    }
    const result = await response.json();

    console.log("code:", result.code);
    console.log("replied:", result.replied);
    console.log("monthly:", result.monthly);
    console.log("max_bid:", result.max_bid);

    if (result.replied) {
      alert("You have already replied to this survey");
      return;
    } else {
      setPage(1);
    }
    if (result.monthly) {
      setMonthly(true);
    }
    if (result.max_bid) {
      setMaxBid(result.max_bid);
    }
  };
  return (
    <>
      <div className={styles.banner}>
        <h1 className={styles.p_container}>
        Welcome to the PCE EV Charging Program
        </h1>
      </div>
      <form onSubmit={handleCodeSubmit} className={styles.form}>
        <p>{prompt}</p>
        <p>
          <input
            type="text"
            name="code"
            id="code"
            required
            className={styles.input}
          />
        </p>
        <button type="submit" className={styles.button}>
          Submit
        </button>
      </form>
    </>
  );
}

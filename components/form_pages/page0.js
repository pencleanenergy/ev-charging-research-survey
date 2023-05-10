import styles from "./Page0.module.css";

export default function Page0({
  setPage,
  setSurveyCode,
  setMonthly,
  setMaxBid,
}) {
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

    let input = document.getElementsByClassName(styles.input)[0];
    let prompt = document.getElementById("prompt");

    input.style.border = "5px solid #3a5dae";

    const response = await fetch(endpoint, options);
    if (response.status == 400) {
      // alert("Code not found");
      prompt.innerHTML = "NO!!!! NOT FOUND";
      // input.value = "";
      input.style.border = "5px solid red";
      
      return;
    }
    const result = await response.json();

    console.log("code:", result.code);
    console.log("replied:", result.replied);
    console.log("monthly:", result.monthly);
    console.log("max_bid:", result.max_bid);

    if (result.replied) {
      // alert("You have already replied to this survey");
      prompt.innerHTML = "NO!!!! ALREADY REPLIED";
      input.style.border = "5px solid red";
      return;
    } else {
      input.style.border = "5px solid green";
      prompt.innerHTML = "YES!!!!";
      await new Promise(resolve => setTimeout(resolve, 1000));
      setPage(1);
    }
    if (result.monthly) {
      setMonthly(true);
    }
    if (result.max_bid) {
      setMaxBid(result.max_bid);
    }
  };

  const handleCodeChange = async (e) => {
    let input = document.getElementsByClassName(styles.input)[0];
    input.style.border = "3px solid #3a5dae";
  };
  return (
    <>
      <div className={styles.banner}>
        <h1 className={styles.p_container}>
          Welcome to the PCE EV Charging Program
        </h1>
      </div>
      <p id="prompt">Please enter your offer code</p>
      <form onSubmit={handleCodeSubmit} className={styles.form}>
        <p>
          {/* <input autocomplete="false" name="hidden" type="text" style="display:none;"> */}
          <input
            type="text"
            name="code"
            id="code"
            required
            autoComplete="off"
            onChange={handleCodeChange}
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

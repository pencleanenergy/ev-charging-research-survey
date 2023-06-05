import styles from "./Page4.module.css";
import { useState } from "react";

export default function Page4({
  setPage,
  setBid,
  setBinding,
  surveycode,
  value,
  prevValue,
  maxBid,
  bidIncrement,
  upperBound,
  monthly,
}) {
  const [approved, setApproved] = useState(false);
  const [prevBid, setPrevBid] = useState(0);

  let prompt;
  if (upperBound) {
    prompt = (
      <label htmlFor="code">
        <div>
          Your responses indicate that you are willing to participate in the
          program for:
        </div>{" "}
        <p>
          greater than a <b>${value}</b>{" "}
          {monthly ? "monthly payment" : "one-time payment"}.
        </p>
        <p className={styles.textbox}>
          Please enter the exact minimum amount in dollars you would need as a{" "}
          {monthly ? "monthly payment" : "one-time payment"} to participate.
        </p>
      </label>
    );
  } else {
    prompt = (
      <label htmlFor="code">
        <div>
          Thanks for your feedback. It looks like you would be interested in
          participating in the program for a {monthly ? "monthly" : "one-time"}{" "}
          incentive payment of between <b>${prevValue}</b> and <b>${value}</b>.
          We need to hone in on this a little more.
        </div>
        <p className={styles.textbox}>
          Please enter the exact amount in dollars you would need to recieve as
          a {monthly ? "monthly" : "one-time"} incentive payment to participate.
        </p>
      </label>
    );
  }

  const handleBidSubmit = async (e) => {
    e.preventDefault();

    // let input = document.getElementsByClassName(styles.input)[0];
    let input = document.getElementsByClassName(styles.input)[0];
    let prompt = document.getElementById("prompt");
    let button = document.getElementsByClassName(styles.button)[0];

    input.style.border = "5px solid #3a5dae";

    const inputBid = e.target.bid.value;
    if (
      inputBid > value &&
      !upperBound &&
      (!approved || prevBid !== inputBid)
    ) {
      input.style.border = "5px solid yellow";
      prompt.innerHTML = `You previously answered that you were interested in participating for <b>$${value}</b>. <p>Are you sure you that <b>$${inputBid}</b> is the minimum incentive payment you would need to be interested?</p>`;
      setPage(4);
      setApproved(true);
      setPrevBid(inputBid);
      button.innerHTML = "Confirm";
      return;
    }
    if (inputBid < prevValue && (!approved || prevBid !== inputBid)) {
      input.style.border = "5px solid yellow";
      prompt.innerHTML = `You previously answered that you were not interested in participating for <b>$${prevValue}</b>. <p>Are you sure you that <b>$${inputBid}</b> is the minimum incentive payment you would need to be interested?</p>`;
      setPage(4);
      setApproved(true);
      setPrevBid(inputBid);
      button.innerHTML = "Confirm";
      return;
    }
    if (!approved || prevBid !== inputBid) {
      prompt.innerHTML = `Are you sure you that <b>$${inputBid}</b> is the minimum incentive payment you would need to be interested? <p>Please click to confirm.</p>`;
      setPage(4);
      setApproved(true);
      setPrevBid(inputBid);
      button.innerHTML = "Confirm";
      return;
    }

    input.style.border = "5px solid green";
    // button.style.backgroundColor = "#fff";
    await new Promise((resolve) => setTimeout(resolve, 500));

    const Data = {
      code: surveycode,
      bid: inputBid,
    };
    const JSONdata = JSON.stringify(Data);
    console.log(JSONdata);
    const Endpoint = "/api/submit";
    const Options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(Endpoint, Options);
    if (response.status == 400) {
      alert("Code not found");
    }

    setBid(inputBid);
    if (inputBid < maxBid) {
      setBinding(true);
      setPage(5);
    } else {
      setPage(6);
    }
  };

  const handleCodeChange = async (e) => {
    let bid = document.getElementsByClassName(styles.input)[0].value;
    let prompt = document.getElementById("prompt");
    let container = document.getElementById("container");
    let offset = (165 - bid.length * 7).toString() + "px";
    container.style.setProperty("--offset", offset);

    let inputBid = parseInt(bid);
    console.log(inputBid);
    let input = document.getElementsByClassName(styles.input)[0];

    if (inputBid < value && inputBid > prevValue) {
      console.log("blue");
      input.style.border = "3px solid #3a5dae";
      prompt.innerHTML = "";
    } else if (bid === "") {
      console.log("NaN");
      input.style.border = "3px solid #3a5dae";
      prompt.innerHTML = "";
    }
  };
  return (
    <>
      <div className={styles.contents}>
        <div className={styles.p_container}>{prompt}</div>
        <form onSubmit={handleBidSubmit} className={styles.form}>
          <p id="container" className={styles.container}>
            <input
              type="number"
              name="bid"
              id="bid"
              required
              autoComplete="off"
              onChange={handleCodeChange}
              onClick={handleCodeChange}
              className={styles.input}
            />
          </p>
          <div id="prompt" className={styles.p_container}></div>
          <button type="submit" className={styles.button}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

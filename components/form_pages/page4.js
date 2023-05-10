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
        <p>
          Please enter the exact minimum amount in dollars you would need as a{" "}
          {monthly ? "monthly payment" : "one-time payment"} to participate.
        </p>
      </label>
    );
  } else {
    prompt = (
      <label htmlFor="code">
        <div>
          Your responses indicate that you are willing to participate in the
          program for
        </div>{" "}
        <p>
          between a <b>${prevValue}</b> and <b>${value}</b>{" "}
          {monthly ? "monthly payment" : "one-time payment"}.
        </p>
        <p>
          Please enter the exact minimum amount in dollars you would need as a{" "}
          {monthly ? "monthly payment" : "one-time payment"} to participate.
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
    if (inputBid > value && !upperBound && (!approved || prevBid !== inputBid)) {
      // let result = window.confirm(
      //   `This bid is higher than $${value}. Are you sure you want to make this bid?`
      // );
      // if (!result) {
      //   setPage(4);
      //   return;
      // }
      input.style.border = "5px solid yellow";
      prompt.innerHTML = `Your bid of <b>$${inputBid}</b> is higher than <b>$${value}</b>. <p>Are you sure you want to make this bid?</p>`;
      setPage(4);
      setApproved(true);
      setPrevBid(inputBid);
      button.innerHTML = "Confirm";
      return;
    }
    if (inputBid < prevValue && (!approved || prevBid !== inputBid)) {
      // let result = window.confirm(
      //   `This bid is less than $${prevValue}. Are you sure you want to make this bid?`
      // );
      // if (!result) {
      //   setPage(4);
      //   return;
      // }
      input.style.border = "5px solid yellow";
      prompt.innerHTML = `Your bid of <b>$${inputBid}</b> is less than <b>$${prevValue}</b>. <p>Are you sure you want to make this bid?</p>`;
      setPage(4);
      setApproved(true);
      setPrevBid(inputBid);
      button.innerHTML = "Confirm";
      return;
    }

    button.style.backgroundColor = "#fff";
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (inputBid < maxBid) {
      setBinding(true);
    }

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
    setPage(5);
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
      <div className={styles.banner}>
        <h1 className={styles.p_container}>***Survey Question***</h1>
      </div>
      <form onSubmit={handleBidSubmit} className={styles.form}>
        {prompt}
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
        <div id="prompt" className={styles.prompt}></div>
        <button type="submit" className={styles.button}>
          Submit
        </button>
      </form>
    </>
  );
}

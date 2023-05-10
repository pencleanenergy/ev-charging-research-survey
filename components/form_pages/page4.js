import styles from "./Page4.module.css";

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

    const inputBid = e.target.bid.value;
    if (inputBid > value && !upperBound) {
      let result = window.confirm(
        `This bid is higher than $${value}. Are you sure you want to make this bid?`
      );
      if (!result) {
        setPage(4);
        return;
      }
    }
    if (inputBid < prevValue) {
      let result = window.confirm(
        `This bid is less than $${prevValue}. Are you sure you want to make this bid?`
      );
      if (!result) {
        setPage(4);
        return;
      }
    }
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
    let container = document.getElementById("container");
    let offset = (165 - bid.length * 7).toString() + "px";
    container.style.setProperty("--offset", offset);
  };
  return (
    <>
      <h1>Survey Question</h1>
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
        <button type="submit" className={styles.button}>
          Submit
        </button>
      </form>
    </>
  );
}

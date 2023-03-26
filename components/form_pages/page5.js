export default function Page5({ value, bid, maxBid, binding }) {
  return (
    <>
      <p>Thank you for participating in the survey!</p>
      <p>
        Your final value is: <b>${value}</b>
      </p>
      <p>
        You bid: <b>${bid}</b>
      </p>
      <p>
        Your max bid was: <b>${maxBid}</b>
      </p>
      <p>Your bid was {binding ? "accepted" : "not accepted"}</p>
    </>
  );
}

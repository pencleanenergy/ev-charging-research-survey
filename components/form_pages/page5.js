export default function Page5({ value, bid, maxBid, binding, monthly}) {
  return (
    <>
      <p>Thank you for participating in the survey!</p>
      <p>
        You are willing to enroll in EV Charging for a {monthly ? "monthly payment" : "one-time payment"} of : <b>${bid}</b>
      </p>
      <p>
        Our budgeted incentive payment is: <b>${maxBid}</b>
      </p>
      <p>Your desired incentive payment is {binding ? "within" : "more than"} our budgeted amount.</p>
      <p>Therefore you will {binding ? "" : "not"} be enrolled in our pilot program.</p>
    </>
  );
}

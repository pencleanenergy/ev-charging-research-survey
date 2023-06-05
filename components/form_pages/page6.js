export default function Page6({ value, bid, maxBid, binding, monthly}) {
    return (
      <>
        <p>Thank you for participating in the survey!</p>
        <p>
          Unfortunately, we are unable to enroll you in our pilot program.
        </p>
        <p>
          Our budgeted incentive payment is: <b>${maxBid}</b>
        </p>
        <p>Your desired incentive payment is {binding ? "within" : "more than"} our budgeted amount.</p>
        <p>Therefore you will {binding ? "" : "not"} be enrolled in our pilot program.</p>
      </>
    );
  }
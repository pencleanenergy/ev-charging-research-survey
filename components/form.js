import { useState } from "react";
import Page0 from "./form_pages/page0";
import Page1 from "./form_pages/page1";
import Page1_5 from "./form_pages/page1_5";
import Page2 from "./form_pages/page2";
import Page3 from "./form_pages/page3";
import Page4 from "./form_pages/page4";
import Page5 from "./form_pages/page5";
import Page6 from "./form_pages/page6";

export default function Form() {
  const [page, setPage] = useState(0);

  const [surveycode, setSurveyCode] = useState("");
  const [monthly, setMonthly] = useState(false);
  const [maxBid, setMaxBid] = useState(0);
  const [value, setValue] = useState(0);
  const [prevValue, setPrevValue] = useState(0);
  const [bid, setBid] = useState(0);
  const [binding, setBinding] = useState(false);
  const [bidIncrement, setBidIncrement] = useState(0);
  const [upperBound, setUpperBound] = useState(false);

  switch (page) {
    case 0:
      // Survey Code
      return (
        <Page0
          setPage={setPage}
          setSurveyCode={setSurveyCode}
          setMonthly={setMonthly}
          setMaxBid={setMaxBid}
        />
      );
    case 1:
      // Survey Info
      return <Page1
      		setPage={setPage} 
      		monthly={monthly} />;  
    case 15:
      // Survey Info
      return <Page1_5
      		setPage={setPage} 
      		monthly={monthly} />;    		
    case 2:
      // No payment
      return (
        <Page2
          setPage={setPage}
          setValue={setValue}
          setBidIncrement={setBidIncrement}
          monthly={monthly}
        />
      );
    case 3:
      // Incremental values
      return (
        <Page3
          setPage={setPage}
          setValue={setValue}
          setPrevValue={setPrevValue}
          setBidIncrement={setBidIncrement}
          setUpperBound={setUpperBound}
          value={value}
          bidIncrement={bidIncrement}
          monthly={monthly}
        />
      );
    case 4:
      // Exact bid
      return (
        <Page4
          setPage={setPage}
          setBid={setBid}
          setBinding={setBinding}
          surveycode={surveycode}
          value={value}
          prevValue={prevValue}
          maxBid={maxBid}
          bidIncrement={bidIncrement}
          upperBound={upperBound}
          monthly={monthly}
        />
      );
    case 5:
      // Results page
      return (
        <Page5 maxBid={maxBid} monthly={monthly} />
      );
    case 6:
      // Results page
      return (
        <Page6 />
      );
  }
}

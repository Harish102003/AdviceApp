import React, { useEffect } from "react";
import "../index.css";
import { useState } from "react";

const AdviceApp = () => {
  const [advice, setAdvice] = useState("Please click button to get advice");
  const [count, setCount] = useState(0);
  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }
  useEffect(function () {
    getAdvice();
  }, []);
  return (
    <div className="container">
      <img src="public\images\profile.jpg" className="img"></img>
      <h3>Advice For You take it!!!!</h3>
      <p>{advice}</p>
      <button onClick={getAdvice}>Get Advice</button>
      <p>
        you have read <b>{count}</b> pieces of advice
      </p>
      <p>after click just wait 2seconds</p>
    </div>
  );
};

export default AdviceApp;

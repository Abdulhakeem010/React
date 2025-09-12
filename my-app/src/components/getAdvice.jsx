import { useState } from "react";

export default function GetAdvice() {
  const [advice, setAdvice] = useState("");

  async function FetchAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();

    setAdvice(data.slip.advice);

    return <h1>{advice}</h1>;
  }

  return <FetchAdvice />;
}

import { useEffect, useState } from "react";
import GetCurentTime from "./components/time";
import GetAdvice from "./components/getAdvice";

export default function App() {
  // const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  // async function getAdvice() {
  //   const res = await fetch("https://api.adviceslip.com/advice");
  //   const data = await res.json();

  //   setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  // }

  // useEffect(function() {
  //   GetAdvice
  // },[])

  return (
    <div>
       <GetAdvice/>
      <GetCurentTime/>
      <button onClick={GetAdvice}>Get advice</button>
     <Message count={count}/>
    </div>
  );
}

function Message(props) {
  return <p>You have read <strong>{props.count}</strong> pieces of advices</p>
}

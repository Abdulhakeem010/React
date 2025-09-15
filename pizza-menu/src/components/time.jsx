import { useState } from "react";

export default function GetCurentTime() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return <h2>It's {time}</h2>;
}

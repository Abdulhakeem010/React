export default function app() {

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();

    console.log(data);
  }

  return (
    <div>
      <h1>Hello World!</h1>
      <button onClick={getAdvice}>Get advice</button>
    </div>
  );
}

// function getCount() {
//   return <p>"You have read {count} advice"</p>;
// }

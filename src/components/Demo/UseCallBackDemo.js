import { useState } from "react";
import UseCallBackDemoChild from "./UseCallBackDemoChild";

export default function UseCallBackDemo() {
  const [results, setResults] = useState([75, 80]);
  const [total, setTotal] = useState(0);

  console.log("UseCallBackDemo Parent");

  function setTotalMarks() {
    setTotal(total + 1);
  }

  return (
    <div>
      <h1>Callback demo</h1>
      <UseCallBackDemoChild results={results} />
      <button className="mt-4 btn btn-warning" onClick={setTotalMarks}>
        Increment: {total}
      </button>
    </div>
  );
}

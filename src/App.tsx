import { useState } from "react";
import reactLogo from "./assets/react.svg";

function App() {
  const [count, setCount] = useState(0);

  console.log("test commit");

  return (
    <>
      <div className="text-red-500 bg-amber-500 h-fit w-full flex justify-center">
        Bestwater
      </div>
    </>
  );
}

export default App;

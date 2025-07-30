import { Card, CardContent } from "@/components/ui/card";
import { APITester } from "./APITester";
import "@/public/styles/globals.css";

import logo from "@/public/images/logo.svg";
import reactLogo from "@/public/images/react.svg";
import CounterComponent from "@/components/shared/Counter";
import { useState } from "react";

export function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="flex justify-center align-center h-screen w-screen text-center relative z-10">
      <div className="w-full h-full justify-center items-center flex flex-col gap-8">
        <h2 className="text-xl font-semibold">Counter Component</h2>
        <CounterComponent
          count={count}
          onIncrement={increment}
          onDecrement={decrement}
          onReset={reset}
        />
      </div>
    </div>
  );
}

export default App;

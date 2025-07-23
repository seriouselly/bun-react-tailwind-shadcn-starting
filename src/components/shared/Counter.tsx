import React, { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const onIncrement = () => setCount(count + 1);
  const onDecrement = () => setCount(count - 1);

  return (
    <div>
      <div className="text-center">
        <h1>Count: {count}</h1>
      </div>
      <div className="flex gap-4 justify-center mt-4">
        <button
          onClick={onIncrement}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          +
        </button>
        <button
          onClick={onDecrement}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          -
        </button>
      </div>
    </div>
  );
};

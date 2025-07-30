interface CounterComponentProps {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
  onReset: () => void;
}

const CounterComponent = ({
  count,
  onIncrement,
  onDecrement,
  onReset,
}: CounterComponentProps) => {
  return (
    <div>
      <h1>Count: {count}</h1>
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
      <button
        onClick={onReset}
        className="mt-4 bg-gray-500 text-white px-4 py-2 rounded"
      >
        Reset
      </button>
    </div>
  );
};

export default CounterComponent;

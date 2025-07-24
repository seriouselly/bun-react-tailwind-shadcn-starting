interface CounterComponentProps {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

const CounterComponent = ({
  count,
  onIncrement,
  onDecrement,
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
    </div>
  );
};

export default CounterComponent;

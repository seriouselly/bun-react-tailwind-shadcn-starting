import { useCounter } from "../store/counterStore";
import { Button } from "@/components/ui/button";

export function CounterZustand() {
  const { count, increment, decrement } = useCounter();

  return (
    <div className="flex gap-2 items-center mt-4">
      <Button onClick={increment}>+</Button>z
      <span className="text-xl font-bold">{count}</span>
      <Button onClick={decrement}>-</Button>
    </div>
  );
}

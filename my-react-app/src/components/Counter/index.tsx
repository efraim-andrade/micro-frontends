import { useState } from "react";

interface CounterProps {
  incrementBy?: number;
  initialValue?: number;
}

export function Counter({ incrementBy = 1, initialValue = 0 }: CounterProps) {
  const [count, setCount] = useState(initialValue);

  return (
    <div className="relative rounded-md border-2 border-dashed border-blue-400 p-4">
      <span className="absolute left-4 top-[-8px] rounded-sm bg-zinc-900 px-1 text-xs font-bold text-blue-200">
        from: my-react-app-1
      </span>

      <button
        onClick={() => setCount(count + incrementBy)}
        className="rounded-md bg-zinc-200 px-4 py-2 text-zinc-900"
      >
        Click to increment: <span className="text-lime-950">{count}</span>
      </button>
    </div>
  );
}

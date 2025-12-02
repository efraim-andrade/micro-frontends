import { useRef, useEffect } from "react";
import { Counter } from "my-react-app-1/Counter";
import animationWrapper from "my-vue-app/animationWrapper";

import "./index.css";

function App() {
  const animationRef = useRef<HTMLElement>(null);

  useEffect(() => {
    animationWrapper(animationRef.current);
  }, []);

  return (
    <main className="flex h-screen flex-col items-center justify-center gap-8 bg-zinc-900 text-white">
      <h1 className="text-3xl font-bold">My React App 2</h1>

      <Counter incrementBy={10} initialValue={5} />

      <div ref={animationRef as React.RefObject<HTMLDivElement>} />
    </main>
  );
}

export default App;

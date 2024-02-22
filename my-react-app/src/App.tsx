import "./index.css";
import { Counter } from "./components/Counter";

function App() {
  return (
    <main className="flex h-screen flex-col items-center justify-center gap-8 bg-zinc-900 text-white">
      <h1 className="text-3xl font-bold">My React App 1</h1>

      <Counter incrementBy={10} initialValue={5} />
    </main>
  );
}

export default App;

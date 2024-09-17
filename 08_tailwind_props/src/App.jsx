import { useState } from "react";
import placeholder from "./assets/placeholder.jpg"
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-gray-900">
        <img
          className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src={placeholder}
          alt=""
          width="384"
          height="512"
        />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-light leading-8">
              “Only after disaster can we be{" "}
              <span className="text-rose-400">resurrected</span>. It's only
              after you've lost everything that you're{" "}
              <span className="text-rose-400">free</span> to do anything.
              Nothing is static, everything is{" "}
              <span className="text-rose-400">evolving</span>, everything is
              falling apart.”
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-rose-400">Tyler Durden</div>
            <div className="text-slate-700 dark:text-slate-500">
              Fight Club
            </div>
          </figcaption>
        </div>
      </figure>
    </>
  );
}

export default App;

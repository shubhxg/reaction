import { useState, useEffect } from "react";

export default function Card({ imgSource, name, rating, isNerdy }) {
  const [count, setCount] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
      console.log(`Card been rendered!`);
    }, [hasLiked]
  );

  return (
    <div
      className="card py-3 px-3 ease-out duration-300 rounded-xl hover:bg-[#1d284d] hover:outline outline-violet-900 outline-2"
      onClick={() => {
        setCount((prevState) => prevState + 1);
      }}
    >
      <img
        className="object-cover mb-4 w-48 h-40 rounded-lg"
        src={imgSource}
        alt="Card"
        width={"200px"}
      />
      <h3 className="text-xl mt-1 font-bold">{name}</h3>
      <h5 className="text-sm ">⭐ {rating}</h5>
      <div className="flex justify-between">
        <h5 className="text-xs">{isNerdy ? "Nerdy Show" : "Drama/Comedy"} {count || null}</h5>
        <button
          onClick={() => setHasLiked((prevState) => !prevState)}
          className={
            hasLiked
              ? "text-xs bg-violet-800 py-1 px-4 mt-2 rounded-md"
              : "text-xs bg-[#212f4d] py-1 px-3 mt-2 rounded-md hover:bg-violet-900"
          }
        >
          {hasLiked ? "💜 Liked" : "🤍"}
        </button>
      </div>
    </div>
  );
}
